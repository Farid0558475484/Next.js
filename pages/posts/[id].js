import PostInfo from "@/components/PostInfo";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((posts) => {
    return {
      params: { id: posts.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts: data },
  };
};

const Post = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <PostInfo posts={posts} />
    </>
  );
};

export default Post;
