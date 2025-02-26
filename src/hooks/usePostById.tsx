import { useState, useEffect } from "react"
import { IPost } from "./usePosts";



export function usePostById(id: number | undefined) {
    const [post, setPost] = useState<IPost>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) {
            return;
        }

        async function fetchPost() {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:7000/api/post/${id}`);
                const result = await response.json();

                if (result.status === "ok") {
                    setPost(result.data);
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

        fetchPost();
    }, [id]);

    return { post, loading, error };
}