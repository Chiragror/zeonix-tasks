const jwt = require("jsonwebtoken");
const secretkey = "secretkey";
const model = require("../model/user");
const bcrypt = require("bcrypt");

async function userRegister(req, res) {
  let data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    role:req.body.role,
    state: req.body.state,
    zipcode: req.body.zipcode,
  };
  let result = await model.create(data);
  console.log(result);
  res.json({
    message: result,
  });
}

async function logIn(req, res) {
  let result = await model.findOne({ email: req.body.email });
  let data = await bcrypt.compare(req.body.password, result.password);
  let role = await req.body.role==result.role;
  if (!result) {
    res.json({
      success: false,
      message: "no id found",
    });
  } else {
    if (data&& role == true) {
    //   id = result._id,result.role;
      token = jwt.sign({ id: result.role, role:result.role }, secretkey);
      res.json({
        success: true,
        message: "login successfull",
        role,
        token,
      });
    }else{
        res.json({
            message:"Enter Vaild details"
            
        })
    }
  }
}

module.exports = {
  userRegister,
  logIn,
};
