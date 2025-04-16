import AxiosInstance from "../utils/AxiosInstance";

async function RegisterService( firstName, lastName, email, password) {
  const axiosInstance = AxiosInstance();
  try {

    const firstName = firstName.trim();
    const lastName = lastName.trim();
    const email = email.trim();
    const password = password.trim();
    
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