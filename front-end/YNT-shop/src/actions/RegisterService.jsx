import AxiosInstance from "../utils/AxiosInstance";

async function RegisterService( firstName, lastName, email, password) {
  const axiosInstance = AxiosInstance();
  try {
    
    const response = await axiosInstance.post("/auth/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    return response;
  } catch (error) {
    console.error("Register failed:", error);
    throw error;
  }
}

export default RegisterService;