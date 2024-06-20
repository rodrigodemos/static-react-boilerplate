import React from 'react';
import './SearchBar.css';

function SearchBar() {  
    const [query, setQuery] = React.useState('');  
    
    const handleSearch = () => {  
      window.location.href = `https://www.bing.com/search?q=${query}`;  
    };  
    
    return (  
      <div className="search-bar">  
        <input  
          type="text"  
          value={query}  
          onChange={(e) => setQuery(e.target.value)}            
          placeholder="Search..."  
        />  
        <button onClick={handleSearch}>Search</button>  
      </div>  
    );  
  }

  export default SearchBar;