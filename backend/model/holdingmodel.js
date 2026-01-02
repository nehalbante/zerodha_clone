const { model } = require("mongoose");

const{Holdingschema}=require("../schema/holdingschema")

const Holdingmodel=new model("holding",Holdingschema)

module.exports={Holdingmodel}
