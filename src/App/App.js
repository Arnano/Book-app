import React, { Component } from 'react';

import fetch from 'isomorphic-fetch';
import bookImg from '../Style/assets/book_3.jpg';

import SearchBar from '../Components/SearchBar';
import BooksTable from '../Components/BooksTable';
import Books from '../Components/Books';
import Image, { ImageLinkNewWindow } from '../Components/Image';

import Heading from '../Components/Heading';
import Text from '../Components/Text';

import {
  PATH_BASE,
  PARAM_SEARCH,
  DEFAULT_QUERY
} from '../Helpers/api-constants';

import { 
  withFetching
} from '../Helpers/hoc-components';


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

    const WithFetchingBooks = withFetching(BooksTable); // HOC for conditional rendering

    if(!books) return null;

    return (
      <div className="App">
        <header className="App-header">
          <Image src={bookImg} alt={'Book banner'} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
          <SearchBar
            onChange={this.onInputChange}
            value={searchTerm}
            onClick={this.onSearchClick}>
             <Text> Search </Text>
          </SearchBar>

          <WithFetchingBooks isFetching={isFetching} >
            { books.map((book) => {
              return(
                <Books key={`book--${book.id}`}
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
          </WithFetchingBooks >
      </div>
    );
  }
}

export default App;
