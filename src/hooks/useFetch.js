import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(()=>{

        const abortController = new AbortController();
        fetch(url, { signal: abortController.signal })
        .then((resp) => {
            setError(null);
            if(!resp.ok){
                throw Error(resp.statusText);
            }
            return resp.json();
        })
        .then((respJosn) => {
            setIsPending(false);
            setData(respJosn);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log("fetch aborted");
            }else{
                setError(err.message);
                setIsPending(false);
            }

        });
        return () => abortController.abort;
    },[url]);

    return {data, isPending, error};
}
 
export default useFetch;