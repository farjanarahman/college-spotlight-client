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


// import React, { useEffect, useState } from 'react';
// import CollegeCard from '../CollegeCard/CollegeCard';

// const Colleges = () => {
//     const [colleges, setColleges] = useState([]);
//     const [visibleColleges, setVisibleColleges] = useState(3); // Number of cards to show initially
//     const [searchQuery, setSearchQuery] = useState(''); // State for the search query


//     useEffect(() => {
//         fetch('https://college-service-server-pi.vercel.app/colleges')

//             .then(res => res.json())
//             .then(data => setColleges(data))
//     }, []);

//     // Filter the colleges based on the search query
//     const filteredColleges = colleges.filter(college =>
//         college.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     const handleSeeMore = () => {
//         setVisibleColleges(visibleColleges + 3); // Show 3 more cards when "See More" is clicked
//     };

//     return (
//         // <div>
//         //     <h2 className='text-3xl font-bold text-center mt-10 mb-5'>Discover <span className='text-orange-500'>Colleges</span></h2>
//         //     <div className='grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3'>
//         //         {colleges.slice(0, visibleColleges).map(college => (
//         //             <CollegeCard
//         //                 key={college._id}
//         //                 college={college}
//         //             />
//         //         ))}
//         //     </div>
//         //     {visibleColleges < colleges.length && (
//         //         <div className="flex justify-center mt-5">
//         //             <button className="btn btn-primary" onClick={handleSeeMore}>See More</button>
//         //         </div>
//         //     )}
//         // </div>
//         <div>
//             <h2 className='text-3xl font-bold text-center mt-10 mb-5'>Discover <span className='text-orange-500'>Colleges</span></h2>
//             {/* Search field */}
//             <div className="join search bg-sky-800 p-3">
//                 <div>
//                     <div>
//                         <input
//                             className="input input-bordered join-item"
//                             placeholder="Search College"
//                             value={searchQuery}
//                             onChange={e => setSearchQuery(e.target.value)}
//                         />
//                     </div>
//                 </div>
//             </div>
//             <div className='grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3'>
//                 {/* Use filteredColleges instead of colleges */}
//                 {filteredColleges.slice(0, visibleColleges).map(college => (
//                     <CollegeCard
//                         key={college._id}
//                         college={college}
//                     />
//                 ))}
//             </div>
//             {visibleColleges < filteredColleges.length && (
//                 <div className="flex justify-center mt-5">
//                     <button className="btn btn-primary" onClick={handleSeeMore}>See More</button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Colleges;


import React, { useEffect, useState } from 'react';
import CollegeCard from '../CollegeCard/CollegeCard';

const Colleges = ({ searchQuery }) => {
    const [colleges, setColleges] = useState([]);
    const [visibleColleges, setVisibleColleges] = useState(3);

    useEffect(() => {
        fetch('https://college-service-server-pi.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data));
    }, []);

    const filteredColleges = colleges.filter(college =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSeeMore = () => {
        setVisibleColleges(visibleColleges + 3);
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-10 mb-5">
                Discover <span className="text-orange-500">Colleges</span>
            </h2>
            <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3">
                {filteredColleges.slice(0, visibleColleges).map(college => (
                    <CollegeCard key={college._id} college={college} />
                ))}
            </div>
            {visibleColleges < filteredColleges.length && (
                <div className="flex justify-center mt-5">
                    <button className="btn btn-primary" onClick={handleSeeMore}>
                        See More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Colleges;


