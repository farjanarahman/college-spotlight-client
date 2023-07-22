import CollegeCard from '../CollegeSection/CollegeCard';
import Header from '../Header/Header';
import './Home.css'
const Home = () => {
    return (
        <div>

            {/* Search field */}
            <div className="join search bg-sky-800 p-3">
                <div>
                    <div>
                        <input className="input input-bordered join-item" placeholder="Search College" />
                    </div>
                </div>
                <div className="indicator">
                    <button className="btn join-item bg-orange-500 hover:bg-orange-600">Search</button>
                </div>
            </div>
            <Header></Header>
            <CollegeCard></CollegeCard>
        </div>
    );
};

export default Home;