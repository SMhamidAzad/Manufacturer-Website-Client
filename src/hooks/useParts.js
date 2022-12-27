import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('https://manufacturer-website-server.onrender.com/tools')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return [parts, setParts];
}
export default useParts;