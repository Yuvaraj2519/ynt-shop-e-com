import AxiosInstance from "../utils/AxiosInstance";


function DashboardPage() {

  const axiosInstance = AxiosInstance();

  const fetchDashboardData = async () => {
    const res = await axiosInstance.get('/user/all-users')
    console.log(res.data);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <button onClick={fetchDashboardData}>Fetch Dashboard Data</button>
    </div>
  );
}

export default DashboardPage;