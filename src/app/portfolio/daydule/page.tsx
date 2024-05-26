import PortfolioTemplate from "@/components/portfolio/PortfolioTemplate";

export default function DaydulePortfolio() {
  return (
    <PortfolioTemplate
      mainVisualUrl="/daydule_home.png"
      title="Daydule"
      releaseDate="2023/09"
      siteUrl="https://daydule.habitat-hub.com/main"
      enabledDevice={["PC"]}
      siteImageUrls={[
        "/portfolio/daydule/daydule_site_1.png",
        "/portfolio/daydule/daydule_site_2.png",
        "/portfolio/daydule/daydule_site_3.png",
        "/portfolio/daydule/daydule_site_4.png",
      ]}
      description={`Dayduleは、TODOや予定をもとに自動でスケジュールを作成してくれるサイトです。<br/>
      必要な作業はTODOと予定の登録、そしてスケジュールボタンを押すだけ！<br/>
      自分でスケジュール考えることが苦手な人や、時間がない人におすすめです。
      `}
    />
  );
}
