
import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import Review from '../review/Review';

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Assuming you have a useQuery hook for fetching the current user

  const { isLoading: isLoadingReviews, error: errorReviews, data: reviewData } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const { isLoading: isLoadingOrders, error: errorOrders, data: orders } = useQuery({
    queryKey: ['orders'],
    queryFn: () => newRequest.get('/orders').then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (review) => newRequest.post('/reviews', review),
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews']);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;

    // Check if the user has purchased the gig
    const hasPurchased = orders.some((order) => order.gigId === gigId && order.buyerId === currentUser._id);

    if (hasPurchased) {
      mutation.mutate({ gigId, desc, star });
    } else {
      // Show a message indicating that only purchasers can leave reviews
      alert('You need to purchase the gig in order to leave a review.');
    }
  };

  return (
    <div>
      <div name="review">
        <h2 className="font-amaze font-semibold text-[#365486] text-[18px] py-4">Reviews</h2>
        <div name="reviewall" className="flex flex-col gap-3">
          {isLoadingReviews ? (
            <img src="/images/loading.svg" alt="Loading" className="h-[85px] m-auto" />
          ) : errorReviews ? (
            "Something went wrong!"
          ) : (
            reviewData.map((review) => <Review key={review._id} review={review} />)
          )}
          <div name="add">
            <h3 className="font-amaze font-semibold text-[#365486] text-[18px] py-4">Add a review</h3>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2" name="addreview">
              <div className="w-full flex justify-between">
                <input type="text" placeholder="write your opinion" className="w-full rounded-lg" />
                <select name="" id="" className="rounded-lg">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <button type="submit" className="hover:border-[#365486] hover:text-[#365486] border-[1px] w-[90px] p-1 my-2 font-medium text-white bg-[#365486] hover:bg-white rounded-lg">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
