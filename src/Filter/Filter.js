import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <div className="filter">
                <form className="filter_form">
                    <label htmlFor="print-type">Print Type</label>
                    <select 
                        name="print-type-filter"
                        onChange={e => this.props.handleFilterBookType(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="Books">Books</option>
                        <option value="Magazines">Magazines</option>
                        
                    </select>

                    <label htmlFor="book-type">Book Type</label>
                    <select 
                        name="book-type-filter"
                        onChange={e => this.props.handleFilterPrintType(e.target.value)}
                    >
                        <option value="all-ebooks">All ebooks</option>
                        <option value="free-ebooks">Free ebooks</option>
                        <option value="paid-ebooks">Paid ebooks</option>
                        
                        
                    </select>
                </form>
            </div>
        )
    }
}

export default Filter;