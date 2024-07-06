import PortfolioTemplate from "@/components/portfolio/organisms/ui/PortfolioTemplate";
import HeaderContainer from "@/components/common/organisms/HeaderContainer";
import FooterContainer from "@/components/common/atoms/FooterContainer";
import { constant } from "@/components/portfolio/constant";

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
