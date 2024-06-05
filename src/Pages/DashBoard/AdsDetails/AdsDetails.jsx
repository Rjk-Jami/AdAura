import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Components/hooks/useAxiosSecure';

const AdsDetails = () => {
    const { id } = useParams();
    const [axiosSecure]= useAxiosSecure()

    const [ad, setAd] = useState(null);
    useEffect(()=>{
        if(id){
            axiosSecure.get(`/updateAds/${id}`)
        .then((res) => {
            console.log(res)
            setAd(res.data);
          })
        }
    },[])

    console.log(ad)
    return (
        <div className="hero  my-20 relative">
        
      <div className=" text-center">
        <div className="max-w-md">
            <div className="cursor-pointer mx-auto w-40 h-40 m-5 border border-black">
            <img src={ad?.image} alt="DEMO" />
            </div>
          <h1 className="text-3xl font-bold">Name: {ad?.name}</h1>
          <div className="h-[1px] bg-black w-full mt-2"></div>
          <p className="py-">Author: {ad?.CreateBy}</p>
          <p className="py-">Duration: {ad?.duration} Days</p>
          <div className="flex w-full justify-around">
            <div className="">
              <p>category:  <span className="font-bold">{ad?.category}</span></p>
            </div>
            <div className="">
                <p>Price: <span className="font-bold">{ad?.price}</span></p>
            </div>
            <div className="">
                <p>View: <span className="font-bold">{ad?.view}</span></p>
            </div>
            <div className="">
                <p>Booked: <span className="font-bold">{ad?.booked}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AdsDetails;