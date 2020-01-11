import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
         <div className="SearchBar">
             <form>
                 <label htmlFor="search">Search</label>
                 <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="search here"
                     />
             </form>

         </div>   
        )
    }
}

export default SearchBar;