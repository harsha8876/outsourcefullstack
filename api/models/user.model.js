import mongoose from 'mongoose';
import crypto from 'crypto';
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  passwordResetToken: {
    type: String,
    required: false,
  },
  passwordResetTokenExpires: {
    type: Date, 
    required: false,
  },
  passwordChangedAt: {
    type: Date, 
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
  isSeller: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});

userSchema.methods.createResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  this.passwordResetTokenExpires = new Date(Date.now() + 10 * 60 * 1000); // Set expiration time 10 minutes from now
  return resetToken;
};


export default mongoose.model("User", userSchema);
