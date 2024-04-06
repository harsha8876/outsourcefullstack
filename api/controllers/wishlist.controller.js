// wishlist.controller.js
import Wishlist from '../models/wishlist.model';

// Add gig to wishlist
export const addToWishlist = async (req, res) => {
  try {
    const { userId, gigId } = req.body;
    const wishlist = await Wishlist.findOneAndUpdate(
      { user: userId },
      { $addToSet: { gigs: gigId } },
      { upsert: true, new: true }
    );
    return res.status(201).json(wishlist);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get wishlist for a user
export const getWishlistByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const wishlist = await Wishlist.findOne({ user: userId }).populate('gigs');
    return res.status(200).json(wishlist);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
