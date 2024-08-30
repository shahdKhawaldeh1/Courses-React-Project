import  './SubTopics.css';
import { GoCheckCircle } from "react-icons/go";

export default function SubTopics({course}){
    return(
        
        <div className='table details-container body-container-details'>
        <section className="subtopics">
            <div className="detail-sub-topics">
                <h2 className="detail-sub-title">{course.topic} Sub Topics</h2>
                <ul>
                    {course.subtopics && course.subtopics.length > 0 ? (
                        course.subtopics.map((subtopic, index) => (
                    <li key={index} className="detail-sub-list"> <GoCheckCircle className="subtopic-icon"/> {subtopic}</li>
                    ))
                    ) : (
                    <li className="detail-sub-list">Loading ... </li>
                    )}
                </ul>
            </div>
        </section>
    </div>
    );
}