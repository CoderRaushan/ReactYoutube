import { useRef } from 'react';
import './App.css'

function App() { 
  const Name=useRef();
  const Email=useRef();
  const Password=useRef();
  const onsubmintfun=(event)=>
    {
      event.preventDefault();
      const name=Name.current.value;
      const email=Email.current.value;
      const pass=Password.current.value;
      Password.current.value="";
      Email.current.value="";
      Name.current.value="";
      console.log(name , email,pass)
    }
  return (
    <>
      <form onSubmit={onsubmintfun}>
        <input type="text" 
        name="" id="" 
        ref={Name}
        placeholder='Enter Name' /> 
        <br />

        <input type="email" 
        name="" id="" 
        ref={Email}
        placeholder='Enter Email'/>
         <br />
        <input type="password" 
        name="" id="" 
        ref={Password}
        placeholder='Entere Passwoed' />
         <br />
        <button>submit</button>
      </form>
    </>
  )
}

export default App
