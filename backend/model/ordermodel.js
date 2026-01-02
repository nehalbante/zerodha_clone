const { model } = require("mongoose");

const{Orderschema}=require("../schema/orderschema")

const Ordermodel=new model("order",Orderschema)

module.exports={Ordermodel}
