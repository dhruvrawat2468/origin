// import React from 'react'


const Header = (props) => {
  const logout=()=>{
    localStorage.removeItem("loggedinUser");
       props.data('');
  }
  return (
    <div className='flex items-end justify-between'>
        <div className='flex flex-col justify-start '>
        <h1 className='w-fit text-2xl font-medium'>Hello</h1>
        <h1 className='text-3xl font-semibold'> 👋</h1>
        </div>
        <button  className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm' onClick={logout}>Log Out</button>
    </div>
  )
}

export default Header
