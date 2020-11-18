import React, { useState, useEffect } from 'react';
import NoteInput from './NoteInput';
import Fire from '../fire';
import NoteOutput from './NoteOutput';


const Note = ()=>{
  const [note, setNote]=useState({});
  const [listNotes, setListNotes]=useState([]);




  useEffect(()=>{
  const createNote=Fire.database().ref("helpdesk-20");
      createNote.on('value',(snapshot)=>{
        const addNote=snapshot.val();
        const listNotes=[];
        for (let id in addNote){
          listNotes.push({id, ...addNote[id]});
        }
        console.log(listNotes);
        setListNotes(listNotes);
      });
  },[]);

  return(
    <div className="notes">
    <h4 className="type"> notes</h4>
    <div className="note-background shadow">

{/*how to clear a note after onclick event*/}
        <div>

        <NoteInput
          note={note}
          setNote={setNote}

          />

        </div>
        <div className="note-output">
        {listNotes ?
        listNotes.map((note, index)=>
        <NoteOutput note={note} key={index} />)
         : ''}
         </div>
    </div>
</div>


  )
}

export default Note
    /*{{setNote.map((notes)=>{})}}*/
  // <Note note={note} {handleOnChange} />
