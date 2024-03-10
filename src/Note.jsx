import react from "react";
function Note(props) {
  function handleClick(){
    props.onDelete(props.id)
  }
  return (
    <div className="note">
      <h3>{props.noteTitle}</h3>
      <p>{props.noteContent}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
export default Note;
