import React, { Component } from 'react';

export default class Main extends Component {
    render() {

        const {currentNote, updateNote} = this.props
       
            if(currentNote === false) {
              
                return (
                    
                <div className="main">
                    <p>No Active Notes</p>
                </div>
                )
            } else {
                
                var allNotes = JSON.parse(localStorage.getItem("allNotes"));
                 const title = (id) => 
                 {
                   const current =  allNotes.filter(note => id === note.id)
                   return current[0].title

                 }
                 const description = (id) => 
                 {
                   const current =  allNotes.filter(note => id === note.id)
                   return current[0].description

                 }


            
                return (
                    
                    <div className="form">
                 
                        <input type="text" id="title" name="title"  value={title(currentNote)}
                         placeholder="Note Title"  onChange={updateNote} autoFocus /> <br /> <br />
                        <textarea id="description" name="description" value={description(currentNote)}
                        placeholder="Your note..." onChange={updateNote}></textarea>
                  
                    </div>
                )
                
            }
           
        
    }
}
