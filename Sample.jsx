// import React, { useEffect, useState } from 'react'

// function Sample() {
//   const [photos, setPhotos] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [totalPages, setTotalPages] = useState(0);

//   useEffect(() => {
//     // setLoading(true);
//     // Note: I'm assuming the API returns total_pages. 
//     // If not, we can hardcode it or calculate based on total items.
//     fetch(`https://jsonfakery.com/photos/paginated?page=${page}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setPhotos(data.data || data);
//         setTotalPages(data.last_page || 10); // Adjust based on API response key
//         setLoading(false);
//         window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top on page change
//       })
//       .catch(() => setLoading(false));
//   }, [page]);

//   // Helper to generate page numbers (e.g., [1, 2, 3, 4, 5])
//   const pageNumbers = Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1);

//   return (
//     <div className='min-h-screen bg-slate-50 p-4 md:p-8 text-slate-900 font-sans'>
//       <div className='max-w-7xl mx-auto'>
//         <h3 className='font-black text-4xl text-center mb-2 tracking-tight text-orange-900'>PHOTO GALLERY</h3>
//         <p className='text-center text-slate-500 mb-10'>Discover beautiful moments captured in time.</p>

//         {loading ? (
//           /* MODERN LOADER */
//           <div className='flex flex-col items-center justify-center min-h-100'>
//             <div className='w-12 h-12 border-4 border-orange-200 border-t-orange-900 rounded-full animate-spin'></div>
//             <p className='mt-4 font-medium animate-pulse text-orange-900'>Fetching Inspiration...</p>
//           </div>
//         ) : (
//           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
//             {photos.map((photo) => (
//               <div key={photo.id} className='group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden'>
//                 <div className='overflow-hidden'>
//                    <img 
//                     src={photo.photo_url} 
//                     alt={photo.caption} 
//                     className='w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500' 
//                    />
//                 </div>
//                 <div className='p-5'>
//                   <p className='text-sm font-semibold text-slate-800 truncate'>{photo.caption || "Untitled Moment"}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* MODERN PAGINATION */}
//         <div className='flex flex-col items-center mt-16 space-y-4'>
//           <div className='flex items-center bg-white shadow-sm border border-slate-200 rounded-2xl p-1'>
            
//             <button 
//               onClick={() => setPage(p => Math.max(p - 1, 1))}
//               disabled={page === 1}
//               className='px-4 py-2 rounded-xl hover:bg-slate-100 disabled:opacity-30 transition-colors font-medium cursor-pointer'>
//               Prev
//             </button>

//             <div className='flex space-x-1 px-2'>
//               {pageNumbers.map((num) => (
//                 <button
//                   key={num}
//                   onClick={() => setPage(num)}
//                   className={`w-10 h-10 rounded-xl font-bold transition-all ${
//                     page === num 
//                     ? 'bg-orange-900 text-white shadow-orange-200 shadow-lg' 
//                     : 'hover:bg-orange-50 text-slate-600'
//                   }`}
//                 >
//                   {num}
//                 </button>
//               ))}
//             </div>

//             <button 
//               onClick={() => setPage(p => p + 1)}
//               disabled={page === totalPages}
//               className='px-4 py-2 rounded-xl hover:bg-slate-100 disabled:opacity-30 transition-colors font-medium cursor-pointer'>
//               Next
//             </button>
//           </div>
          
//           <p className='text-xs text-slate-400 font-medium uppercase tracking-widest'>
//             Page {page} of {totalPages}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Sample

// import React, { useEffect, useState } from 'react'

// function Sample() {
//   // 1. Clear, simple states
//   const [photos, setPhotos] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(true);
  
//   // We hardcode totalPages to 10 for now to keep the logic simple
//   const totalPages = 10; 

//   // 2. The Fetching Logic (The "Engine")
//   useEffect(() => {
//     // Start loading before we ask for data
//     // setLoading(true);

//     fetch(`https://jsonfakery.com/photos/paginated?page=${page}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         // Save the photos and stop the loading spinner
//         setPhotos(data.data || data);
//         setLoading(false);
//       });
//   }, [page]); // Re-run this every time the page number changes

//   // 3. Simple logic to show page numbers 1, 2, 3, 4, 5
//   // Instead of complex math, we just make a simple list
//   const pageNumbers = [1, 2, 3, 4, 5];

//   return (
//     <div className='min-h-screen bg-slate-100 p-10 text-gray-800'>
//       <h1 className='text-4xl font-black text-center mb-10 text-orange-900'>
//         MY PHOTO APP
//       </h1>

//       {/* IF LOADING: Show a simple message */}
//       {loading === true ? (
//         <div className="flex flex-col items-center justify-center h-64">
//           <div className="w-10 h-10 border-4 border-orange-900 border-t-transparent rounded-full animate-spin"></div>
//           <p className="mt-4 font-bold">Loading...</p>
//         </div>
//       ) : (
//         /* IF NOT LOADING: Show the grid */
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
//           {photos.map((photo) => {
//             return (
//               <div key={photo.id} className='bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-orange-500 transition-all'>
//                 <img 
//                   src={photo.photo_url} 
//                   className='w-full h-48 object-cover' 
//                   alt="Gallery Item"
//                 />
//                 <div className='p-4'>
//                   <p className='font-bold truncate'>{photo.caption || "Beautiful Photo"}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {/* SIMPLE PAGINATION */}
//       <div className='flex flex-col items-center mt-12 gap-4'>
        
//         <div className='flex gap-2 bg-white p-2 rounded-full shadow-md'>
          
//           {/* Previous Button */}
//           <button 
//             className="px-4 py-2 bg-gray-200 rounded-full hover:bg-orange-900 hover:text-white transition cursor-pointer disabled:opacity-30"
//             disabled={page === 1}
//             onClick={() => setPage(page - 1)}
//           >
//             Prev
//           </button>

//           {/* Numbered Buttons */}
//           {pageNumbers.map((number) => {
//             return (
//               <button
//                 key={number}
//                 onClick={() => setPage(number)}
//                 className={`w-10 h-10 rounded-full font-bold cursor-pointer transition ${
//                   page === number 
//                   ? 'bg-orange-900 text-white' 
//                   : 'bg-gray-100 hover:bg-orange-200'
//                 }`}
//               >
//                 {number}
//               </button>
//             );
//           })}

//           {/* Next Button */}
//           <button 
//             className="px-4 py-2 bg-gray-200 rounded-full hover:bg-orange-900 hover:text-white transition cursor-pointer disabled:opacity-30"
//             disabled={page === totalPages}
//             onClick={() => setPage(page + 1)}
//           >
//             Next
//           </button>

//         </div>

//         <p className="text-sm font-medium text-gray-500">
//           You are currently viewing Page {page}
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Sample

import React, { useEffect, useState } from 'react'

function Sample() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0); // Store total pages here

  useEffect(() => {
    // setLoading(true);
    fetch(`https://jsonfakery.com/photos/paginated?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        // data.data is the list of 10 photos
        // data.last_page is the total number of pages (e.g. 150)
        setPhotos(data.data);
        setTotalPages(data.last_page); 
        setLoading(false);
      });
  }, [page]);

  // Beginner Logic: Let's show only 5 page numbers at a time
  // If we are on page 1, show [1, 2, 3, 4, 5]
  // If we are on page 50, show [48, 49, 50, 51, 52]
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
    <div className='min-h-screen bg-slate-50 p-8'>
      <h1 className='text-3xl font-black text-center text-orange-900 mb-8'>
        PHOTO EXPLORER
      </h1>

      {loading ? (
        <div className="text-center font-bold py-20">Loading...</div>
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

      {/* PAGINATION SECTION */}
      <div className='flex flex-col items-center mt-12 gap-4'>
        
        <div className='flex items-center gap-2 bg-white p-2 rounded-lg shadow'>
          
          {/* 1. PREVIOUS BUTTON */}
          <button 
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 bg-gray-100 rounded hover:bg-orange-900 hover:text-white disabled:opacity-20 cursor-pointer"
          >
            Prev
          </button>

          {/* 2. DYNAMIC NUMBERS */}
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

          {/* 3. NEXT BUTTON */}
          <button 
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 bg-gray-100 rounded hover:bg-orange-900 hover:text-white disabled:opacity-20 cursor-pointer"
          >
            Next
          </button>

        </div>

        {/* 4. TOTAL PAGES INFO */}
        <p className='text-gray-500 font-medium'>
          Page <span className="text-orange-900">{page}</span> of <span className="text-orange-900">{totalPages}</span>
        </p>

      </div>
    </div>
  )
}

export default Sample