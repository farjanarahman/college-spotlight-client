import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-green-500 text-4xl" />
      </div>
    );
  }

    if(user){
        return children
    }
    
    return <Navigate state={{from:location}} to="/login" replace></Navigate>;
};

export default PrivateRoutes;