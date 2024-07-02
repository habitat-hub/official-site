import GroupDescription from "../components/top/GroupDescription";
import Layout from "./layout";
import PortfolioList from "../components/top/PortfolioList";
import SnsListContainer from "../components/top/organisms/SnsListContainer";
import HeaderContainer from "../components/common/organisms/HeaderContainer";
import FooterContainer from "../components/common/atoms/FooterContainer";
import MemberListContainer from "@/components/top/organisms/MemberListContainer";

export default function Home() {
  return (
    <Layout>
      <HeaderContainer />
      <GroupDescription />
      <PortfolioList />
      <MemberListContainer />
      <SnsListContainer />
      <FooterContainer />
    </Layout>
  );
}
