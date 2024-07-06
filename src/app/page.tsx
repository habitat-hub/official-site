import Layout from "./layout";
import PortfolioList from "../components/top/PortfolioList";
import SnsListContainer from "../components/top/organisms/SnsListContainer";
import HeaderContainer from "../components/common/organisms/HeaderContainer";
import FooterContainer from "../components/common/atoms/FooterContainer";
import MemberListContainer from "@/components/top/organisms/MemberListContainer";
import GroupDescriptionContainer from "@/components/top/organisms/GroupDescriptionContainer";

export default function Home() {
  return (
    <Layout>
      <HeaderContainer />
      <GroupDescriptionContainer />
      <PortfolioList />
      <MemberListContainer />
      <SnsListContainer />
      <FooterContainer />
    </Layout>
  );
}
