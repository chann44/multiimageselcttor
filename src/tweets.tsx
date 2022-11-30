import { useState } from "react";
import { TweetComponet } from "./Tweet";
import { Tweet } from "./types";

const allTweets = (): Tweet[] => {
  return [
    {
      id: 1,
      data: {
        data: "idk",
      },
      img: "",
    },
    {
      id: 2,
      data: {
        data: "i dont care ",
      },
      img: "",
    },
  ];
};

export const Tweetsstate = () => {
  const [tweets, setTweets] = useState<Tweet[] | null>(allTweets);

  return (
    tweets && (
      <div>
        {tweets.map((tweet: Tweet) => {
          return (
            <TweetComponet key={tweet.id} twee={tweet} handler={setTweets} />
          );
        })}
      </div>
    )
  );
};
