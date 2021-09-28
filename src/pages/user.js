import store from "../redux/store";
import { increment } from "../redux/actions";
import { useSelector, useDispatch } from 'react-redux'


function User() {
    const count = useSelector((state)=> state.count);
    const dispatch = useDispatch()

    const handleClick = () => {
        console.log(store.getState().count)
        const actionIncrement = increment(count);
        dispatch(actionIncrement)
    }

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT"})
    }



    console.log('user')
    return <div> 
            <h2>
                User
                <span>Count{store.getState().count}</span>
            </h2>;
            <button onClick = {handleClick}> Press to add +1</button>
            <button onClick = {handleDecrement}> Press to -1 </button>
        </div>
  }

  
 export default User 