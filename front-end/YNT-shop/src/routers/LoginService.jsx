import AxiosInstance from "../utils/AxiosInstance";

async function LoginService(email, password) {
    const axiosInstance = AxiosInstance();
    try {
        const response = axiosInstance.post('/auth/login', {
            email: email,
            password: password
        });
        const res = await response;
        if (res.data.token) {
            sessionStorage.setItem('token', res.data.token);
        }
        return res;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }  
}

export default LoginService;