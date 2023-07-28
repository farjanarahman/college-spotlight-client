import { useEffect } from "react";

const useTitle = title =>{
    useEffect(() =>{
        document.title = `CollegeSpotlight | ${title}`;
    }, [title])
};

export default useTitle;