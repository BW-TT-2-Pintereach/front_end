import axios from 'axios'; 

export const axiosDev = () => {
    const token = window.localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://pintereach-backend-ajg.herokuapp.com'
    })
}