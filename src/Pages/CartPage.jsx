import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { RecentlyViewed } from '../Components/RecentlyViewed'
import { Link } from 'react-router-dom'

export const CartPage = () => {
    const state = useSelector(state=> state.cart)
    console.log(state.length)
  return (
    <div className='mt-6'>
        {
            state.map(item=> {
                return(
                    <div className=' bg-lightPink w-[90%] lg:w-[40%] mx-auto p-3 mb-6'>
                        <div className='md:flex items-start mb-4 gap-2'>
                            <div className='flex flex-col items-center justify-between md:w-[40%] md:h-[260px] p-2 border border-brown mb-3 md:mb-0'>
                                <h1 className='text-center'>{item.name}</h1>
                                <img src={item.image} />
                            </div>
                            <div className='lg:w-[60%] flex flex-col justify-between lg:h-[260px]'>
                                <p>{item.description}</p>
                                <div className='flex items-center justify-between'>
                                    <p>In Stock</p>
                                    <h1 className='font-[400] text-[25px]'>$40</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between bg-almostPink p-3'>
                            <div className='flex items-center'>
                                <FontAwesomeIcon icon={faTrash} className='text-brown'/>
                                <p>Remove</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faMinus} className='text-almostPink bg-brown'/>
                                <p>{item.quantity}</p>
                                <FontAwesomeIcon icon={faPlus} className='text-almostPink bg-brown'/>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        <div className='bg-lightPink w-[90%] lg:w-[40%] p-3 mx-auto my-4'>
            <h1 className='text-brown text-center'>Cart Summary</h1>
            <div className='flex justify-between items-center text-black bg-almostPink p-3 my-4'>
                <p>Sub Total</p>
                <h1>$50</h1>
            </div>
            <Link to='/checkout'>
                <button className='text-almostWhite bg-brown w-full p-3 rounded-[10px]'>Checkout $50</button>
            </Link>
        </div>

        <button className='text-almostWhite bg-[#48190D99] p-3 w-[35%] lg:w-[10%] mx-auto flex items-center justify-center rounded-[10px]'><Link to='/'>Go Back</Link></button>

        <RecentlyViewed />
    </div>
  )
}
