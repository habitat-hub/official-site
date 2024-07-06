import Layout from "./layout";
import HeaderContainer from "../components/common/organisms/HeaderContainer";
import FooterContainer from "../components/common/atoms/FooterContainer";
import TopTemplate from "@/components/top/templates/TopTemplate";

export default function Home() {
  return (
    <Layout>
      <HeaderContainer />
      <TopTemplate />
      <FooterContainer />
    </Layout>
  );
}
