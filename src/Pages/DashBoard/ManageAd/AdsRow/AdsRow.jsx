import { Link, NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../../Components/hooks/useAuth";
import useAxiosSecure from "../../../../Components/hooks/useAxiosSecure";

/* eslint-disable react/prop-types */
export default function AdsRow({ ad, setAds }) {
    console.log(ad)
    const { user } = useAuth();

    const [axiosSecure]= useAxiosSecure()

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axiosSecure.delete(`/ads/${id}`);

        if (response?.status === 200) {
          const newResponse = await axiosSecure.get(`/ads/${user?.email}`);
          if (newResponse?.status === 200) {
            setAds(newResponse?.data);
          }
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    } catch (error) {
      console.error("Error deleting the ad:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error deleting your file. Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <tr>
      <th>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={ad?.image} />
          </div>
        </div>
      </th>
      <td>{ad?.name}</td>
      <td>{ad?.price}</td>
      <td>{ad?.category}</td>
      <td>{ad?.duration}</td>
      <td>{ad?.booked}</td>
      <td>{ad?.view}</td>
      <td className="flex gap-4 flex-col mx-auto">
        <NavLink to={`/dashboard/adDetails/${ad?._id}`} className=" text-lg">
          <FaEye className=" text-p hover:text-black" />
        </NavLink>
        <Link to={`/dashboard/editAd/${ad?._id}`} className=" text-lg">
          <FaEdit className=" text-p hover:text-black" />
        </Link>
        <button onClick={() => handleDelete(ad?._id)} className=" text-lg">
          <MdDeleteForever className=" text-p hover:text-black" />
        </button>
      </td>
    </tr>
  );
}
