const User = require("../model/usermodel.js");
const home = async (req, res) => {
  try {
    res.status(200).send("hello world")
  } catch (error) {
    res.status(500).send("internal server error")
  }
};


const registration = async (req, res) => {
  try {
    // console.log(req.body);
    const data = req.body;
    // const userExist = await User.findOne({ email });
    // if (userExist) {
    //   return res.status(400).json({ msg: "email already exist" });
    // }
    const Userdata = new User(data);
    await Userdata.save();

    res.status(200).json({
      status: 0,
      message: "Department created successfully",
      data: Userdata
    });
    
  } catch (error) {
    res.status(404).json({ status: 0, message: error.message });

    console.log(error);

  }
};
module.exports = { home, registration };