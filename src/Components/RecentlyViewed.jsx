import React from 'react'
import { recentlyViewed } from '../data/data'

export const RecentlyViewed = () => {
  return (
    <div className='w-[40%] mx-auto bg-lightPink'>
        <div className='flex items-center justify-between'>
            <h1>Recently Viewed</h1>
            <p>See All</p>
        </div>
        <div className='flex items-center justify-between'>
            {
                recentlyViewed.map(view => {
                    return(
                        <div className=''>
                            <h1>{view.name}</h1>
                            <div className='w-[20%] border border-brown'>
                                <img src={view.image} />
                            </div>
                            <p>${view.price}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
