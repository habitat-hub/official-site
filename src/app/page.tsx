import Image from "next/image";
import Footer from "./Footer";
import GroupDescription from "./GroupDescription";
import Header from "./Header";
import Layout from "./layout";
import MemberList from "./MemberList";
import PortfolioList from "./PortforioList";
import SnsList from "./SnsList";

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
