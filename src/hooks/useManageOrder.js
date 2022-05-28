import { useEffect, useState } from "react"

const useManageOrder = ()=>{
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://mighty-earth-01337.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return [orders,setOrders]
}
export default useManageOrder