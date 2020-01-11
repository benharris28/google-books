import React from 'react';

class BookItem extends React.Component {
    render() {
        const { volumeInfo, saleInfo, searchInfo  } = this.props;
        const price = saleInfo.saleability === "FOR_SALE" ? 'Price: $' + saleInfo.retailPrice.amount : null
        

        return (
            <div className="bookitem">
                
                <div className="bookitem-title">
                    {volumeInfo.title}
                </div>
                <div className="bookitem-image">
                    <img src={volumeInfo.imageLinks.thumbnail} />
                </div>
                <div className="bookitem-info">
                    Author: {volumeInfo.authors}
                    Price: {price}
                </div>
                <div className="bookitem-snippet">
                    {searchInfo.textSnippet}

                </div>
            </div>
        )
    }
}

export default BookItem;