import React from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import Filter from './Filter/Filter';
import BookList from './Booklist/BookList';

class App extends React.Component {
  state = {
    books: this.props.booklist,
    searchTerm: '',
    bookTypeFilter: '',
    printTypeFilter: ''

  }



  handleFilterBookType(filter) {
    this.setState({
      bookTypeFilter: filter
    });
  }

  handleFilterPrintType(type) {
    this.setState({
      printTypeFilter: type
    });
  }

  handleSearch(term) {
    this.setState({
      searchTerm: term
    });
  }
  
  formatURL( searchParams ) {
    
    let finalQuery;
    if ( searchParams.searchTerm !== '' ) {
      finalQuery = '?q=' + searchParams.searchTerm;
    }
    if (searchParams.bookTypeFilter !== '') {
      finalQuery = finalQuery + '&filter=' + searchParams.bookTypeFilter;

    }
    if (searchParams.printTypeFilter !== '') {
      finalQuery = finalQuery + '&printType=' + searchParams.printTypeFilter;
    }
    const finalURL = searchParams.url + finalQuery + '&key=' + searchParams.key;
    return finalURL;
    console.log(finalURL)
  }
  
  handleSubmit(event) {
    event.preventDefault();
     

    const { searchTerm, bookTypeFilter, printTypeFilter } = this.state;
    const url = 'https://www.googleapis.com/books/v1/volumes';
    const key = 'AIzaSyDjlPCPbXfWP_n8NgU1sZRfdApxvgCLqUI'
    const searchParams = {url, searchTerm, bookTypeFilter, printTypeFilter, key}
    const formattedURL = this.formatURL( searchParams );

    fetch(formattedURL)
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong');
      }
      return res.json();
    })
    .then(data => {
      this.setState({
        books: data
      });
    })
    .catch(err => {
      console.log(err.message)
      this.setState({
        error: err.message
      });
    });


  }

  render() {
    console.log(this.state);
      
    
    
    return (
      <div className="App">
        <SearchBar 
          handleSearch={term => this.handleSearch(term)}
          handleSubmit={event => this.handleSubmit(event)}
          searchTerm={this.state.searchTerm}/>
        <Filter 
          handleFilterBookType={filter => this.handleFilterBookType(filter)}
          handleFilterPrintType={type => this.handleFilterPrintType(type)}
          
          />
        <BookList 
          booklist={this.state.books}/>
      </div>
    );


  }
  
}

export default App;
