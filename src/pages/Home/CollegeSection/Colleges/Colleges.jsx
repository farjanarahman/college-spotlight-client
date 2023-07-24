// import React, { useEffect, useState } from 'react';
// import CollegeCard from '../CollegeCard';

// const Colleges = () => {
//     const [colleges, setColleges] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/colleges')
//             .then(res => res.json())
//             .then(data => setColleges(data))
//     }, [])
//     return (
//         <div>
//             <h2 className='text-3xl font-bold text-center mt-5'>Discover <span className='text-orange-500'>Colleges</span></h2>
//             <div>
//                 {
//                     colleges.map(college => <CollegeCard
//                         key={college._id}
//                         college={college}></CollegeCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Colleges;


import React, { useEffect, useState } from 'react';
import CollegeCard from '../CollegeCard/CollegeCard';

const Colleges = () => {
    const [colleges, setColleges] = useState([]);
    const [visibleColleges, setVisibleColleges] = useState(3); // Number of cards to show initially

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, []);

    const handleSeeMore = () => {
        setVisibleColleges(visibleColleges + 3); // Show 3 more cards when "See More" is clicked
    };

    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-5'>Discover <span className='text-orange-500'>Colleges</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {colleges.slice(0, visibleColleges).map(college => (
                    <CollegeCard
                        key={college._id}
                        college={college}
                    />
                ))}
            </div>
            {visibleColleges < colleges.length && (
                <div className="flex justify-center mt-5">
                    <button className="btn btn-primary" onClick={handleSeeMore}>See More</button>
                </div>
            )}
        </div>
    );
};

export default Colleges;
