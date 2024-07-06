import HeaderContainer from "@/components/common/organisms/HeaderContainer";
import FooterContainer from "@/components/common/organisms/FooterContainer";
import { constant } from "@/components/portfolio/constant";
import PortfolioTemplate from "@/components/portfolio/templates/PortfolioTemplate";

export const runtime = "edge";
export default function Portfolio({
  params,
}: {
  params: { portfolioId: string };
}) {
  const hasPortfolio = Object.keys(constant).includes(params.portfolioId);
  if (!hasPortfolio) {
    return <div>Not Found</div>;
  }

  return (
    <>
      <HeaderContainer />
      <PortfolioTemplate portfolioId={params.portfolioId} />
      <FooterContainer />
    </>
  );
}
