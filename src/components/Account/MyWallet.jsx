import React from 'react'

const MyWallet = () => {
  return (
    <div className="w-full">
    <div className='flex flex-col items-center justify-center rounded m-5 bg-primary-light w-full h-[139px]'>
      <h3 className='text-[16px] font-[400]'>My Available Balance:</h3>
      <span className='text-[32px] font-[500]'>₹0</span>
    </div>
    </div>
  )
}

export default MyWallet