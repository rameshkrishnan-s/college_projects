import React from 'react'
import Button from './Button'

const Calculator = () => {
  return (
    <>
        <div className='calculator-grid'>
            <div className='output'>
                <div className='previous-operand'>

                </div>
                <div className='current-operand'>

                </div>
            </div>

            <button className='sapn-two'>AC</button>
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
            <button>=</button>
        </div>
    </>
  )
}

export default Calculator
