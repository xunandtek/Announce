import Layout from '../../layout';
import Pagination from './pagination';
import data from '../../data';

const Dashboard = () => {
  return (
    <Layout>
      <Pagination data={data} />
    </Layout>
  )
}

export default Dashboard;
