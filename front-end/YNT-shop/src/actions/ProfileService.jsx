import AxiosInstance from '../utils/axiosInstance';

async function ProfileService() {
    const axiosInstance = AxiosInstance();

    try {
        const response = await axiosInstance.get('/profile/view-profile');
        if (response.status === 200 && response.data.responseData) {
            return response.data.responseData;
        }
    } catch (error) {
        console.error("Profile fetch failed:", error);
        throw error;
    }
}

export default ProfileService;