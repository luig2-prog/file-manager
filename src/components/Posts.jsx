import { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { RiRadioButtonLine } from "react-icons/ri";

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("🚀 ~ file: Posts.jsx:7 ~ PostsComponent ~ posts:", posts);
  }, [posts]);
  const onSubmit = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await fetchData.json();
    console.log("🚀 ~ file: Posts.jsx:11 ~ onSubmit ~ jsonData:", jsonData);
    setPosts(jsonData);
  };

  return (
    <div>
      {posts.map((post) => {
        <div key={post.id}>
          Title: <div>{post.title}</div>
        </div>;
      })}
      <ButtonComponent text="Fetch Data" functionComponent={onSubmit}>
        <RiRadioButtonLine />
      </ButtonComponent>
    </div>
  );
};

export default PostsComponent;
