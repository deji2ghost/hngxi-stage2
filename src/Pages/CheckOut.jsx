import React from 'react'
import { useSelector } from 'react-redux'
import './Checkout.css'
import { Link } from 'react-router-dom'

export const CheckOut = () => {
    const state = useSelector(state => state.cart)
  return (
    <div className='bg-lightPink w-[90%] lg:w-[60%] mx-auto mt-6 py-3 px-5'>
        <div className='flex flex-col-reverse md:flex-row items-start'>
            <div className='md:w-[80%] gap-4 mb-4'>
                <div className='checkbox flex items-center justify-evenly mb-20'>
                    <div className='flex flex-col'>
                        <input type='checkbox' className='checkbox rounded-full border-2 bg-red-950'/>
                        <label>Skipping</label>
                    </div>
                    <div className='flex flex-col'>
                        <input type='checkbox' className='checkbox rounded-full border-2 bg-red-950'/>
                        <label>Billing</label>
                    </div>
                    <div className='flex flex-col'>
                        <input type='checkbox' className='checkbox rounded-full  border-2 bg-red-950'/>
                        <label>Confirmation</label>
                    </div>
                </div>
                <div className='mb-12'>
                    <h1>Payment Method</h1>
                    <div className='checkbox flex items-center justify-evenly'>
                        <div className='flex flex-col'>
                            <input type='checkbox' className='checkbox rounded-full border-2 bg-red-950'/>
                            <label>Skipping</label>
                        </div>
                        <div className='flex flex-col'>
                            <input type='checkbox' className='checkbox rounded-full border-2 bg-red-950'/>
                            <label>Billing</label>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <h1 className='mb-9'>Payment Details</h1>
                    <form className='flex flex-col gap-16'>
                        <input type='text' placeholder='Enter Name On Card' className='border-b-2 border-opacity-50 focus:border-opacity-100 border-brown outline-none bg-inherit md:w-[70%]'/>
                        <input type='text' placeholder='Card Number' className='border-b-2 border-opacity-50 focus:border-opacity-100 border-brown outline-none bg-inherit md:w-[70%]'/>
                        <div className='gap-6 md:w-[70%] md:flex items-center md:gap-14'>
                            <input type='text' placeholder='Expiration' className='border-b-2 border-opacity-50 focus:border-opacity-100 border-brown outline-none bg-inherit w-[ md:w-[60%]'/>
                            <input type='text' placeholder='CVV Code' className='border-b-2 border-opacity-50 focus:border-opacity-100 border-brown outline-none bg-inherit w-[ md:w-[30%]'/>
                        </div>
                    </form>
                </div>

                <h1 className='font-[400] mt-2'><input type='checkbox'/> By Clicking ‘Confirm Payment’ I Agree To The Store Terms and Services</h1>
            </div>
            <div className='md:w-[20%]'>
                {
                    state.map(item => {
                        return(
                            <div className='border-brown border mb-8 md:h-[230px] flex flex-col items-center justify-between'>
                                <h1 className='text-center'>{item.name}</h1>
                                <div className=''>
                                    <img src={item.image} />
                                </div>
                                <p className='text-center'>${item.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <button className='bg-[#48190D99] w-[30%] text-white p-3 rounded-[12px]'>
                <Link to='/cart'>
                    Back
                </Link>
            </button>
            <button className='bg-brown w-[60%] text-white p-3 rounded-[12px]'>Confirm Payment</button>
        </div>
    </div>
  )
}
