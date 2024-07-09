import React from 'react'
import { recentlyViewed } from '../data/data'

export const RecentlyViewed = () => {
  return (
    <div className=' mx-auto bg-lightPink py-4 px-3'>
        <div className='flex items-center justify-between mb-7'>
            <h1 className='font-[400] text-[21px] text-brown md:text-[32px]'>Recently Viewed</h1>
            <p className='font-[400] text-[21px] text-brown md:text-[32px]'>See All</p>
        </div>
        <div className='flex items-center justify-between gap-2'>
            {
                recentlyViewed.map(view => {
                    return(
                        <div key={view.id} className='w-[32%] h-[200px] md:h-[300px] lg:h-[500px] p-2 border border-brown flex flex-col justify-between items-center'>
                            <h1 className='text-center font-[400] text-[24px]'>{view.name}</h1>
                            <div className=''>
                                <img src={view.image} />
                            </div>
                            <p className='font-[400] text-[32px]'>${view.price}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
