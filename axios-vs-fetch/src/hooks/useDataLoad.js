import { useState, useEffect} from "react";
import API from '../Settings/API';

function useDataLoad (loadingFun, currentPage = 1){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        (loadingFun({page: currentPage}))
            .then(data => setData(data))
            .then(data => console.dir(data))
            .catch((error) => setIsError(true))
            .finally(()=>{setIsLoading(false)});
        },[currentPage]);
    return {data, isLoading, isError}
}

export default useDataLoad;