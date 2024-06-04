import React, { useEffect, useState } from 'react';
import AdCard from '../../Blog/AdCard';
import axios from 'axios';

const Pricing = () => {
    const [ads, setAds] = useState()
useEffect(()=>{

  axios.get(`https://ad-aura-server.vercel.app/ads`).then((res) => {
    setAds(res.data);
  })
},[])
    return (
        <div>
            <h4 className='text-center text-md text-p'>Pricing</h4>
            <h1 className='text-4xl font-bold text-center my-1'>Choose Your Plan</h1>
            <p className='text-center max-w-md mx-auto'>Simply running ads or any marketing initiative without proper planning and experimentation can be a costly mistake in business, so take the time to strategies and test different approaches.</p>
            <div className="my-10 grid grid-cols-1 lg:grid-cols-3">
            { ads && ads.map((ad) => (
              <AdCard key={ad?._id} ad={ad} />
            ))}
            </div>
        </div>
    );
};

export default Pricing;