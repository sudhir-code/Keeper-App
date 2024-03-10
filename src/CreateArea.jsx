import React, { useState } from "react";

function CreateArea(props) {
  const[inputText , setinputText] = useState({

title :"",
content:""

  });
  const changeHandle=(event)=>{
    const{name,value} =event.target;
    setinputText((preValue)=>{
      return{
        ...preValue,
        [name] : value
      };
    })
  }

function onAdd(event){
  props.onAdd(inputText)
event.preventDefault();
}

  return (
    <div>
      <form>
        <input name="title" onChange={changeHandle} placeholder="Title" value={inputText.title}/>
        <textarea
          name="content"
          onChange={changeHandle}
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
        />
        <button onClick={onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
