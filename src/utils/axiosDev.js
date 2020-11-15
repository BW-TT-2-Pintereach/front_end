import axios from 'axios'; 

export const axiosDev = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvZXl3aXJlIiwidXNlcklkIjozLCJpYXQiOjE2MDUzMDk3NzAsImV4cCI6MTYwNTMyNzc3MH0.JlQKCXsV6f84hqvh-4GfFiI_teWrv09cGD4s8qAGffo"

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://pintereach-backend-ajg.herokuapp.com'
    })
}