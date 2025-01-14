import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{increment ,decrement} from "../../features/counter/counterSlice"
const PhonesCart = () => {
    const counterSlice = useSelector((store) => store.counter.default)
    const count = useSelector((store) => store.counter.value)

    const dispatch = useDispatch()
    const {name, image , oldPrice ,newPrice , index, save} = counterSlice
    return (
    <div className="max-w-6xl mx-auto mt-[9rem] h-screen py-4 w-full">
    <div className="flex justify-between flex-col md:flex-row ">
      <div className="bg-Background1 rounded p-4 w-full h-full">
        <div className="flex justify-center items-center">
          <img src={image} className="w-[30rem]" alt="" />
        </div>
      </div>
      <div className="bg-White w-full p-2 h-full shadow">
        <div className='py-10 pl-[1rem]'>
          <div className=' flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>{name}</h1>
            <span className='text-3xl font-mono text-Heading'>{newPrice}</span>
            <h2 className='text-Green font-bold'>{save}</h2>
          </div>
        </div>
        <div className='flex items-center space-x-4'>
          <span className='font-medium text-xl pr-4'>Quantity:</span>
          <div className='flex  w-[12rem] justify-between items-center gap-2 p- rounded bg-Background3 shadow'>
          <button onClick={() => dispatch(decrement())} className=' shadow px-4 text-4xl rounded-sm py-2 cursor-pointer'>-</button>
          <span className=' shadow px-4 text-2xl bg-Border rounded-sm py-2 cursor-pointer'>{count}</span>
          <button onClick={() => dispatch(increment())} className=' shadow px-4 text-4xl rounded-sm py-2 cursor-pointer'>+</button>
          </div>
          <div className='text-md cursor-pointer text-White font-semibold bg-[#e23c3c] rounded px-2 py-4 text-center'>
            <span>ADD TO CART</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PhonesCart




