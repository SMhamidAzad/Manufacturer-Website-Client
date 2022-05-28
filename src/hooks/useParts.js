import { useEffect, useState } from "react";

const useParts = ()=>{
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('https://mighty-earth-01337.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return [parts,setParts];
}
export default useParts;