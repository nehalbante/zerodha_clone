const { model } = require("mongoose");

const{Positionschema}=require("../schema/positionschema")

const Positionmodel=new model("position",Positionschema)

module.exports={Positionmodel}
