import React,{useState,useEffect} from 'react';
import styles from './Home.module.scss';
import Card from '../../components/Card/Card.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { useFavoritesVisibility } from '../../context/FavoritesVisibilityContext';
import Favourites from '../../components/Favourites/Favourites.jsx';

const Home= () => {
        const [allCourses, setAllCourses] = useState([]);
        const [filteredCourses, setFilteredCourses] = useState([]);
        const [searchQuery, setSearchQuery] = useState('');
        const [sortOption, setSortOption] = useState('default');
        const [filterOption, setFilterOption] = useState('all');
        const [categories, setCategories] = useState([]);
        const { showFavorites } = useFavoritesVisibility();
        
        useEffect(() => {
          const fetchCourses = async () => {
            try {
              const response = await fetch('https://tap-web-1.herokuapp.com/topics/list');
              const data = await response.json();
              setAllCourses(data);
              setFilteredCourses(data);
              const uniqueCategories = [...new Set(data.map(course => course.category))];
              setCategories(uniqueCategories);
            } catch (error) {
              console.error('Error fetching courses:', error);
            }
          };
      
          fetchCourses();
        }, []);
        useEffect(() => {
          updateFilteredCourses();
        }, [searchQuery, sortOption, filterOption]);
      
        const handleSearch = (event) => {
          setSearchQuery(event.target.value);
        };
      
        const handleSort = (event) => {
          setSortOption(event.target.value);
        };
      
        const handleFilter = (event) => {
          setFilterOption(event.target.value);
        };
        const updateFilteredCourses = () => {
          let courses = [...allCourses];
      
          // Filter courses
          if (filterOption !== 'all') {
            courses = courses.filter(course => course.category === filterOption);
          }
      
          // Search courses
          if (searchQuery) {
            courses = courses.filter(course => 
              course.topic.toLowerCase().includes(searchQuery.toLowerCase())
            );
          }
          // Sort courses
          courses = courses.sort((a, b) => {
            if (sortOption === 'default') return 0;
            if (sortOption === 'topic') return a.topic.localeCompare(b.topic);
            if (sortOption === 'author') return a.name.localeCompare(b.name);
            return 0;
          });

          setFilteredCourses(courses);
        };

        if (!allCourses || allCourses.length === 0) {
                return <div className={styles.loading}>Loading...</div>;
        }

  return (
    <>
          <div className={styles.container}>
                <SearchBar
                  searchQuery={searchQuery}
                  sortOption={sortOption}
                  filterOption={filterOption}
                  handleSearch={handleSearch}
                  handleSort={handleSort}
                  handleFilter={handleFilter}
                  categories={categories}
                />
                  <div className={styles['topics-found']}><p>"{filteredCourses.length}" Web Topics Found</p></div>
                  <div className={styles.cards}>
                      {filteredCourses.map(course => (
                      <Card key={course.id} course={course} />
                      ))}
                  </div>

          </div>
           {showFavorites && <Favourites/>}
           </>
          
  );
}

export default Home;