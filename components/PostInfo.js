import Heading from "./Heading";

const PostInfo = ({ posts }) => {
  const { title, body } = posts || {};

  if (!posts) {
    return <Heading text="Empty Info..." />;
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
