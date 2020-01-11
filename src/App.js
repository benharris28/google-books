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

  handleSearch(search) {
    this.setState({
      searchTerm: search
    });
  }

  handleFilterBookType(filter) {
    this.setState({
      bookTypeFilter: filter
    });
  }
  
  render() {
    console.log(this.state);
      
    
    
    return (
      <div className="App">
        <SearchBar 
          handleSeach={search => this.handleSearch(search)}
          searchTerm={this.state.searchTerm}/>
        <Filter 
          handleFilterBookType={filter => this.handleFilterBookType(filter)}/>
        <BookList 
          booklist={this.state.books}/>
      </div>
    );


  }
  
}

export default App;
