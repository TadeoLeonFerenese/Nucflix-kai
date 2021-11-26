const controller = {};
const IndexModel = require("../model/indexModel")

controller.index = async (req, res) => {
 try {
    await IdenxModel.find()
    console.log("loQueQuieraTraerDeBaseDeDatos")
 } catch (err) {
   console.log(err);
 }
}

module.exports = controller;
