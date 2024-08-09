import DashboardPage from './dashboard';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const getToken = () => {
  const token = cookies().get('access_token');
  return token;
};
const Dashboard = async () => {
  const token = getToken();
  
  if (typeof token === 'undefined') {
    redirect("/auth/login");
  } else {
    return <DashboardPage />;
  }
}

export default Dashboard;