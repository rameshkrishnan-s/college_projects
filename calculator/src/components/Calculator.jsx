import React, { useReducer } from 'react'

const Calculator = () => { 
  return (
    <>
        <h1 className='text-center text-2xl font-bold'>CALCULATOR</h1>
        <div className='calculator-grid grid grid-cols-4 gap-4 bg-black text-white pb-9'>
            <div className='output m-10 bg-yellow-100 col-span-4'>
                <div className='previous-operand p-10'>
                  
                </div>
                <div className='current-operand p-10 '>

                </div>
            </div>

            <button className='btn-primary'>AC</button>
            <button>/</button>
            <button>CE</button>
            <button>C</button>
            <button>x</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>%</button>
            <button >4</button>
            <button >5</button>
            <button >6</button>
            <button >-</button>
            <button >1</button>
            <button >2</button>
            <button >3</button>
            <button >+</button>
            <button >0</button>
            <button>.</button>
            <button className='btn-primary'>=</button>
        </div>
    </>
  )
}

export default Calculator
