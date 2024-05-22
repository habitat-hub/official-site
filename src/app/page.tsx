import GroupDescription from "./components/top/GroupDescription";
import Layout from "./layout";
import MemberList from "./components/top/MemberList";
import PortfolioList from "./components/top/PortfolioList";
import SnsList from "./components/top/SnsList";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
    <Layout>
      <Header />
      <GroupDescription />
      <PortfolioList />
      <MemberList />
      <SnsList />
      <Footer />
    </Layout>
  );
}
