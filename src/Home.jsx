import React from 'react';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Customers</h1>
      <div className="float-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="fill-current text-black mr-2"><path d="M16 4c-4.12 0-7.36 3.13-7.813 7.125a4.895 4.895 0 0 0-3.843 3.22C1.884 15.054 0 17.248 0 20c0 3.324 2.676 6 6 6h20c3.324 0 6-2.676 6-6c0-1.76-.855-3.336-2.094-4.438c-.232-3.514-3.035-6.318-6.562-6.5C22.14 6.133 19.378 4 16 4m0 2c2.762 0 4.97 1.77 5.75 4.28l.22.72H23c2.755 0 5 2.245 5 5v.5l.406.313A4.07 4.07 0 0 1 30 20c0 2.276-1.724 4-4 4H6c-2.276 0-4-1.724-4-4c0-2.02 1.45-3.588 3.28-3.906l.657-.125l.125-.658C6.362 13.964 7.556 13 9 13h1v-1c0-3.37 2.63-6 6-6m0 5.594l-.72.687l-4 4l1.44 1.44L15 15.437V22h2v-6.563l2.28 2.282l1.44-1.44l-4-4z"/></svg>
        <p className="text-xl">Upload</p>
      </div>
      <div className="mb-4 ">
        <ul className="flex list-none pl-4 border-2 rounded-tl-lg rounded-br-md">            <
            li className='p-2 text-xl '>Overview</li>
            <li className='p-2 text-xl '>Table</li>
            <li className='p-2 text-xl '>List view</li>
            <li className='p-2 text-xl '>Segment</li>
        </ul>
      </div>

        <div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75"/></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="black" d="M112 60a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 52a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16"/></svg>
            <p>Total Customer</p>
            <p>2,420</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m6-8l-6-6m-6 6l6-6"/></svg>
                <p>20%</p>
            </div>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="black" d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="black" d="M112 60a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 52a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16"/></svg>
                <p>Members</p>
                <p>1,210</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m6-8l-6-6m-6 6l6-6"/></svg>
                <p>15%</p>
            </div>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" fill-rule="nonzero" d="M19 3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-4v1h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h1v-1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm-6 15h-2v1h2zm6-13H5v11h14z"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="black" d="M112 60a16 16 0 1 1 16 16a16 16 0 0 1-16-16m16 52a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16"/></svg>

                <p>Active Now</p>
                <p>316</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
