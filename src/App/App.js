import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';

import fetch from 'isomorphic-fetch';
import spinner from '../Style/spinner.svg';

import SearchBar from '../Components/SearchBar';
import BooksTable from '../Components/BooksTable';
import Books from '../Components/Books';
import Loading from '../Components/Loading';
import { ImageLinkNewWindow } from '../Components/Image';

import {
  PATH_BASE,
  PARAM_SEARCH,
  DEFAULT_QUERY
} from '../Constants/apiConstants';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: null,
      error: null,
      isFetching: false,
      searchTerm: DEFAULT_QUERY
    }

    this.fetchBooks = this.fetchBooks.bind(this);
    this.storesFetchedBooks = this.storesFetchedBooks.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
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

  onSearchClick() {
    this.fetchBooks(this.state.searchTerm);
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
            onClick={this.onSearchClick}>
              Search
          </SearchBar>
          { isFetching 
            ? <Loading icon={spinner}> Searching your books... </Loading> 
            : (
              <BooksTable>
                { books.map((book) => {
                  return(
                    <Books key={book.id}
                      alt={book.volumeInfo.title && book.volumeInfo.title}
                      author={book.volumeInfo.authors && book.volumeInfo.authors}
                      category={book.volumeInfo.categories && book.volumeInfo.categories}
                      description={book.volumeInfo.description && book.volumeInfo.description}
                      link={book.volumeInfo.canonicalVolumeLink && book.volumeInfo.canonicalVolumeLink}
                      rating={book.volumeInfo.averageRating && book.volumeInfo.averageRating}
                      src={book.volumeInfo.imageLinks.thumbnail && book.volumeInfo.imageLinks.thumbnail}
                      title={book.volumeInfo.title && book.volumeInfo.title} />
                  )
                })
              }
              </BooksTable>
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
