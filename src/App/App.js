import React, { Component } from 'react';

import fetch from 'isomorphic-fetch';
import bookImg from '../Style/assets/book_3.jpg';

import SearchBar from '../Components/SearchBar';
import BooksTable from '../Components/BooksTable';
import Books from '../Components/Books';
import { ImageLinkNewWindow } from '../Components/Image';
import Button from '../Components/Button';
import Section from '../Components/Section';
import { Row, Col } from '../Components/Grid';
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
      readList: null,
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

  onAddBook(book) {
    const { readList } = this.state;

    const updatedBook = book.volumeInfo.title;
    const updatedAuthor = book.volumeInfo.authors;
    this.setState({ readList: {...readList, [book.id]: { updatedBook, updatedAuthor } }});

    console.log(readList);
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
          <ImageLinkNewWindow src={bookImg} alt={'Book banner'} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <Row>
          <Col sm={8}>
          <Section>
          <SearchBar
            onChange={this.onInputChange}
            value={searchTerm}
            onClick={this.onSearchClick}>
             <Text> Search </Text>
          </SearchBar>

          <WithFetchingBooks isFetching={isFetching} >
            { books.map((book) => {
              return(
                <Section >
                <Books key={`book--${book.id}`}
                  alt={book.volumeInfo.title && book.volumeInfo.title}
                  author={book.volumeInfo.authors && book.volumeInfo.authors}
                  category={book.volumeInfo.categories && book.volumeInfo.categories}
                  description={book.volumeInfo.description && book.volumeInfo.description}
                  link={book.volumeInfo.canonicalVolumeLink && book.volumeInfo.canonicalVolumeLink}
                  rating={book.volumeInfo.averageRating && book.volumeInfo.averageRating}
                  src={book.volumeInfo.imageLinks.thumbnail && book.volumeInfo.imageLinks.thumbnail}
                  title={book.volumeInfo.title && book.volumeInfo.title} 
                  onClick={() => this.onAddBook(book)}
                  buttonText='Add to read list' />
                </Section>
                )
              })
            }
          </WithFetchingBooks >
          </Section>
          </Col>
          <Col sm={4} >
            <div> You'rs selected books go here </div>
          </Col>
          </Row>
      </div>
    );
  }
}

export default App;
