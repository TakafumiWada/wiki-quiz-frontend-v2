import { Article } from "@/domain/Article";
import { client } from "./client";

export const articleApi = {
  getArticle: (): Promise<Article> => {
    return client()
      .get<Article>("/article/get")
      .then((res) => res.data);
  },
  searchArticle: (text: string): Promise<string> => {
    return client()
      .get<string>("/article/search", { params: { text } })
      .then((res) => res.data);
  },
};
