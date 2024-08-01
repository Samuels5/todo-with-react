import React, { useState } from 'react';
import './components/style.css'
interface Type {
  id: number,
  text: string,
  done: boolean
}
let count = 0
function App() {
  const [mylist, setmylist] = useState<Type[] | []>([])
  const [value, setvalue] = useState<string>('')

  const handledelete =(deletItemId: number) =>{
    setmylist(mylist.filter((item)=>item.id !==deletItemId));
  }
  const handleedit = (id: number, text: string) => {
    const val = prompt('edit it ', text)
    if (val && val.length>0){
      setmylist(mylist.map((item)=>item.id ===id ? {id:id,
        text:val,
        done:false}: item
      ));
    }
  }
  
  const rend = mylist.map((item) => (
    <div style={{display:'flex' }}>
      <h3>{item.text}</h3>
      <button className = 'red'style={{height:'30px', marginTop:'15px'}} onClick={() => handledelete(item.id)}>Delete</button>
      <button className='yellow'  style={{height:'30px', marginTop:'15px' }} onClick={()=>handleedit(item.id,item.text)}>edit</button>
      <br/>
    </div>
  ))
  
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}> Todo List</h1>
      <div className='p'>
        <input className='input'style = {{alignItems:'center'}} onChange={(par) =>{setvalue(par.target.value)}}/>
        <button className='green' onClick={() => {setmylist((pre) => [...pre, 
          {id:count,
          text:value,
          done:false}]); count = count + 1}}>Add</button>
          {rend}
        </div>
      </div>
  );
}

export default App;