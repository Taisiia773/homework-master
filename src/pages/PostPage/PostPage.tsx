import { useParams } from "react-router-dom";
import { usePostById} from "../../hooks/usePostById";
import { useLikedPostsContext } from "../../context/CartContext";
import classNames from "classnames";

export function PostPage() {
    const { id } = useParams<{ id: string }>();
    const postId = Number(id);
    // error и loading также нужно вытягивать +
    const{post, error, loading} = usePostById(postId)
    // Использовать надо не useContext, а сделать кастомный хук useLikedPostContext, чтобы не импортировать все не нужное +
    // а почему он cart называется вообще отдельный вопрос / это чтобы мой код никто взломать не смог (никто не поймёт что тут написано) ;)
    const { addItem, removeItem, isLiked } = useLikedPostsContext();
    // В данном случае возможно, что это не лоадинг, а еррор. Обрабатывать нужно иначе +
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!post) return <div>Post not found</div>;
    return (
        <div className="post-div">
            <h1 className="title">{post.title}</h1>
            <div className="image-div">
                <img className="image" src={post.image} alt={post.title} />
            </div>
            <p className="description">{post.description}</p>
            <p className="author">Author: {post.author}</p>
            {/* product? / p-безопастность */}
            {/* при клике на лайкнутый пост, его нужно удалить из лайкнутых + */}
            <div className="product-buttons">
                <button
                    className={classNames("product-button", { liked: isLiked(post.id) })}
                    onClick={() => {
                        isLiked(post.id) ? removeItem(post.id) : addItem(post);
                    }}
                >
                    {isLiked(post.id) ? "Unlike" : "Like"}
                </button>
            </div>
      </div>
    );
}




