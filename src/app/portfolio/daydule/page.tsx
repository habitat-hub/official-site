import PortfolioLayout from "@/app/components/portfolio/PortfolioLayout";

export default function DaydulePortfolio() {
  return (
    <PortfolioLayout
      mainVisualUrl="/daydule_home.png"
      title="Daydule"
      releaseDate="2023/09"
      siteUrl="https://daydule.habitat-hub.com/main"
      siteImageUrls={[
        "/daydule_site_1.png",
        "/daydule_site_2.png",
        "/daydule_site_3.png",
        "/daydule_site_4.png",
      ]}
      description={`Dayduleは、TODOや予定をもとに自動でスケジュールを作成してくれるサイトです。<br/>
      必要な作業はTODOと予定の登録、そしてスケジュールボタンを押すだけ！<br/>
      自分でスケジュール考えることが苦手な人や、時間がない人におすすめです。
      `}
    />
  );
}
