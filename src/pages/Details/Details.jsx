import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import   './Details.css';
import DetailsCard from '../../components/DetailsCard/DetailsCard.jsx';
import CourseDetails from '../../components/CourseDetails/CourseDetails.jsx';
import SubTopics from '../../components/SubTopics/SubTopics.jsx';

const Details= () => {
    const [course, setCourse] = useState([]);
    const { id } = useParams();


    useEffect(() => {
      const fetchCourses = async () => {
        try {
          const response = await fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`);
          const data = await response.json();
          setCourse(data);
        } catch (error) {
          console.error('Error fetching courses:', error);
        }
      };
  
      fetchCourses();
    }, []);
     console.log(course);

    return (
        <main className="main">
            <div className="details-section">
                <section className="body-container-details">
                    {course && <DetailsCard course={course} /> }
                    <CourseDetails course={course}/>
                </section>
            </div>
            <SubTopics course={course}/>
        </main>
    );
}

export default Details;