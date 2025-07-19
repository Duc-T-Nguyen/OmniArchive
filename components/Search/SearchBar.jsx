'use client'

import { useEffect, useState, useRef } from 'react';
import search from '../../assets/search.png';
import './SearchBar.css'
import { stringify } from 'querystring';

export const SearchBar = () => {
    const [query, setQuery] = useState(''); // holds the query for the API call of /api/search
    const [error, setError] = useState(null); // holds error for failed API call of /api/search
    const [results, setResults] = useState([]); // holds the results from API call of /api/search
    const [isOpen, setOpen] = useState(false); // controls dropdown of results
    const [isLoading, setLoading] = useState(false); // shows loading state
    const [selectedType, setSelectedType] = useState('all'); // sets the type of object is searched ex: only books, documents, or all
    const [selectedIndex, setSelectedIndex] = useState(-1); // tracks keyboard navigation

    const searchRef = useRef(null); 
    const debounceRef = useRef(null);


    const fetchData = (value) =>{

        if (debounceRef.current){
            clearTimeout(debounceRef.current)
        }
 

        debounceRef.current = setTimeout(async()=>{
            if (value.trim().length >=2){
                setLoading(true);
                setError(null);
            


            try{

                const response = await fetch('/api/search', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                        query: value.trim(),
                        type: selectedType,
                        limit: 10

                    })
                })

                if(!response.ok){
                    throw new Error('Search Failed')
                }

                const data = await response.json();
                setResults(data.results);
                setOpen(true)
                setSelectedIndex(-1)

            }catch(error){
                setError('Error with search')
                setResults([])
                console.error('Search Error: ', error)
            } finally{
                setLoading(false)
            }
        } else {

            setResults([]);
            setOpen(false);
        }
    }, 300);

    };

    const handleChange = (value) => {
        setQuery(value || '')
        fetchData(value || '')
    }

    const handleTypeChange = (type) => {

        setSelectedType(type)
        if (query.trim().length>=2){
            fetchData(query);
        }

    }

    const handleResultClick = (results) =>{
        setQuery(results.title);
        setOpen(false);
        setSelectedIndex(-1);
        console.log('Selected: ', results);
    }


    const handleKeyDown = (e) =>{
        if (!isOpen || results.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => 
                    prev < results.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0 && selectedIndex < results.length) {
                    handleResultClick(results[selectedIndex]);
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setSelectedIndex(-1);
                break;
        }
    };

    const iconClickSearch = (results) =>{
        setQuery(results.title)
        setOpen(false)
        setSelectedIndex(-1)
        console.log('Selected: ', results)

    }

    useEffect (()=>{
        const handleOutsideClick = (event) =>{
            if (searchRef.current && !searchRef.current.contains(event.target)){
                setOpen(false);
                setSelectedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return ()  =>{
            document.addEventListener('mousedown', handleOutsideClick);
        };
    },[]);

    useEffect (()=>{

        return ()=>{

            if(debounceRef.current){
                clearTimeout(debounceRef.current);
            }
        }
    })
    
return (

    <div className="search-container" ref={searchRef}>
            {/* Search Type Filters - positioned above your search bar */}
            <div className="search-filters">
                <button 
                    className={`filter-btn ${selectedType === 'All' ? 'active' : ''}`}
                    onClick={() => handleTypeChange('All')}
                >
                    All
                </button>
                <button 
                    className={`filter-btn ${selectedType === 'Books' ? 'active' : ''}`}
                    onClick={() => handleTypeChange('Books')}
                >
                    Books
                </button>
                <button 
                    className={`filter-btn ${selectedType === 'Documents' ? 'active' : ''}`}
                    onClick={() => handleTypeChange('Documents')}
                >
                    Documents
                </button>
            </div>

            {/* Your existing search bar structure */}
            <div className='input_wrapper'>
                <input 
                    className='input' 
                    placeholder={`Type to search ${selectedType === 'all' ? 'All' : selectedType}...`}
                    value={query} 
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                        if (results.length > 0) setIsOpen(true);
                    }}
                />
                <div>
                    {isLoading ? (
                        <div className="loading-spinner"></div>
                    ) : (
                        <img
                            className='search_icon' 
                            onClick={()=>iconClickSearch(results)}
                            alt='Search icon'
                            src={search.src}
                            style={{width: '19px', height: '19px'}}
                        />
                    )}
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            {/* Search Results Dropdown */}
            {isOpen && results.length > 0 && (
                <div className="search-results">
                    {results.map((results, index) => (
                        <div
                            key={`${results.type}-${results.id}`}
                            className={`search-results-item ${index === selectedIndex ? 'selected' : ''}`}
                            onClick={() => handleResultClick(results)}
                        >
                            <div className="results-main">
                                <div className="results-title">{results.title}</div>
                                <div className="results-meta">
                                    <span className={`results-type ${results.type}`}>
                                        {results.type.charAt(0).toUpperCase() + results.type.slice(1, -1)}
                                    </span>
                                    {results.authors && results.authors.length > 0 && (
                                        <span className="results-authors">
                                            by {results.authors.join(', ')}
                                        </span>
                                    )}
                                    {results.publisher && (
                                        <span className="results-publisher">{results.publisher}</span>
                                    )}
                                </div>
                            </div>
                            {results.description && (
                                <div className="results-description">
                                    {results.description.length > 100 
                                        ? `${results.description.substring(0, 100)}...` 
                                        : results.description
                                    }
                                </div>
                            )}
                        </div>
                    ))}
                    
                    {/* Show more results link */}
                    {results.length >= 10 && (
                        <div className="search-results-item show-more">
                            <div className="results-title">
                                Show all results for "{query}"
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* No results message */}
            {isOpen && results.length === 0 && query.length >= 2 && !isLoading && (
                <div className="search-results">
                    <div className="no-results">
                        No results found for "{query}"
                    </div>
                </div>
            )}
        </div>
)


}