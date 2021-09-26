import { ArticleState } from "@/store/types";
import { SELECTED_CATEGORIES_NUMBER, SELECTED_WORDS_NUMBER } from "@/config";
import { Article } from "@/domain/Article";

export const mockArticle: Article = {
  title: "岡山県道193号美袋停車場線",
  topic: {
    title: "概要",
    content: "",
    items: [
      {
        title: "路線データ",
        content:
          "起点：岡山県総社市美袋（美袋駅）\n終点：岡山県総社市美袋（国道180号交点）\n総延長：633m",
      },
    ],
  },
  contents: [
    {
      title: "概要",
      content: "",
      items: [
        {
          title: "路線データ",
          content:
            "起点：岡山県総社市美袋（美袋駅）\n終点：岡山県総社市美袋（国道180号交点）\n総延長：633m",
        },
      ],
    },
    {
      title: "地理",
      content: "",
      items: [
        { title: "通過する自治体", content: "岡山県\n総社市" },
        { title: "接続道路", content: "国道180号（総社市）" },
        { title: "周辺", content: "高梁川" },
      ],
    },
    { title: "関連項目", content: "岡山県の県道一覧" },
  ],
  categories: ["岡山県道", "道路関連のスタブ項目"],
  words: [
    "1864年",
    "1986年",
    "2001年",
    "2002年",
    "インド洋",
    "カツオクジラ",
    "クジラ目",
    "クロミンククジラ",
    "ザトウクジラ",
    "シロナガスクジラ",
    "ツノシマクジラ",
    "ナガスクジラ",
    "ニタリクジラ",
    "ヒゲクジラ亜目",
    "ミンククジラ",
    "メートル",
    "中新世",
    "分類群",
    "動物",
    "哺乳類",
    "地質時代",
    "大西洋",
    "大隅清治",
    "太平洋",
    "学名",
    "完新世",
    "小学館",
    "属 (分類学)",
    "平凡社",
    "現代",
    "生物の分類",
    "甲殻類",
    "界 (分類学)",
    "畝",
    "科 (分類学)",
    "絶滅",
    "綱 (分類学)",
    "胎生",
    "脊椎動物",
    "脊索動物",
    "門 (分類学)",
    "鯨偶蹄目",
  ],
  image:
    "https://upload.wikimedia.org/wikipedia/commons/7/7f/Autoroute_icone.svg",
  url: "https://ja.wikipedia.org/wiki/%E5%B2%A1%E5%B1%B1%E7%9C%8C%E9%81%93193%E5%8F%B7%E7%BE%8E%E8%A2%8B%E5%81%9C%E8%BB%8A%E5%A0%B4%E7%B7%9A",
};

export const articleState: ArticleState = {
  article: mockArticle,
  searchResult: "",
  selectedCategoriesNumber: SELECTED_CATEGORIES_NUMBER,
  selectedCategories: [],
  selectedWordsNumber: SELECTED_WORDS_NUMBER,
  selectedWords: [],
  isLoading: false,
};

export const loadingState: ArticleState = {
  article: mockArticle,
  searchResult: "",
  selectedCategoriesNumber: SELECTED_CATEGORIES_NUMBER,
  selectedCategories: [],
  selectedWordsNumber: SELECTED_WORDS_NUMBER,
  selectedWords: [],
  isLoading: true,
};
