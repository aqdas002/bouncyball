import React from 'react';


const dataProvider = ({onHeightChange,onCorChange,onSubmit})=>{
	return (
		<div>
 <input type='text'onChange = {onHeightChange} 
        placeholder='enter initial height'/>
        <input type='text'onChange = {onCorChange} 
        placeholder='enter coefficient o restitution'/>
          <button type="submit" className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue center'
               onClick={onSubmit}>Detect</button>
        </div>
)
}


export default dataProvider