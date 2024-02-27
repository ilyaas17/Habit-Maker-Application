import React from 'react'

export default function InputForm() {
  return (
    <div>
        <div className="whatWhere">
            <input type="text" className='inpt1' placeholder='WHAT TO DO' required/>
            <input type="text" className='inpt2' placeholder='WHERE TO DO' required/>
        </div>
        <div className='whyDateSave'>
            <input type="text" placeholder='WHY TO DO' className='inpt3'/>
            <input type="date" placeholder='WHY TO DO' className='inpt4'/>
            <button type="submit">SAVE</button>
        </div>
    </div>
  )
}
