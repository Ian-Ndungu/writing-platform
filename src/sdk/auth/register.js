import axios from "axios";
export const register = async (name, email, role, phoneNumber, password) => {
  const response = await axios.post("http://localhost:3000/users/register", {
    name,
    email,
    role,
    phoneNumber,
    password,
  });
  return response;
};
