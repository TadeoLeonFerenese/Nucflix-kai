const controller = {};
const ListModel = require("../model/listModel");

controller.index = async (req, res) => {
  try {
    await ListModel.find();
    console.log("loQueQuieraTraerDeBaseDeDatos");
  } catch (err) {
    console.log(err);
  }
};

module.exports = controller;
