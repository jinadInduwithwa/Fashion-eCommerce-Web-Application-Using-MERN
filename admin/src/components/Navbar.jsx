import React from 'react';

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
        <h1>Admin</h1>
      <button onClick={()=>setToken('')} className="bg-gray-600 px-5 py-2 rounded-full sm:py-2 sm:px-7 text-white">Log out</button>
    </div>
  );
};

export default Navbar;
