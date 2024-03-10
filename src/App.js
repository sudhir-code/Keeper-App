import react,{useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import "./App.css";
import CreateArea from "./CreateArea";

function App() {
  const[items, setitems] = useState([]);

  function addItem(inputText){
    setitems((preValue)=>{
      return [
        ...preValue,inputText
      ];
    })
  }
 function deleteItem(id){
  setitems((preValue)=>{
    return preValue.filter((item,index)=>{
     return index!== id;
    })
  })
 }
  return (
    <div>
      <Header />
      {/* {
        Notes.map((Notes)=>{
          return <Note 
          
          key = {Notes.key}
          noteTitle = {Notes.title}
          noteContent = {Notes.content}

        />
        })
      } */}
      <CreateArea onAdd={addItem}/> 
      {
        items.map((item,index)=>{
           return<Note
           key ={index}
           id={index}
           noteTitle = {item.title}
           noteContent = {item.content}
           onDelete={deleteItem}
           />;
        })
      }
      
      <Footer />
    </div>
  );
}

export default App;
