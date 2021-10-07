export const useTweet = () => {
  const tweetAnswer = (
    title: string,
    answer: string,
    isCorrect: boolean,
    linkFunction: (url: string) => void
  ) => {
    const text = isCorrect
      ? `すごい！ あなたは"${title}"を当てました🤩`
      : `残念... あなたは"${title}"を"${answer}"と答えました...😭`;
    const url = `https://twitter.com/intent/tweet?text=${text}&url=https://www.quiz-wiki.com/`;
    linkFunction(url);
  };

  return { tweetAnswer };
};
