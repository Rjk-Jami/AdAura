import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";

const EditProfile = () => {
  const emailForEdit = useParams();
  const [userInformation, setUserInformation] = useState(null);
  const [axiosSecure]= useAxiosSecure()
  useEffect(() => {
    if (emailForEdit) {
      axiosSecure
        .get(`/user/${emailForEdit?.email}`)
        .then((res) => {
          setUserInformation(res.data);
        });
    }
  }, [emailForEdit]);
  console.log(userInformation);

  const handleCreateRecipe =(e)=>{
    e.preventDefault(); 
    const form = e.target;
    console.log(form)
    const name = form.name.value;
    const phone = form.phone.value;
    const editedData = {
        name,
        phone
    }
    axiosSecure.patch(`/updateUser/${userInformation?._id}`,editedData )
    .then(res=>{
        if(res?.status === 200){
          console.log(res)
          Swal.fire("User is Updated");
         
        }
      })
    
  }
  return (
    <div className="h-[80vh] flex items-center">
      <div className="hero  relative ">
        <div className=" text-center">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="cursor-pointer m-auto  w-40 h-40  border border-black">
              <img
                className="m-auto w-full h-full"
                src={
                  userInformation?.photo
                    ? userInformation?.photo
                    : "https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="DEMO"
              />
            </div>
            <form onSubmit={handleCreateRecipe} className="w-full">
              <div className="mb-4">
                <label htmlFor="">Name </label>
                <input
                  defaultValue={userInformation?.name}
                  type="text"
                  name="name"
                  className="w-full py-3 px-5 border"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="">Phone </label>
                <input
                  step="any"
                  type="number"
                  name="phone"
                  defaultValue={userInformation?.phone}
                  className="w-full py-3 px-5 border"
                />
              </div>
              

              <div className="mb-4">
                <label htmlFor="">Email </label>
                <input
                readOnly
                  defaultValue={emailForEdit?.email}
                  type="text"
                  name="email"
                  className="w-full py-3 px-5 border"
                />
              </div>

              <div className="mb-4">
                <input
                  type="submit"
                  value={"Update User"}
                  className="w-full btn py-3 px-5 border btn-neutral"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
