import Layout from "./layout";
import SnsListContainer from "../components/top/organisms/SnsListContainer";
import MemberListContainer from "@/components/top/organisms/MemberListContainer";
import GroupDescriptionContainer from "@/components/top/organisms/GroupDescriptionContainer";
import PortfolioListContainer from "@/components/top/organisms/PortfolioListContainer";

export default function Home() {
  return (
    <Layout>
      <GroupDescriptionContainer />
      <PortfolioListContainer />
      <MemberListContainer />
      <SnsListContainer />
    </Layout>
  );
}
