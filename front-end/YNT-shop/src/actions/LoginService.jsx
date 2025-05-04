import AxiosInstance from '../utils/axiosInstance';

async function LoginService(email, password) {

    const axiosInstance = AxiosInstance();

    try {
        const response = await axiosInstance.post('/auth/login', {
            email: email,
            password: password
        });
        if (response.status === 200 && response.data.responseData) {
            // Store the token in sessionStorage
            sessionStorage.setItem('token', response.data.responseData.token);
        }
        return response;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }  
}

export default LoginService;