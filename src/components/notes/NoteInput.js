import React from 'react';
import { Button } from 'react-bootstrap';
import Fire from '../fire';


const NoteInput = (props)=>{
const {
  note,
  setNote,

}=props

const handleOnChange=(e)=>{

  setNote(e.target.value);//value of text input

}

const handleOnClick=()=>{
  const createNote=Fire.database().ref("helpdesk-20");
    const write={
      note,
      complete: false,
    }
    createNote.push(write);
    clearNoteInput();
    }



const clearNoteInput = () =>{

  setNote({note:''});//works but getting a warning that stay controlled or uncontrolled throughout the app

}
  return(
    <>
    <style type="text/css">
      {`
      .btn-pink {
        background-color:#F1EAEB;
        color: #6A7152;
      }

      .btn-md {

        font-size: .8rem;
        height:30px;
        text-align: center;
        margin:0 auto;
      }
      `}
    </style>

    <div className="note-task">
      <input type="text"
      placeholder="write a note"
      value={note.note}
      onChange={handleOnChange}
      className="type"
      />
      <Button variant="pink" size="md" onClick={handleOnClick}>add note</Button>
    </div>
    </>
  )
}

export default NoteInput
