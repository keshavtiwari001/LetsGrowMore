import { useState } from 'react'
import './App.css'
import Todoinput from './components/Todoinput'

function App() {
      const [listTodo,setListTodo]= useState([]);
      let addList = (inputText)=>{setListTodo([...listTodo,inputText])};
return(
      <>
      <div className='main-container'></div>
      <div className='center-container'>
            <Todoinput addList={addList}/>
      </div>
</>
     
)
}

export default App
