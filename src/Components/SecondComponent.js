import React from 'react'
import { useSelector } from 'react-redux';



const SecondComponent = () => {

  const content = useSelector((state) => state.content.value);
  return (
    <div>
      <h3>Segunda Div</h3>
     <div className='text'>
      {content}
     </div>
    </div>
  )
}

export default SecondComponent