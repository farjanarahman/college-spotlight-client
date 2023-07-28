
// import Colleges from '../CollegeSection/Colleges/Colleges';
// import Header from '../Header/Header';
// import './Home.css'
// const Home = () => {
//     return (
//         <div>

//             {/* Search field */}
//             <div className="join search bg-sky-800 p-3">
//                 <div>
//                     <div>
//                         <input className="input input-bordered join-item" placeholder="Search College" />
//                     </div>
//                 </div>
//                 <div className="indicator">
//                     <button className="btn join-item bg-orange-500 hover:bg-orange-600">Search</button>
//                 </div>
//             </div>
//             <Header></Header>
//             <Colleges></Colleges>
//         </div>
//     );
// };

// export default Home;

// Inside Home.js

import React, { useState } from 'react';
import Colleges from '../CollegeSection/Colleges/Colleges';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
            {/* Search field */}
            <div className="join search bg-sky-800 p-3">
                <div>
                    <div>
                        <input
                            className="input input-bordered join-item"
                            placeholder="Search College"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="indicator">
                    <button className="btn join-item bg-orange-500 hover:bg-orange-600">
                        Search
                    </button>
                </div>
            </div>
            <Header></Header>
            <Colleges searchQuery={searchQuery} />
        </div>
    );
};

export default Home;


