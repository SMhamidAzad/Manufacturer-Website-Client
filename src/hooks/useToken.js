const { useState, useEffect } = require("react")

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const presentUser = { email: email };
        if (email) {
            const url = `https://manufacturer-website-server.onrender.com/user/${email}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(presentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('useer fron usetoken ', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }
    }, [user])
    return [token]
}
export default useToken