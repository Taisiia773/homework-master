import { useState, useEffect } from "react"

interface IComment {
    title: string;
    id: number;
    content: string | null;
}

export function useCategories(){
    const [comments, setComments] = useState<IComment[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchcomments(){
            try {
                setLoading(true)
                const response = await fetch("http://localhost:7000/api/comment/all")
                const result = await response.json()

                if (result.status === "ok") {
                    setComments(result.data)
                } else {
                    setError(result.message)
                }
            } catch(error){
                if (error instanceof Error) {
                    setError(error.message)
                }
                console.log(error)

            } finally {
                setLoading(false)
            }
        }
        fetchcomments()
        
    }, [])
    return {comments: comments, loading: loading, error: error}
}