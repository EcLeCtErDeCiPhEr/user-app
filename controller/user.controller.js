const userService = require("../service/user.service");

const createUser = async (req, res) => {
  const data = req.body;
  const result = await userService.createUser(data);
  console.log(result);
  return res
    .status(201)
    .json({ msg: `User Created Succesfully`, data: result });
};

const findAllUsers = (req, res) => {
  const findAll = userService.findAllUsers();
  if (!findAll) {
    return res.json({ msg: `Detail not found` });
  } else {
    return res.status(201).json({ msg: `Detail found`, data: findAll }); 
  }
};

const findById = async (req, res) => {
  const find = req.params.id;
  const findOne = await userService.findById(find);
  if (!findOne) {
    return res.json({ msg: `Detail not found` });
  } else {
    return res.status(201).json({ msg: `Detail found`, data: findOne });
  }
};

const updateById = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const update = await userService.updateById(id, data);
  if (update) {
    return res.status(201).json({ msg: `Updated`, value: update });
  }
};

const deleteById = async (req, res) => {
const id = req.params.id;
const deleted = await  userService.deleteById(id);
if(deleted) {
  return res.status(201).json({ msg: `Deleted`});

}



}
module.exports = { createUser, findAllUsers, findById, updateById, deleteById };
