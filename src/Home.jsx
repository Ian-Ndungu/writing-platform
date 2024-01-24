import React from 'react';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Customers</h1>

      <div className="float-right flex items-center space-x-4">
        <div className="flex items-center ">
            <button className="flex items-center bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="fill-current text-black mr-2">
                <path d="M16 4c-4.12 0-7.36 3.13-7.813 7.125a4.895 4.895 0 0 0-3.843 3.22C1.884 15.054 0 17.248 0 20c0 3.324 2.676 6 6 6h20c3.324 0 6-2.676 6-6c0-1.76-.855-3.336-2.094-4.438c-.232-3.514-3.035-6.318-6.562-6.5C22.14 6.133 19.378 4 16 4m0 2c2.762 0 4.97 1.77 5.75 4.28l.22.72H23c2.755 0 5 2.245 5 5v.5l.406.313A4.07 4.07 0 0 1 30 20c0 2.276-1.724 4-4 4H6c-2.276 0-4-1.724-4-4c0-2.02 1.45-3.588 3.28-3.906l.657-.125l.125-.658C6.362 13.964 7.556 13 9 13h1v-1c0-3.37 2.63-6 6-6m0 5.594l-.72.687l-4 4l1.44 1.44L15 15.437V22h2v-6.563l2.28 2.282l1.44-1.44l-4-4z"/>
              </svg>
                Upload
                
            </button>
          
          </div>
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Add Customer</button>
      </div>

      <div className="mb-4">
        <ul className="flex list-none pl-4 border-2 rounded-tl-lg rounded-br-md">
          <li className='p-2 text-xl '>Overview</li>
          <li className='p-2 text-xl '>Table</li>
          <li className='p-2 text-xl '>List view</li>
          <li className='p-2 text-xl '>Segment</li>
        </ul>
      </div>
      {/* first */}
      <div className='flex items-center'>
        <div className='bg-white border border-gray-300 rounded-lg p-4 m-4 text-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className="fill-none stroke-black stroke-linecap-round stroke-linejoin-round stroke-width-2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75"/>
          </svg>

          {/* dots */}
          <div className='flex items-start justify-end mb-8 ml-8'>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 20 20">
              <path fill="black" d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"/>
            </svg>
          </div>

          <p className="text-xl font-bold">Total Customer</p>
          <p className="text-lg">2,420</p>

          <div className="flex items-center relative border border-gray-300 rounded-full">
          
             <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className="fill-none stroke-black stroke-linecap-round stroke-linejoin-round stroke-width-2"> <path d="M12 5v14m6-8l-6-6m-6 6l6-6"/> </svg>
             <p className="text-lg">20%</p>
          </div>
        </div>
        {/* second */}
        <div className='bg-white border border-gray-300 rounded-lg p-4 m-4 text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 32 32" className="fill-black">
              <path d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"/>
            </svg>

            {/* dots */}
            <div className='flex items-start justify-end mb-8 ml-8'>
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 20 20">
                <path fill="black" d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"/>
              </svg>
            </div>
          
          <p className="text-xl font-bold">Members</p>
          <p className="text-lg">1,210</p>

          <div className="flex items-center relative border border-gray-300 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className="fill-none stroke-black stroke-linecap-round stroke-linejoin-round stroke-width-2">
              <path d="M12 5v14m6-8l-6-6m-6 6l6-6"/>
            </svg>
            <p className="text-lg">15%</p>
          </div>
        </div>
        
        {/* third */}
        <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" className="fill-black">
            <path fill="black" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-4v1h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h1v-1H5a2 2 0 0 1-2-2zm18 11V5H4v11z"/>
          </svg>

          {/* dots */}
          <div className='flex items-start justify-end mb-8 ml-8'>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 20 20">
              <path fill="black" d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"/>
            </svg>
          </div>

          <p className="text-xl font-bold">Active Now</p>
          <p className="text-lg">316</p>
        </div>
      </div>

      {/* mid-dash-board */}
      <div>
       <div> 
          <h1 className="font-bold">Customers(1,644)</h1>
          <p className='text-gray-500'>Customers that have purchased a subscription</p>
        </div>
        <div className='flex items-center justify-end'>
          <input type="text" placeholder="Search..." className="border border-gray-300 p-1 rounded-full"/>
          <div className='flex items-center'>
            <button className="flex items-center bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22c-9 1-8-10 0-9C6 2 23 2 22 10c10-3 10 13 1 12m-12 4l5 4l5-4m-5-10v14"/></svg>
              Export to CVS</button>
          </div>
        </div>
      </div>
      {/* Mid-navigation */}
      <div className='flex items-center border p-1'>
          <div>
            <ul className='flex items-center space-x-4 '>
              <li className='border p-1'>View All</li>
              <li className='border p-1'>Your Files</li>
              <li className='border p-1'>Shared Files</li>
            </ul>
          </div>
          <div className='flex items-center justify-end space-x-4 ml-auto'>
        <div className='flex items-center border p-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256">
            <path fill="green" d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"/>
          </svg>
          <p>Jan 1-Jan 30</p>
        </div>
        <div className='flex items-center border p-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 256 256">
            <path fill="green" d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"/>
          </svg>
          <p>Dashboard 2.0</p>
        </div>
        <div className='flex items-center'>
          <button className="flex items-center bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path fill="black" d="M10 2.5a.5.5 0 0 0-1 0V9H2.5a.5.5 0 0 0 0 1H9v6.5a.5.5 0 0 0 1 0V10h6.5a.5.5 0 0 0 0-1H10z"/>
          </svg>
          Add Files</button>
        </div>
      </div>
      </div>

      {/* Customer-info */}
      <div>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-4'>
            <p>Customer</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="black" d="M4.97 13.22a.75.75 0 0 1 1.06 0L11 18.19V3.75a.75.75 0 0 1 1.5 0v14.44l4.97-4.97a.749.749 0 0 1 1.275.326a.749.749 0 0 1-.215.734l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06"/></svg>
          </div>
          <div className='flex justify-center'>
            <ul className='space-x-4 ml-auto flex justify-center'>
              <li>Status</li>
              <li>Plan</li>
              <li>Billing Date</li>
              <li>Lincese Use</li>
              <li className='ml-2'>Users</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
