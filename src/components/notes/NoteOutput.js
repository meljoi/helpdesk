import React from 'react';
import Fire from '../fire';
import { Button } from 'react-bootstrap';

const NoteOutput=({note})=>{
  const handleDelete=()=>{
    const createNote=Fire.database().ref("helpdesk-20").child(note.id);
      createNote.remove();
  }

  return(
    <>
      <style type="text/css">
        {`
        .btn-pink {
          background-color:#F1EAEB;
          color: #6A7152;
        }

        .btn-sm {

          font-size: .5rem;
          height:20px;
          text-align: center;
          margin:0 auto;
        }

        `}
      </style>

    <div className="d-flex">
    <p className='type pr-2'>{note.note}</p>

    <Button  variant="pink" size="sm" onClick={handleDelete}>delete</Button>


    </div>
    </>
  )
}


export default NoteOutput
// in h1 coming up undefined when rendering this component in Note.js
