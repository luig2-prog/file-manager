import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { RiRadioButtonLine } from "react-icons/ri";

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);

  const onSubmit = async () => {
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await fetchData.json();
    setPosts(jsonData);
  };

  return (
    <div>
      <div className="grid grid-cols-12">
        {posts.map((post) => (
          <div className="bg-[#1266f1] m-2 text-white" key={post.id}>
            Title: <div>{post.title}</div>
          </div>
        ))}
      </div>
      <ButtonComponent text="Fetch Data" functionComponent={onSubmit}>
        <RiRadioButtonLine />
      </ButtonComponent>
    </div>
  );
};

export default PostsComponent;
