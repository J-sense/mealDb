import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Meals from './components/Meals'

function App() {
  const [count, setCount] = useState(0)
  const [searchValue,setSearchvalue] = useState('')
  const handlesearch =(e) =>{
   
      const inputvalue =e.target.value;
      setSearchvalue(inputvalue)
  }

  return (
   <div className='md:w-[1000px] mx-auto'>
     <Navbar handlesearch={handlesearch}/>
     <Meals searchValue={searchValue}/>
   </div>
  )
}

export default App
