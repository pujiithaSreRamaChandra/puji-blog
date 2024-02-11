import { useEffect ,useState} from "react";

const useFetch = (url) => {
    //data states
    const [data , setData] = useState(null);
    const [isLoading , setisLoading] = useState(true);
    const [error,setError] = useState(null);

    //useEffect to fetch dat from the JSON file after the inntail render only
    //you can use timeout to see the loading message properly
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
        .then(res => {
            if(!res.ok){
            throw Error("The resource is not found. please check your endpoints")
           }
           return res.json();})
        .then(data => {setData(data);
        setisLoading(false);
        setError(null);
        })
        .catch(err => {
            setisLoading(false);
            setError(err.message);
        })
        },1000)
        },[url]
    )

    return {data,isLoading,error};
}
 

export default useFetch;