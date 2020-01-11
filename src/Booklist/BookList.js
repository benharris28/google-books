import React from 'react';
import BookItem from '../BookItem/BookItem';

class BookList extends React.Component {
    render() {
        const list = this.props.booklist.items
        .map((book, i) => <BookItem {...book} key={i} />);
        
        return (
            <div className="booklist-container">
                {list}
            </div>
            
        )
    }
}

export default BookList;