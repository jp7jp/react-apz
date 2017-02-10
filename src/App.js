import React, { Component } from 'react';
import Match from 'react-router/Match';
import logo from './logo.svg';
import ContactList from './containers/ContactList';
import ContactCreate from './containers/ContactCreate';
import ContactEdit from './containers/ContactEdit';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">React Apz</a>
            </div>
          </div>
        </nav>
        <section id="content" className="container-fluid">
          <h2>Contacts Manager</h2>
          <div className="container">
            <Match exactly pattern="/" component={ContactList} />
            <Match pattern="/new" component={ContactCreate} />
            <Match pattern="/edit/:contactId" component={ContactEdit} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
