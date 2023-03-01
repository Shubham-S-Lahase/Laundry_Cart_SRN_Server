const mongoose =require('mongoose');
const Order=require("../models/orderSchema");


  //PastOrder Get Api
  const getPastOrder = async (req , res) =>{
   console.log(req.userID.data)
   try{
       let result = await Order.find({userId:req.userID.data})
       res.status(201).json({
           status:"Success",
           result
       })
   }catch(e){
       res.status(500).json({
           status:"Failed",
           message:e.message
       })
   }
}



 module.exports={createOrder , getPastOrder, updateOrder}