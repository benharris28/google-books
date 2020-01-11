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

  


  
  render() {
    
      
    
    
    return (
      <div className="App">
        <SearchBar />
        <Filter />
        <BookList 
          booklist={this.state.booklist}/>
      </div>
    );


  }
  
}

export default App;
