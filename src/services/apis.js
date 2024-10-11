import axios from 'axios'
const db_url = 'https://masterstack-b.onrender.com'

export const login = (data)=>{
    return axios.post(`${db_url}/login`, data)
}

export const setTechStacks = (id, data)=>{
    return axios.post(`${db_url}/techStack/${id}`, data)
} 

export const changePassword = (id, data)=>{
    return axios.post(`${db_url}/changePassword/${id}`, data)
}

export const getDetails = (id)=>{
    return axios.get(`${db_url}/${id}`)
}