import search from '../../assests/search.png';
import './SearchBar.css'

export const SearchBar = () => {
return (

    <div className='input_wrapper'>
        <input className='input' placeholder="Type to search...."/>
        <div>
            <img
                className='search_icon' 
                src={search.src}
                style={{width: '19px', height: '19px' }}/>
        </div>
    </div>

)


}