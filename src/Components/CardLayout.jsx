import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import addCart from '../images/Home/Add.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Cart'

export const CardLayout = ({product, otherProduct}) => {
    const qty = 1
    const state = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const clicked = (newProduct) => {
        console.log('clicked one', newProduct)
        const totalAmount = qty * newProduct.price
        dispatch(addToCart({
            ...newProduct, quantity: qty, totalAmount,
        }))
        console.log(state)
    }
  return (
    <div className='border border-brown flex flex-col items-center justify-between p-4'>
        <button onClick={()=> clicked(product ? product : otherProduct )} className='flex items-center justify-center mx-auto'>
            {/* <FontAwesomeIcon icon={faPlus} className='text-white bg-brown' /> */}
            <div className='w-[20%]'>
                <img src={addCart}/>
            </div>
            <p>Add To Cart</p>
        </button>
        <div className=''>
            <div>
                <img src={product ? product?.image : otherProduct?.image}/>
            </div>
            <p className='text-center text-brown font-[400] text-[20px]'>{product ? product?.name : otherProduct?.name}</p>
            <p className='text-center text-black font-[400] text-[20px]'>${product ? product?.price : otherProduct?.price}</p>
        </div>
    </div>
  )
}
