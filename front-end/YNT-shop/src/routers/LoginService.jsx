import AxiosInstance from "../utils/AxiosInstance";

async function LoginService(username, password) {
    const axiosInstance = AxiosInstance();
    try {
        const response = axiosInstance.post('/auth/login', {
            username: username,
            password: password
        });
        const res = await response;
        if (res.data.token) {
            sessionStorage.setItem('token', res.data.token);
        }
        return res.data;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }  
}

export default LoginService;