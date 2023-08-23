import UserRegModel from "../models/UserRegModel.js";
const UserRegister = async (req, res) => {
   const {userName, userEmail, userMobile, userPassword, rPassword} = req.body;
   if (userName && userEmail && userMobile && userPassword & rPassword) {
      if (userPassword == rPassword) {
         try {
            const doc =  new UserRegModel({
               userName,
               userEmail,
               userMobile,
               userPassword,
            });
            await doc.save();
            res.status(201).send({
               status: "Success",
               message: "Record Inserted...",
            });
         }catch(err){
            console.log(err);
            res.send({status: "Error", message: "Unable to Reg."});
         }
      }else {
         res.send({
            status: "Password Issue",
            message: "Password and Confirm password does not matched...",
         });
      };
   }else {
      res.send({
         status: "Error",
         message: "Please fill all the fields...",
      });
   };
};
const UserLogin = (req, res) => {
   res.status(200).send({message: "Hello...2"});
};

export default {UserRegister, UserLogin};