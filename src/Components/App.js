import './App.css';
import Main from './Main';
import {Component} from 'react'
import Sidebar from './Sidebar.js';
import uuid from 'react-uuid';

class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      currentNote: false,
      allNotes: []
    }
    this.updateNote =  this.updateNote.bind(this);
    this.handleDelete =  this.handleDelete.bind(this);
  }


  updateNote = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    var allNotes = JSON.parse(localStorage.getItem("allNotes"));
   
      const current =  allNotes.filter(note => this.state.currentNote === note.id)
      console.log(current)
      current[0][name] = value
      current[0].lastEdited = Date.now()


      allNotes.splice( allNotes.indexOf(current[0]), 1 , current[0])
      console.log(allNotes)
      localStorage.setItem('allNotes', JSON.stringify(allNotes));
      this.setState ({
        allNotes: allNotes
      })
  }

  
  handleDelete = (id) => {
    var storage = JSON.parse(localStorage.getItem("allNotes"));  
    const filterdNotes = storage.filter(note => 
      note.id !== id);
     
      this.setState ({
        allNotes: filterdNotes,
        currentNote: false
      })

      localStorage.setItem('allNotes',  JSON.stringify(filterdNotes));
      console.log(this.state.currentNote)

  }

  openNote = (id) => {
    this.setState ({
      currentNote: id
    })
  }

  render() {
    const addNote = () => {
      const note = {
        id: uuid(),
        title: "",
        description: "",
        lastEdited: Date.now()
      }
  
      var allNotes = JSON.parse(localStorage.getItem("allNotes"));
      if(allNotes == null) allNotes=[];
      allNotes.push(note);
      localStorage.setItem('allNotes', JSON.stringify(allNotes));
      this.setState ({
        currentNote: note.id
      })
      console.log(this.state.currentNote);

      
    }

  

    return (
      <div className="App">
        <Sidebar addNote={addNote} handleDelete={this.handleDelete} openNote={this.openNote}/>
        <Main currentNote={this.state.currentNote} updateNote={this.updateNote}/>
      </div>
    );
  }
 
}

export default App;
