import { useEffect, useState } from "react";


const useGramoday = () => {
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        fetch('https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    return [details, setDetails];
}
export default useGramoday;