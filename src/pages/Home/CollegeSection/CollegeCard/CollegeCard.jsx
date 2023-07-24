// import React from 'react';

// const CollegeCard = ({ college }) => {
//     const { image, name, admissionDates, events, researchHistory, sports } = college;

//     return (
//         <div className="card w-96 bg-base-100 shadow-xl">
//             <figure><img src={image} alt="College" /></figure>
//             <div className="card-body">
//                 <h2 className="card-title">{name}</h2>
//                 <p>{admissionDates}</p>
//                 <div className="events">
//                     <p>Events: <span>
//                         {events.map((event, index) => (
//                             <span key={index} style={{ display: 'inline', listStyleType: 'disc', marginRight: '5px' }}>{event}</span>
//                         ))}
//                     </span></p>
//                 </div>
//                 <div className="sports">
//                     <p>Sports: <span>
//                         {sports.map((sport, index) => (
//                             <span key={index} style={{ display: 'inline', listStyleType: 'disc', marginRight: '5px' }}>{sport}</span>
//                         ))}
//                     </span></p>
//                 </div>
//                 <p>Research: {researchHistory}</p>
//                 <p>Admission: {admissionDates}</p>
//                 <div className="card-actions ">
//                     <button className="btn btn-primary">Details</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CollegeCard;


import React from 'react';
import './CollegeCard.css';

const CollegeCard = ({ college }) => {
    const { image, name, admissionDates, events, researchHistory, sports } = college;

    return (
        <div className="card-container">
            <figure>
                <img src={image} alt="College" className="college-image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="admission-dates">Admission: {admissionDates}</p>
                <div className="events">
                    <p className="card-label">Events:</p>
                    <ul className="bullet-points">
                        {events.map((event, index) => (
                            <li key={index} className="event">{event}</li>
                        ))}
                    </ul>
                </div>
                <div className="sports">
                    <p className="card-label">Sports:</p>
                    <ul className="bullet-points">
                        {sports.map((sport, index) => (
                            <li key={index} className="sport">{sport}</li>
                        ))}
                    </ul>
                </div>
                <p className="research">Research: {researchHistory}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;

