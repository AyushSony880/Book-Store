import mongoose from "mongoose";

const userSchema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
};

const Users = mongoose.model("Users", userSchema);

export default Users;
