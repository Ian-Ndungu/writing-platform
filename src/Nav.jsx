import React from 'react';

function Nav() {
  return (
    <div className=''>
      <div className='font-bold'>ANDIKA</div>
      <nav className='flex space-x-2 font-bold'>
        <ul className='flex space-x-8 ml-96'>
          <li className='p-2 text-xl'>Home</li>
          <li className='p-2 text-xl'>Projects</li>
          <li className='p-2 text-xl'>Tasks</li>
          <li className='p-2 text-xl'>Reporting</li>
          <li className='p-2 text-xl'>User</li>
        </ul>
        <div className="flex justify-end space-x-8 float-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
      </div>
      </nav>
    </div>
  );
}

export default Nav;
