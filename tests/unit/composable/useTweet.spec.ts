import { useTweet } from "@/composable/useTweet";

describe("useTweet", () => {
  const tweet = useTweet();
  let linkFunction: (url: string) => void;
  beforeAll(() => {
    linkFunction = jest.fn();
  });

  test("問題に正解していた場合、正解時の文言を Tweet するページへ遷移させる", () => {
    const isCorrect = true;
    const title = "テストタイトル";
    const answer = "テストタイトル";

    tweet.tweetAnswer(title, answer, isCorrect, linkFunction);

    const text = `すごい！ あなたは"${title}"を当てました🤩`;
    expect(linkFunction).toHaveBeenCalledWith(
      `https://twitter.com/intent/tweet?text=${text}&url=https://www.quiz-wiki.com/`
    );
  });

  test("問題に間違っていた場合、不正解時の文言を Tweet するページへ遷移させる", () => {
    const isCorrect = false;
    const title = "テストタイトル";
    const answer = "ミスタイトル";

    tweet.tweetAnswer(title, answer, isCorrect, linkFunction);

    const text = `残念... あなたは"${title}"を"${answer}"と答えました...😭`;
    expect(linkFunction).toHaveBeenCalledWith(
      `https://twitter.com/intent/tweet?text=${text}&url=https://www.quiz-wiki.com/`
    );
  });
});
