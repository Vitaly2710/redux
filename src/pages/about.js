import { useContext } from 'react';
import Context from '../Context';

function About() {
    let context = useContext(Context)
    return <h2 style={{backgroundColor: context.theme}}>About</h2>;
  }


  export default About