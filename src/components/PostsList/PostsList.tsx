import { Post } from "../Post/Post";
import { useState, useEffect } from "react";
import { usePosts } from "../../hooks/usePosts";
import { TailSpin } from "react-loader-spinner";
import "./PostList.css";

export function PostsList() {
  const { posts, loading, error } = usePosts();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((posts) => {
        return posts.category === selectedCategory;
      });
      setFilteredPosts(filtered);
    }
  }, [selectedCategory, posts]);
  return (
    <div className="posts-list">
      <select
        className="selectionMenu"
        onChange={(event) => {
          const selectedValue = event.target.value;
          setSelectedCategory(selectedValue);
        }}
      >
        <option className="optin-all" value="all">
          Все категории
        </option>
        <option value="skibidi">Скибиды</option>
        <option value="rizz">Ризз</option>
        <option value="biba">Биба</option>
        <option value="gigachad">Гигачад</option>
      </select>
      {loading === true ? (
        <div className="LoadRing">
          <TailSpin
            visible={true}
            height="100"
            width="100"
            color="grey"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : error !== "" ? (
        <div>{error}</div>
      ) : (
        <div className="PostsDiv">
          {filteredPosts.map((post) => {
            return (
              <Post
                title={post.title}
                description={post.description}
                img={post.image}
                author={post.author}
                id={post.id}
                key={post.id}
              ></Post>
            );
          })}
        </div>
      )}
    </div>
  );
}
