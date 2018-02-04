import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';

import fetch from 'isomorphic-fetch';

import SearchBar from '../Components/SearchBar';

import {
  PATH_BASE,
  PARAM_SEARCH
} from '../Constants/apiConstants';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: null,
      error: null,
      isFetching: false,
      searchTerm: 'The lord of the ring'
    }

    this.fetchBooks = this.fetchBooks.bind(this);
    this.storesFetchedBooks = this.storesFetchedBooks.bind(this);

    this.onInputChange = this.onInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Fetch the requested book
   * 
   * @param {string} book 
   */
  async fetchBooks(book) {
    try{
      this.setState({ isFetching: true });
      const api = await fetch(`${PATH_BASE}?${PARAM_SEARCH}${book}`);
      const response = await api.json();
      await this.storesFetchedBooks(response);
    }
    catch(error) {
      this.setState({ error });
    }
  }

  /**
   * Stores the books results 
   * into the state
   * 
   * @param {object} books 
   */
  storesFetchedBooks(book) {
    this.setState({ books: book.items, isFetching: false });
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchBooks(searchTerm);
  }

  /**
   * Set the value in the state to the characters 
   * entered in the input field
   * 
   * @param {*} e 
   */
  onInputChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onClick() {
    console.log('hey');
  }

  render() {
    const { 
      searchTerm, 
      books, 
      isFetching, 
      error } = this.state;
    
    if(!books) return null;

    console.log(this.state.books);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <SearchBar
            onChange={this.onInputChange}
            value={searchTerm}
            onClick={this.onClick}>
              Search
          </SearchBar>
          { isFetching 
            ? <div> Searching your books... </div> 
            : (
              books.map((book) => {
                return(
                  <div key={book.id}>
                    <span> {book.volumeInfo.title} </span>
                    <img src={book.volumeInfo.imageLinks.thumbnail} />
                  </div>
                )
              })
            )
          }
      </div>
    );
  }
}

export default App;

/*
{
  books.map((book) => {
    return(
      <span> {book.volumeInfo.title} </span>
    )
  })
}
*/
