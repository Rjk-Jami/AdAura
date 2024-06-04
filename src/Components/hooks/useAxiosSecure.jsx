import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const axiosSecure = axios.create({
    baseURL : 'https://ad-aura-server.vercel.app'
  })
const useAxiosSecure = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()
useEffect(()=>{
    axiosSecure.interceptors.request.use( (config)=> {
        // Do something before request is sent
        const token = localStorage.getItem('access-token')
        // console.log(token,'token')
        if(token){
          config.headers.Authorization = `bearer ${token}`
        }
        return config;
      });
      axiosSecure.interceptors.response.use( (response)=> 
        response
      ,  async(error)=> {
       
        // Do something with response error
        if(error.response && error.response.status === 401 || error.response.status === 403 ){
         await logout()
          navigate('/login')
        }
        return Promise.reject(error);
      });


},[navigate,logout])
    return [axiosSecure]
};

export default useAxiosSecure;