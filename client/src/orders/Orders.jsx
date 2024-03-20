import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import newRequest from '../utils/newRequest.js';

const Orders = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });
  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/chat/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(`/conversations/`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/chat/${res.data.id}`);
      }
    }
  };
  return (
    <div className="flex justify-center">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="w-[600px] p-5 md:w-[1200px]">
          <div className="flex justify-between font-amaze font-semibold text-[18px] mb-3 items-center">
            <h1 className="text-[#0D1B2A] text-[30px] font-semibold py-2">
              Orders
            </h1>
          </div>
          <table className="w-full text-center text-white">
            <thead>
              <tr className="h-[50px] p-2 m-2 bg-[#0F1035]">
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr
                  className="odd:bg-[#DCF2F1] text-[#0F1035] font-medium items-center py-2"
                  key={order._id}
                >
                  <td>{order.title}</td>
                  <td>
                    <img
                      name="image"
                      src={order.img}
                      alt=""
                      className="h-[40px] w-[40px] rounded-full object-cover mx-auto my-2"
                    />
                  </td>
                  <td>₹{order.price}</td>
                  <td>
                    <FaRegEnvelope className="mx-auto cursor-pointer text-[#365486] h-6 w-6"  onClick={() => handleContact(order)}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
