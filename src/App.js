import React from 'react';
import './App.css';
import contactsFromJSON from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contactsFromJSON.slice(0, 5)
  }

  addContact = () => {
    const randomIndex = Math.floor(Math.random() * contactsFromJSON.length)
    const randomContact = contactsFromJSON[randomIndex];
   this.setState({
     contacts: this.state.contacts.concat(randomContact)
    });
  }

  sortByName = () => {
    const sortName = this.state.contacts.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      contacts: sortName,
    });
  };
  

  sortPopularity = () => {
    const sortPopularity = this.state.contacts.sort(function (a, b) {
      return a.popularity - b.popularity;
    });
    this.setState({
      contacts: sortPopularity
    });
  };


deletePerson = (id) => {
  this.setState({
    contacts: this.state.contacts.filter((contact) => contact.id !== id
    )
  })
}

render() {
  const { contacts } = this.state;
    return (
    <div>
      <table style={{width:'50%'}}>
      <tr>
           <th>Name</th>
           <th>Picture</th>
           <th>Popularity</th>
           <th>Options</th>
          </tr>
      {contacts.map(contact => {
        return (          
           <tr key={contact.id}>
             <td>{contact.name}</td>
             <td>
               <img src={contact.pictureUrl} alt="pic" />
             </td>
             <td>{contact.popularity}</td>
             <td>
              <button 
              value={contact.id}
              onClick={()=>this.deletePerson(contact.id)}>Delete</button> 
             </td>
           </tr>
          )
        })}  
      </table>
      <button onClick={this.addContact}>Add Random Contact</button>
      <button onClick={this.sortPopularity}>sort by popularity</button>
      <button onClick={this.sortByName}>sort by name</button>
    </div>
    )
  }
}


export default App;
