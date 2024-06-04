import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Components/hooks/useAxiosSecure';
import useAuth from '../../../Components/hooks/useAuth';
import AdsRow from './AdsRow/AdsRow';


const ManageAd = () => {
    const [axiosSecure]= useAxiosSecure()
    const { user } = useAuth();

    const [ads, setAds] = useState(null);
  useEffect(() => {
    
      axiosSecure.get(`/ads/${user?.email}`)
      .then((res) => {
        console.log(res)
        setAds(res.data);
      });
    
  }, []);
console.log(ads)
    return (
        <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">Mange All Recipe</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Duration</th>
            <th>Total Booked</th>
            <th>Total View</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ads?.map((ad) => (
            <AdsRow key={ad?._id} ad={ad} setAds={setAds}/>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default ManageAd;