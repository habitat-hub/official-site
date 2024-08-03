export type QiitaPostResponse = {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: string | null;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stocks_count: number;
  tags: object[];
  title: string;
  updated_at: string;
  url: string;
  user: object[];
  page_views_count: number | null;
  team_membership: string | null;
  organization_url_name: string | null;
  slide: boolean;
};

export type ParsedQiitaPost = {
  id: string;
  likesCount: number;
  ogpImageUrl: string;
  url: string;
  title: string;
  createdAt: string;
};
