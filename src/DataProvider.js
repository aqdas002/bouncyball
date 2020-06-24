import React from 'react';


const dataProvider = ({onHeightChange,onCorChange,onSubmit})=>{
	return (
		<div>
 <input type='text'onChange = {onHeightChange} 
        placeholder='enter initial height'/>
        <input type='text'onChange = {onCorChange} 
        placeholder='enter coefficient of restitution'/>
          <button type="submit"
               onClick={onSubmit}>Detect</button>
        </div>
)
}


export default dataProvider