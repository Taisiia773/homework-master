import { useState, useEffect } from "react";

export interface IPost{
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  author: string;
  image: string;
  Comment: {
      id: number;
      title: string;
      content: string;
  }
}

export function usePosts() {
  // для типизации useState мы после названия хука пишем угловые скибички и в них указываем тип(интерфейс например) и пустой масив
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:7000/api/post/all");
        const result = await response.json();

        if (result.status === "ok"){
          setPosts(result.data);
        } else {
          setError(result.message);
        }
      } catch (error) {
        console.log(error);
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return { posts: posts, loading: loading, error: error };
}
