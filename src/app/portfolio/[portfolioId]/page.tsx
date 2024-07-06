import PortfolioTemplate from "@/components/portfolio/organisms/ui/PortfolioTemplate";
import { constant } from "../constant";

export const runtime = "edge";
export default function Portfolio({
  params,
}: {
  params: { portfolioId: string };
}) {
  const portfolioContent = constant[params.portfolioId];

  if (!portfolioContent) {
    return <div>Not Found</div>;
  }

  return (
    <PortfolioTemplate
      mainVisualUrl={portfolioContent.mainVisualUrl}
      title={portfolioContent.title}
      releaseDate={portfolioContent.releaseDate}
      siteUrl={portfolioContent.siteUrl}
      enabledDevice={portfolioContent.enabledDevice}
      siteImageUrls={portfolioContent.siteImageUrls}
      description={portfolioContent.description}
    />
  );
}
