import React from 'react'
import { useState } from 'react'
const App = () => {
  const [first, setfirst] = useState('')
  const one = (e)=>{
    setfirst(first.concat(e.target.value))
  }
  const deleteAll = ()=>{
    setfirst('');
  }
  const back = ()=>{
    setfirst(first.slice(0,-1))
  }
  const equal = ()=>{
    setfirst(eval(first).toString())
  }
  return (
    <div className='bg-gray-800 min-h-screen w-full flex justify-center align-center'>
      <div className="h-[520px] w-[400px] bg-zinc-700 rounded-lg mt-[50px]">
        <input type="text" className='w-[90%] font-bold text-2xl p-3 m-2 mt-5 ml-5 rounded-md bg-slate-300' value={first}/>
        <div className="row1 text-white w-[90%] p-3 m-2 mt-5 ml-5 flex justify-center items-center gap-2">
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'('}>(</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={')'}>)</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'%'}>%</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>deleteAll()}>AC</button>
        </div>
        <div className="row1 text-white w-[90%] p-3 m-2 mt-2 ml-5 flex justify-center items-center gap-2">
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'7'}>7</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'8'}>8</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'9'}>9</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'*'}>*</button>
        </div>
        <div className="row1 text-white w-[90%] p-3 m-2 mt-2 ml-5 flex justify-center items-center gap-2">
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'4'}>4</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'5'}>5</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'6'}>6</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'+'}>+</button>
        </div>
        <div className="row1 text-white w-[90%] p-3 m-2 mt-2 ml-5 flex justify-center items-center gap-2">
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'1'}>1</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'2'}>2</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'3'}>3</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'-'}>-</button>
        </div>
        <div className="row1 text-white w-[90%] p-3 m-2 mt-2 ml-5 flex justify-center items-center gap-2">
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'0'}>0</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>back()}>BACK</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>equal()} >=</button>
          <button className='px-[10px] py-[10px] w-[100px] text-2xl bg-zinc-400 font-bold rounded-md' onClick={(e)=>one(e)} value={'/'}>/</button>
        </div>
      </div>

    </div>
  )
}

export default App
