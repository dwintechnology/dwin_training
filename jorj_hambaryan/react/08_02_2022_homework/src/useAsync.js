import {
    useEffect,
    useState
} from 'react';


function useAsync(func, arr) {
    let [loading, setLoading] = useState(true);
    let [value, setValue] = useState();
    let [error, setError] = useState(false)

    useEffect(()=>{      
            setTimeout(()=>{
                func().then((arr)=>{setValue(arr)}).catch(()=>{setError(true)}).finally(()=>{setLoading(false)});
                
            },1000)       
    },arr)       

    return {
        loading,
        error,
        value,
    }
}

export default useAsync