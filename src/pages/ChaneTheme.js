import { useContext } from 'react';
import Context from '../Context';


function ChangeTheme() {
    const context = useContext(Context)
  
  
    
    return <div>
        <h2>ChangeTheme {context.theme}</h2>
        <p style = {{color: context.theme}}>fsdfsdfdsfsdfsdfds</p>
    </div>
  }
  
export default ChangeTheme;  