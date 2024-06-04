import React, { useEffect, useState } from 'react';
import useAuth from '../../../Components/hooks/useAuth';
import useAxiosSecure from '../../../Components/hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
const EditAd = () => {
    const id = useParams()
    console.log(id)
    const { user } = useAuth();
    const [axiosSecure]= useAxiosSecure()
    const [ad, setAd] = useState(null);
  useEffect(() => {
    
      if(id){
        axiosSecure.get(`/updateAds/${id?.id}`)
      .then((res) => {
        console.log(res)
        setAd(res.data);
      });
      }
    
  }, []);
  const handleEditAd =  (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const duration = form.duration.value;
    const category = form.category.value;
    const editedData = {
        name,
        image,
        price,
        duration,
        category,
      };
      axiosSecure.patch(`/updateAds/${id?.id}`,editedData )
      .then(res=>{
        console.log(res)
        if(res?.status === 200){
          
          Swal.fire("Ads updated");
          
        }
      })

}
  console.log(ad)
    return (
        <div className="w-full px-16">
     <div className="flex justify-between items-center">
      <h1 className="text-4xl mb-4">Create Ad</h1>
      <NavLink to={'/dashboard'}>
        
        <div className="flex gap-2 items-center  z-40 m-5 hover:text-blue-600">
          <FaLongArrowAltLeft />
          <p>Go Back</p>
        </div>
      </NavLink>
      </div>
      <form onSubmit={handleEditAd} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Name </label>
          <input required type="text" name="name" defaultValue={ad?.name}  className="w-full py-3 px-5 border" placeholder="Ad Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Image </label>
          <input required type="text" name="image"  defaultValue={ad?.image} className="w-full py-3 px-5 border" placeholder="Ad Image" />
        </div>
        
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input required
          defaultValue={ad?.price}
            type="number"
            name="price"
            placeholder="Ad Price" 
            className="w-full py-3 px-5 border"
          />
          <div className="mb-4">
          <label htmlFor="">Duration </label>
          <input required type="text" name="duration"  defaultValue={ad?.duration}
          placeholder="Ad Duration (Day)" className="w-full py-3 px-5 border" />
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="">Category </label>
          <select name="category"  value={ad?.category} id="" className="w-full py-3 px-5 border">
            
              <option  value={'Facebook'}>
                Facebook
              </option>
              <option   value={'Instagram'}>
              Instagram
              </option>
              <option  value={'LinkedIn'}>
              LinkedIn
              </option>
            
          </select>
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value={"Update Ad Post"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
    );
};

export default EditAd;