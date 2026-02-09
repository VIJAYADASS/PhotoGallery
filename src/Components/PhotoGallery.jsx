import React, { useEffect, useState } from 'react'

function PhotoGallery() {
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetch(`https://jsonfakery.com/photos/paginated?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.data)
        setTotalPages(data.last_page);
        setLoading(false);
      })
  }, [page])
  
   const renderPageNumbers = () => {
    let numbers = [];
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, page + 2);

    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <div className='min-h-screen bg-orange-200 p-8 text-amber-900'>
      <h3 className='font-extrabold text-3xl text-center mb-8 ' >Photo Explorer</h3>

      {loading ? (
        <p className='text-center text-xl font-semibold'>Loading...</p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {photos.map((photo) => (
            <div key={photo.id} className='bg-white rounded-xl shadow-md overflow-hidden'>
              <img src={photo.photo_url} className='w-full h-48 object-cover' alt="img" />
              <div className='p-4 text-sm font-bold truncate'>{photo.caption}</div>
            </div>
          ))}
        </div>
      )}

      <div className="flex  flex-col items-center mt-12 gap-4">
        <div className='flex items-center gap-2 bg-white p-2  rounded-lg shadow'>

          <button 
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 bg-gray-100 rounded hover:bg-orange-900 hover:text-white disabled:opacity-20 cursor-pointer"
          >
            Prev
          </button>

          {renderPageNumbers().map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-10 h-10 rounded font-bold cursor-pointer ${
                page === num ? 'bg-orange-900 text-white' : 'bg-gray-100'
              }`}
            >
              {num}
            </button>
          ))}

          <button 
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 bg-gray-100 rounded hover:bg-orange-900 hover:text-white disabled:opacity-20 cursor-pointer"
          >
            Next
          </button>  
        </div>

        <p className='text-black font-medium'>
          Page <span className="text-orange-900">{page}</span> of <span className="text-orange-900">{totalPages}</span>
        </p>
      </div>
    </div>
  )
}

export default PhotoGallery