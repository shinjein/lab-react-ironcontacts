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

render() {
  const { contacts } = this.state;
    return (
    <div>
      <table style={{width:'50%'}}>
      <tr>
           <th>Name</th>
           <th>Picture</th>
           <th>Popularity</th>
          </tr>
      {contacts.map(contact => {
        return (          
           <tr key={contact.id}>
             <td>{contact.name}</td>
             <td>
               <img src={contact.pictureUrl} alt="pic" />
             </td>
             <td>{contact.popularity}</td>
           </tr>
          )
        })}  
      </table>
      <button onClick={this.addContact}>Add Random Contact</button>
    </div>
    )
  }
}


export default App;
