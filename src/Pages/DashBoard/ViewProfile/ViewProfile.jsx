import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../Components/hooks/useAuth";
import useAxiosSecure from "../../../Components/hooks/useAxiosSecure";

const ViewProfile = () => {
  const { user } = useAuth();
  const [userInformation, setUserInformation] = useState(null);
  console.log(user);
  const [axiosSecure]= useAxiosSecure()

  useEffect(() => {
    if (user) {
        axiosSecure.get(`/user/${user?.email}`).then((res) => {
        setUserInformation(res.data);
      });
    }
  }, [user]);
  console.log(userInformation);
  return (
    <div className="h-[80vh] flex items-center">
        <div className="hero  relative ">
      <div className=" text-center">
        <div className="max-w-md mx-auto">
          <div className="cursor-pointer mx-auto w-40 h-40 m-5 border border-black">
            <img
              className="m-auto h-full"
              src={
                userInformation?.photo
                  ? userInformation?.photo
                  : "https://plus.unsplash.com/premium_photo-1692948505024-20a1288d0b65?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="DEMO"
            />
          </div>
          <h1 className="text-2xl text-left text-black font-bold">
            Name: {userInformation?.name}
          </h1>
          <h1 className="text-2xl text-left text-gray-800 font-bold">
            Email: {userInformation?.email}
          </h1>
          <h1 className="text-2xl text-left text-gray-800 font-bold">
            Phone: {userInformation?.phone}
          </h1>

          <div className="h-[1px] bg-black w-full mt-2"></div>
          <div className="">Joined Date: {userInformation?.joinedDate}</div>
          <div className="flex justify-around gap-5">
            <p className="">Booked Ad: {userInformation?.bookedAd.length}</p>
            <p className="">Created Ad: {userInformation?.createdAd.length}</p>
            <p className="">Total View: {userInformation?.totalView}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewProfile;
