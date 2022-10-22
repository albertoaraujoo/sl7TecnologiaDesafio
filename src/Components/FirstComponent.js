import { fillContent } from '../features/content/contentSlice';
import { useSelector, useDispatch } from 'react-redux';
import './FirstComponent.css'

const FirstComponent = () => {
 
  const content = useSelector((state) => state.content.value);
  const dispatch = useDispatch();
  
  return (
   
   <div>
   
    <h3>Input:</h3>
    <input type="text" onChange={(e) => dispatch(fillContent(e.target.value))}/>
    <h3>Primeira Div:</h3>
    <div className='text'> {content} </div>
   </div>
  )
}

export default FirstComponent