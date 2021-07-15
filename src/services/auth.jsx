const authService = {
    login(form) {
        return fetch('https://cfd-reactjs.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.status === 200) {
                return res.json()
            }
        })
    },
    logout() { },
    update() { }
}
export default authService