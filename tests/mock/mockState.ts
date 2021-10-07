import { QuestionState } from "@/store/types";
import { Question } from "@/types/Question";

export const mockQuestion: Question = {
  title: "岡山県道193号美袋停車場線",
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
  ],
  image:
    "https://upload.wikimedia.org/wikipedia/commons/7/7f/Autoroute_icone.svg",
  url: "https://ja.wikipedia.org/wiki/%E5%B2%A1%E5%B1%B1%E7%9C%8C%E9%81%93193%E5%8F%B7%E7%BE%8E%E8%A2%8B%E5%81%9C%E8%BB%8A%E5%A0%B4%E7%B7%9A",
};

export const questionState: QuestionState = {
  question: mockQuestion,
  searchResult: false,
  isLoading: false,
};

export const loadingState: QuestionState = {
  question: mockQuestion,
  searchResult: false,
  isLoading: true,
};
