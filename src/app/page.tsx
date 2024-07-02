import GroupDescription from "../components/top/GroupDescription";
import Layout from "./layout";
import MemberList from "../components/top/MemberList";
import PortfolioList from "../components/top/PortfolioList";
import SnsListContainer from "../components/top/organisms/SnsListContainer";
import HeaderContainer from "../components/common/organisms/HeaderContainer";
import FooterContainer from "../components/common/atoms/FooterContainer";

export default function Home() {
  return (
    <Layout>
      <HeaderContainer />
      <GroupDescription />
      <PortfolioList />
      <MemberList />
      <SnsListContainer />
      <FooterContainer />
    </Layout>
  );
}
