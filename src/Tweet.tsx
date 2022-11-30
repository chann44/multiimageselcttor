import { Dispatch, SetStateAction, useState } from "react";
import { Tweet } from "./types";

interface Props {
  twee: Tweet;
  handler: Dispatch<SetStateAction<Tweet[] | null>>;
}

export const TweetComponet = ({ twee, handler }: Props) => {
  console.log(twee);
  const { data, id, img } = twee;
  const [file, setFile] = useState<string>("");

  function handleChange(e: any) {
    handler((prev) => {
      let newArray: any;
      newArray = prev?.map((t) => {
        if (t.id == id) {
          return {
            ...t,
            img: URL.createObjectURL(e.target.files[0]),
          };
        }else {
            return t
        }
      });
      return newArray;
    });
  }
  return (
    <div>
      <p>{data.data}</p>
      <input id={id.toString()} type="file" onChange={handleChange} />
      <img src={img} alt="" />
    </div>
  );
};
