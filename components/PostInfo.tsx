import { postType } from "../types";
import { FC } from "react";

type PostInfoProps = {
  posts: postType;
};

const PostInfo: FC<PostInfoProps> = ({ posts }) => {
  const { title, body } = posts || {};

  if (!posts) {
    return <h1>Empty Info...</h1>;
  }

  return (
    <>
      <div>
        <strong>Title:</strong>
        {title}
      </div>

      <div>
        <strong>Body:</strong>
        {body}
      </div>
    </>
  );
};
export default PostInfo;
