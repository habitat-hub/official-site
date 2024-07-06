import Layout from "./layout";
import SnsListContainer from "../components/top/organisms/SnsListContainer";
import HeaderContainer from "../components/common/organisms/HeaderContainer";
import FooterContainer from "../components/common/atoms/FooterContainer";
import MemberListContainer from "@/components/top/organisms/MemberListContainer";
import GroupDescriptionContainer from "@/components/top/organisms/GroupDescriptionContainer";
import PortfolioListContainer from "@/components/top/organisms/PortfolioListContainer";

export default function Home() {
  return (
    <Layout>
      <HeaderContainer />
      <GroupDescriptionContainer />
      <PortfolioListContainer />
      <MemberListContainer />
      <SnsListContainer />
      <FooterContainer />
    </Layout>
  );
}
