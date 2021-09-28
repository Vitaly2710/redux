import { useRef } from 'react';

function Home() {
  
    let myRef = useRef()
    let handleClick = () => {   
      console.log(myRef)
      myRef.current.focus()
    };
  
    return <div>
        <input ref={myRef}/> 
        <button onClick ={handleClick} >Сфокусировать </button>
    </div>
    
  }

  export default Home;