import { useContext } from 'react';
import Context from '../Context';

function Users() {
    let context = useContext(Context)
    let handleClick = () => {
      context.toggleTheme()
    }
  
    
    
    return <h2>Users 
      <button onClick = {handleClick}> нажать {context.theme} </button>
    </h2>;
  }


  export default Users