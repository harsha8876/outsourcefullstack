import React from "react";
import { Link , useParams} from "react-router-dom";
import getCurrentUser from "../utils/getCurrentUser.js"
import { MdDeleteForever } from "react-icons/md";
import { useQuery , useMutation,useQueryClient} from "@tanstack/react-query";
import newRequest from "../utils/newRequest.js"


const Mygigs=()=> {
const {id} = useParams();
  const currentUser = getCurrentUser();
  
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  
  return (
    <div name="myGigs" className="flex justify-center">
      {isLoading ? <img src='/images/loading.svg' alt='Loading' className='h-[85px] m-auto' /> : error ? "error" :<div name="container" className="w-[600px] p-5 md:w-[1200px]">
        <div name="title" className="flex justify-between font-amaze font-semibold text-[18px] mb-3 items-center" >
          <h1 className="text-[#0D1B2A] text-[30px] font-semibold py-2">Gigs</h1>
          
            <Link to="/add">
              <button className="forpopular text-sm font-medium px-2">Add New Gig</button>
            </Link>
          
        </div>
        <table className="w-full text-center text-white">
        <tbody>
          <tr className="h-[50px] p-2 m-2 bg-[#0F1035]">
            <th className="mr-1">Title</th>
            <th className="mr-1">Image</th>
            <th className="mr-2">Price</th>
            <th className="mr-2">Sales</th>
            <th className="mr-2">Action</th>
          </tr>
          {data.map((gig)=>(
          <tr className="odd:bg-[#DCF2F1] text-[#0F1035] font-medium items-center py-2" key={gig._id}>
            <td>
              <img
                name="image"
                src={gig.cover}
                alt=""
                className="h-[40px] w-[40px] rounded-full object-cover mx-auto my-2"
              />
            </td>
            <td>{gig.title}</td>
            <td>₹{gig.price}</td>
            <td>{gig.sales}</td>
            <td>
            <MdDeleteForever className="mx-auto cursor-pointer text-red-600 h-6 w-6" onClick={()=>handleDelete(gig._id)}/>
            </td>
          </tr>
          )) }
         </tbody>
        </table>
      </div>}
    </div>
  );
}

export default Mygigs;