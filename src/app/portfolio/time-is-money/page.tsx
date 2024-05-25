import PortfolioTemplate from "@/app/components/portfolio/PortfolioTemplate";

export default function TimeIsMoneyPortfolio() {
  return (
    <PortfolioTemplate
      mainVisualUrl="/time-is-money_home.png"
      title="Time is Money"
      releaseDate="2024/03"
      siteUrl="https://time-is-money.habitat-hub.com/main"
      enabledDevice={["PC"]}
      siteImageUrls={["/time-is-money_site_1.png", "/time-is-money_site_2.png"]}
      description={`TimeIsMoneyは、自身の時間を金銭的な観点から捉えることができるサービスです。<br/>
      ユーザーは年収、月収、または時給を入力し、自身の稼働時間を記録します。
      その後、計算ボタンを押すことで、過ごした時間を金額に換算した結果が表示され、さらにその金額で購入できる商品の代表的な例を提示します。`}
    />
  );
}
