/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const sidebar = ({addNote, handleDelete, openNote}) => {
    var allNotes = JSON.parse(localStorage.getItem("allNotes"));
    return(
        <div className="sidebar">
       <span className="header">Notes</span>
        <i className="material-icons" onClick={addNote}>add_box</i>
      <div>
        {allNotes.map(({ id, title, lastEdited }, i) => (
          <div
          >
             <ul className="collection"  >
             <li className="collection-item avatar" onClick={() => openNote(id)}>
             <span className="title" >{title}</span>
             <p>Last Modified{" "}
                                   {new Date(lastEdited).toLocaleDateString("en-GB", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}</p>
              <div className="secondary-content">
                                     <a href="" style={{color: 'red'}} onClick={()  => handleDelete(id)} ><i class="material-icons">delete</i></a>
                                </div>  
            </li>
            </ul>
            <hr />
          </div>
        ))}
      </div>
    </div>
        )
     
}

export default sidebar
   

