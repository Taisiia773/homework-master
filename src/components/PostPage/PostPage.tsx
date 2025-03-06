import { useParams } from "react-router-dom";
import { usePostById} from "../../hooks/usePostById";
import { cartContext } from "../App";
import { useContext } from "react"


export function PostPage() {
    const { id } = useParams<{ id: string }>();
    const postId = Number(id);
    // error и loading также нужно вытягивать
    const{post} = usePostById(postId)
    // Использовать надо не useContext, а сделать кастомный хук useLikedPostContext, чтобы не импортировать все не нужное
    // а почему он cart называется вообще отдельный вопрос
    const {addItem} = useContext(cartContext)

    // В данном случае возможно, что это не лоадинг, а еррор. Обрабатывать нужно иначе
    if (!post) return <div>Loading...</div>;
    return (
      <div className="post-div">
          <h1 className="title">{post.title}</h1>
          <div className="image-div">
              <img className="image" src={post.image}/>
          </div>
          <p className="description">{post.description}</p>
          <p className="author">Author: {post.author}</p>
          {/* product? */}
          {/* при клике на лайкнутый пост, его нужно удалить из лайкнутых */}
          <div className="product-buttons">
                <button className="product-button" onClick={() => {
                    if (post) {
                        addItem(post)
                    }
                }}>in liked</button>
            </div>
      </div>
    );
}
