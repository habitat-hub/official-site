import { Portfolio } from "./organisms/ui/Portfolio";

export const constant: Record<string, Portfolio> = {
  daydule: {
    mainVisualUrl: "/portfolio/daydule/daydule_home.png",
    title: "Daydule",
    releaseDate: "2023/09,",
    siteUrl: "https://daydule.habitat-hub.com/main",
    enabledDevice: ["PC"],
    siteImageUrls: [
      "/portfolio/daydule/daydule_site_1.png",
      "/portfolio/daydule/daydule_site_2.png",
      "/portfolio/daydule/daydule_site_3.png",
      "/portfolio/daydule/daydule_site_4.png",
    ],
    description: `Dayduleは、TODOや予定をもとに自動でスケジュールを作成してくれるサイトです。<br/>
        必要な作業はTODOと予定の登録、そしてスケジュールボタンを押すだけ！<br/>
        自分でスケジュール考えることが苦手な人や、時間がない人におすすめです。
        `,
  },
  "time-is-money": {
    mainVisualUrl: "/portfolio/time-is-money/time-is-money_home.png",
    title: "Time is Money",
    releaseDate: "2024/03",
    siteUrl: "https://time-is-money.habitat-hub.com/main",
    enabledDevice: ["PC"],
    siteImageUrls: [
      "/portfolio/time-is-money/time-is-money_site_1.png",
      "/portfolio/time-is-money/time-is-money_site_2.png",
    ],
    description: `TimeIsMoneyは、自身の時間を金銭的な観点から捉えることができるサービスです。<br/>
    ユーザーは年収、月収、または時給を入力し、自身の稼働時間を記録します。
    その後、計算ボタンを押すことで、過ごした時間を金額に換算した結果が表示され、さらにその金額で購入できる商品の代表的な例を提示します。`,
  },
};
