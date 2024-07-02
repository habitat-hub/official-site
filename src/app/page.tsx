import GroupDescription from "../components/top/GroupDescription";
import Layout from "./layout";
import MemberList from "../components/top/MemberList";
import PortfolioList from "../components/top/PortfolioList";
import SnsList from "../components/top/SnsList";
import HeaderContainer from "../components/common/atoms/HeaderContainer";
import FooterContainer from "../components/common/atoms/FooterContainer";

export default function Home() {
  return (
    <Layout>
      <HeaderContainer />
      <GroupDescription />
      <PortfolioList />
      <MemberList />
      <SnsList />
      <FooterContainer />
    </Layout>
  );
}
