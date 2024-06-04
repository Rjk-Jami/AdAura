import axios from "axios";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Components/hooks/useAuth";
import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";

const CreateAd = () => {
    const { user } = useAuth();
    const [axiosSecure]= useAxiosSecure()

    const handleCreateRecipe =  (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const duration = form.duration.value;
        const category = form.category.value;
        const adData = {
            name,
            image,
            price,
            duration,
            category,
            booked: 0,
            view: 0,
            CreateBy:user?.email
          };
          axiosSecure.post("/ads", adData)
          .then(res=>{
            console.log(res)
            if(res?.data?.insertedId){
              
              Swal.fire("New Ads Added");
              form.reset();
              
            }
          })

    }
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
      <form onSubmit={handleCreateRecipe} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Name </label>
          <input required type="text" name="name"  className="w-full py-3 px-5 border" placeholder="Ad Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Image </label>
          <input required type="text" name="image"  className="w-full py-3 px-5 border" placeholder="Ad Image" />
        </div>
        
        <div className="mb-4">
          <label htmlFor="">Price </label>
          <input required
            type="number"
            name="price"
            placeholder="Ad Price" 
            className="w-full py-3 px-5 border"
          />
          <div className="mb-4">
          <label htmlFor="">Duration </label>
          <input required type="text" name="duration" 
          placeholder="Ad Duration (Day)" className="w-full py-3 px-5 border" />
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="">Cateogry </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            
              <option  value={'Facebook'}>
                Facebook
              </option>
              <option  value={'Instagram'}>
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
            value={"Create Ad Post"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
    );
};

export default CreateAd;