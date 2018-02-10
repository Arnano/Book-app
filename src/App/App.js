import React, { Component } from 'react';
import _ from 'lodash';
import fetch from 'isomorphic-fetch';
import { bookImage } from '../Style/assets/book-imgs.js';

import AppWrapper from '../Components/AppWrapper';
import Card from '../Components/Card';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import SearchBar from '../Components/SearchBar';
import BooksTable from '../Components/BooksTable';
import Books from '../Components/Books';
import Button from '../Components/Button';
import Heading from '../Components/Heading';
import Section from '../Components/Section';
import { Row, Col } from '../Components/Grid';
import Text from '../Components/Text';

import {
  PATH_BASE,
  PARAM_SEARCH,
  DEFAULT_QUERY
} from '../Helpers/api-constants';

import { 
  withFetching,
  withCondition
} from '../Helpers/hoc-components';

const WithFetchingBooks = withFetching(BooksTable);
const WithConditionCard = withCondition(Card);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: null,
      disabled: false,
      readList: null,
      error: null,
      isFetching: false,
      searchTerm: DEFAULT_QUERY
    }

    this.fetchBooks = this.fetchBooks.bind(this);
    this.storesFetchedBooks = this.storesFetchedBooks.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
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
    this.setState({ 
      searchTerm: e.target.value,
      disabled: this.state.searchTerm === ''
    });
  }

  onInputFocus() {
    this.setState({ 
      searchTerm: '',
      disabled: true
    });
  }

  onSearchClick() {
    this.fetchBooks(this.state.searchTerm);
  }

  /**
   * Adds the selected book
   * to the readList state
   * 
   * @param {object} book 
   */
  onAddBook(book) {
    const { readList, } = this.state;

    this.setState({ 
      readList: { 
        ...readList, 
        [book.id]: book 
      }
    });

    console.log(readList)
  }

  /**
   * Remove the selected book
   * from the readList state
   * 
   * @param {string} id 
   */
  onRemoveBook(id) {
    const { readList } = this.state;
    const updatedReadList = _.filter(readList, book => book.id !== id);

    this.setState({ 
      readList: updatedReadList
    });
  }

  render() {
    const {
      disabled,
      searchTerm, 
      books, 
      isFetching, 
      error,
      readList } = this.state;

    const conditionCardDisplay = !readList || _.isEmpty(readList);
    if(!books) return null;

    return (
      // App wrapper component
      <AppWrapper classes={'App'}>

        {/* Header component */}
        <Header>
          <Banner 
            image={bookImage} 
            overlay />
          <Section classes='c-banner__section'>
            <Heading 
              level={1} 
              size='h1' 
              color='white' 
              classes='c-banner__section-title' > 
                Read list book application 
            </Heading>
          </Section>
        </Header>
        
        {/* Main application components */}
        <Row>

          {/* Searching/Results components */}
          <Col sm={8}>
            <Section>

              {/* Search component */}
              <SearchBar
                onChange={this.onInputChange}
                onFocus={this.onInputFocus}
                value={searchTerm}
                disabled={disabled}
                onClick={this.onSearchClick} >
                  <Text size='fsLarge'> SEARCH </Text>
              </SearchBar>

              {/* Book listing after search components */}
              <WithFetchingBooks isFetching={isFetching} >
                { books.map((book) => {
                  return(
                    <Section classes='c-books-table__book' key={`book--${book.id}`} >
                      <Books
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
                })}
              </WithFetchingBooks >
            </Section>
          </Col>

          {/* Card read list component */}
          <Col sm={4} >
            <WithConditionCard condition={conditionCardDisplay}>
              {
                _.map(readList, (book) => {
                  return(
                    <Section key={`readList--${book.id}`} >
                      <Text size='fsSmall' > { book.volumeInfo.title } </Text>
                      <Text size='fsSmall' > { book.volumeInfo.authors } </Text>
                      <Button onClick={() => this.onRemoveBook(book.id)} btnStyle='danger' >
                        <Text size='fsLarge'> Remove book </Text >
                      </Button>
                    </Section >
                  )
                })
              }
            </WithConditionCard >
          </Col>

          </Row>
      </AppWrapper>
    );
  }
}

export default App;
