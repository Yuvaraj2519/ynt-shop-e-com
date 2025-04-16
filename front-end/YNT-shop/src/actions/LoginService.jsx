import AxiosInstance from "../utils/AxiosInstance";

async function LoginService(email, password) {
    const axiosInstance = AxiosInstance();
    try {
        const response = await axiosInstance.post('/auth/login', {
            email: email,
            password: password
        });
        if (response.data.responseData.token) {
            sessionStorage.setItem('token', response.data.responseData.token);
        }
        return res;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }  
}

export default LoginService;