import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import createError from '../utils/createError.js';
import sendEmail from '../utils/email.js';
import crypto from 'crypto'

export const register= async (req,res,next) =>
{
   try{
      const hash = bcrypt.hashSync(req.body.password, 5)
      const newUser = new User({
         ...req.body,
         password:hash
      })
         await newUser.save();
         const token = jwt.sign({
            id: newUser._id,
            isSeller: newUser.isSeller,
         }, process.env.JWT_KEY);
   
         // Exclude password field from response
         const { password, ...info } = newUser._doc;
   
         // Set the token in a cookie
         res.cookie("accessToken", token, { httpOnly: true });
   
         // Send response with user info and token
         res.status(201).send({ message: "User has been successfully created", user: info, token });
   }
   catch(err){
         next(err)
      }
   };

export const login= async (req,res,next) =>
{
   try{
      const user = await User.findOne({username:req.body.username});

      if(!user) return next(createError(404, "User not found!"));

      const iscorrect = bcrypt.compareSync(req.body.password, user.password);
      if(!iscorrect) return next(createError(400, "Wrong Password or Username!"));

      const token = jwt.sign({
         id : user._id,
         isSeller:user.isSeller,
      }, process.env.JWT_KEY);

      const { password, ...info } = user._doc;
    res.cookie("accessToken", token, {httpOnly: true,}).status(200).send(info);
   }
   catch(err){
      next(err);
      }
};

export const logout= async (req,res) =>
{
   res.clearCookie('accessToken',{
      sameSite:"none",
      secure:true,

   }).status(200).send("User has been logged out");
};

export const forgotpassword = async (req, res, next) => {
   // 1 . Get user based on their email
   const user = await User.findOne({ email: req.body.email });
   if (!user) next(createError(404, "User not found!"));

   // 2. Generate a random reset token
   const resetToken = user.createResetPasswordToken();
   await user.save({ validateBeforeSave: false });

   // 3. Send the token to email
   const frontendUrl = "http://localhost:5173"; // Replace with your frontend URL
   const resetUrl = `${frontendUrl}/resetpassword/${resetToken}`;
   const message = `We have received a password reset request. Please use the below link to reset your password:\n\n${resetUrl}\n\nThis reset password link will be valid only for 10 minutes.`;

   try {
      await sendEmail({
         email: user.email,
         subject: 'Password change request received',
         message: message
      });

      res.status(200).json({
         status: 'success',
         message: "Password reset link sent to the user's email"
      });
   } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetTokenExpires = undefined;
      await user.save({ validateBeforeSave: false });

      return next(createError(500, "Please try again later."));
   }
};


export const resetpassword = async (req, res, next) => {
   const token = crypto.createHash('sha256').update(req.params.token).digest('hex');

   try {
      const user = await User.findOne({
         passwordResetToken: token,
         passwordResetTokenExpires: { $gt: Date.now() }
      });

      if (!user) {
         const error = createError(400, "Token is expired or invalid");
         return next(error);
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Update user's password with the hashed password
      user.password = hashedPassword;
      user.passwordResetToken = undefined;
      user.passwordResetTokenExpires = undefined;
      user.passwordChangedAt = Date.now();
      await user.save();

      // Generate new JWT token for the user
      const newToken = jwt.sign({
         id: user._id,
         isSeller: user.isSeller,
      }, process.env.JWT_KEY);

      // Set the new token in a cookie
      res.cookie("accessToken", newToken, { httpOnly: true });


      res.status(200).send({ message: "Password reset successful", token: newToken });
   } catch (error) {
      next(error);
   }
};





