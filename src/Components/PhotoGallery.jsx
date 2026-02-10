import React, { useEffect, useState } from 'react'

function PhotoGallery() {
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetch(`https://jsonfakery.com/photos/paginated?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.data)
        setTotalPages(data.last_page);
        setLoading(false);
      })
      .catch(err =>
        console.error("Error fetching photos:", err));
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
    <div className='min-h-screen bg-linear-to-br from-slate-50 to-slate-200 p-6 md:p-12 text-slate-800 font-sans'>
      <div className='max-w-7xl mx-auto'>
        <h3 className='text-5xl font-black text-center mb-12 text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-indigo-400 tracking-wide ' >
          PHOTO EXPLORER
        </h3>
      </div>
      
      {loading ? (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 animate-pulse'>
            {[...Array(8)].map((_, i) => (
              <div key={i} className='bg-slate-300 h-64 rounded-2xl flex items-center justify-center'>
                <p className='text-lg font-semibold text-slate-600'>Loading...</p>
              </div>

            ))}
          </div>
        
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {photos.map((photo) => (
            <div
              key={photo.id}
             className='group bg-white rounded-xl shadow-lg overflow-hidden border-transparent hover:border-orange-950 transition-all'
            >
              <div className='overflow-hidden'>
                <img 
                  src={photo.photo_url}
                  className='w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 '
                  alt="img"
                />
              </div>
              
              <div className='p-5'>
                <p className='font-bold text-slate-700 truncate group-hover:text-indigo-400 transition-colors'>
                  {photo.caption || "Untitled Workspace"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col items-center mt-16 gap-6">
        <div className='flex items-center gap-2 bg-white p-2 rounded-lg shadow'>

          <button 
            disabled={page === 1 || loading}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 bg-gray-100 rounded-lg hover:bg-violet-400 hover:text-white transition disabled:opacity-30 cursor-pointer"
          >
            Prev
          </button>

          {renderPageNumbers().map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-10 h-10 rounded-full font-bold cursor-pointer transition ${
                page === num
                ? 'bg-violet-400 text-white'
                : 'bg-gray-100'
              }`}
            >
              {num}
            </button>
          ))}

          <button 
            disabled={page === totalPages || loading} 
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 bg-gray-100 rounded-lg hover:bg-violet-400 hover:text-white transition disabled:opacity-30 cursor-pointer"
          >
            Next
          </button>  
        </div>

        <p className='text-gray-500 text-sm font-medium'>
          Page <span className="text-violet-400">{page}</span>
          {" "}of {" "}
          <span className="text-violet-400">{totalPages}</span>
        </p>
      </div>
    </div>
  )
}

export default PhotoGallery