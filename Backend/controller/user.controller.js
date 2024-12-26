import Users from "../Model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const checkExistingUser = await Users.findOne({ email });
    if (checkExistingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createNewUser = new Users({
      name: name.toLowerCase(),
      email,
      password: hashPassword,
    });
    await createNewUser.save();
    res.status(201).json({ message: "User created successfully" ,user:{
      name:createNewUser.name,
      email:createNewUser.email,
      _id: createNewUser._id
    }});
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) {
      const isPasswordMatch = await bcryptjs.compare(password, user.password);

      if (!isPasswordMatch) {
        return res
          .status(400)
          .json({ message: "Invalid valid username or password" });
      } else {
        res.status(200).json({
          message: "Login successfully",
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
          },
        });
      }
    } else {
      return res
        .status(400)
        .json({ message: "Invalid valid username or password" });
    }
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
