import { useLoaderData } from 'react-router-dom';

const SingleCollege = () => {
    const college = useLoaderData();
    console.log(college);
    const {name} = college;
    return (
        <div>
            <h1 className='text-3xl text-center'>Name of the college is: {name}</h1>
        </div>
    );
};

export default SingleCollege;