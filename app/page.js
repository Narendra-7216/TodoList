"use client"
import React, { useState } from 'react'

const page = () => {


const [title, settitle] = useState("")
const [desc, setdesc] = useState("")

const [mainTask, setmainTask] = useState([])

const submitHandler = (e) =>{

  e.preventDefault()
  console.log(title)
  console.log(desc)

  setmainTask([...mainTask,{title,desc}])

  settitle("")
  setdesc("")
}

const deleteHander=(i)=>{
    let copyTask =[...mainTask]
    copyTask.splice(i,1)//Used to delete ith ele in main task array
    setmainTask(copyTask)
}

let renderTask = <h4 className='text-center mt-5'>No tasks available</h4>
if(mainTask.length>0)
{
  renderTask =mainTask.map((t,i)=>{
  return <ul key={i}>
    <div className='flex justify-between mb-2 w-4/5 border-red-500 border-2 m-2 rounded'>
      <h5>{i}</h5>
      <h5>{t.title}</h5>
      <h6>{t.desc}</h6>
      <button onClick={()=>{deleteHander(i)}} className=' bg-red-600 rounded px-4 py-2 m-1'>Delete</button>
    </div>
    
    </ul>
  })
}


  return (
   <>
    <h1 className=' bg-black text-center'>My Todo list</h1>
    <form onSubmit={submitHandler}>
      <input type='text' 
      required={true}
      maxLength={5}                                                          // Dont forget this
      value={title} 
      onChange={(e)=>{settitle(e.target.value)}} 
      placeholder='Enter task here' 
      className='px-4 py-2 mx-4 my-2 rounded text-black'/>


      <input type='text'  
      value={desc} 
      onChange={(e)=>{setdesc(e.target.value)}} 
      placeholder='Enter description here' 
      className='px-4 py-2 mx-4 my-2 rounded text-black'/>



      <button className=' border-x-2 border-y-2 px-4 py-2 text-xl rounded'>Add</button>
    </form>
    <hr>
    </hr>

    <div>
        {renderTask}
    </div>

    </>
  )
}

export default page