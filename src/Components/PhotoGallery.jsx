import React, { useEffect, useState } from 'react'

function PhotoGallery() {
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://jsonfakery.com/photos/paginated?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.data || data)
      })
  }, [page])
  return (
    <div className='min-h-screen bg-orange-200 p-8 text-amber-900'>
      <h3 className='font-extrabold text-3xl text-center mb-8 ' >Photo Gallery</h3>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {photos.map((photo) => (
          <div key={photo.id} className='bg-white rounded-lg shadow-gray-300 cursor-pointer overflow-hidden hover:scale-90 transform transition duration-200'>
            <img src={photo.photo_url} alt={photo.caption} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <div className='text-sm text-black-400 truncate'>{ photo.caption}</div>
            </div>
          </div>
        ))}

      </div>

      <div className="flex justify-center mt-10 space-x-4">
        
      <button 
        onClick={() => setPage(prev => Math.max(prev - 1, 1))} 
        className="px-4 py-2 bg-orange-900 text-white rounded-lg cursor-pointer">
        Previous
      </button>
      <span className="self-center font-semibold text-shadow-gray-950 ">Page {page}</span>
      <button 
        onClick={() => setPage(prev => prev + 1)} 
        className="px-4 py-2 bg-orange-900 text-white rounded-lg cursor-pointer">
        Next
      </button>
    </div>
    </div>
  )
}

export default PhotoGallery
