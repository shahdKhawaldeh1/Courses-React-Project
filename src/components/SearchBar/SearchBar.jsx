import './SearchBar.css';
import { IoSearchOutline } from "react-icons/io5";


export default function SearchBar({ searchQuery, sortOption, filterOption, handleSearch, handleSort, handleFilter ,categories }){
    return(
        <section className="search-bar">
                    <div className="search">
                        {IoSearchOutline && < IoSearchOutline className="ion-icon" />}
                        <input type="text" id="search-input" placeholder="Search the website.."  value={searchQuery} onChange={handleSearch}/>
                    </div>

                    <div className="sort-filter">
                        <div className="dropdown" >
                            <label for="sort-by" className="labels">Sort by:</label>
                            <div>
                                <select id="sort-by" value={sortOption} onChange={handleSort}>
                                    <option value="default">Default</option>
                                    <option value="topic">Topic Title</option>
                                    <option value="author">Author Name</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="dropdown filter-by">
                            <label for="filter-by" className="labels">Filter by:</label>
                            <div>
                                <select id="filter-by" value={filterOption} onChange={handleFilter}>
                                    <option value="all">All Categories</option>
                                        {categories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
    );
}