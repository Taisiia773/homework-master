import { useParams } from "react-router-dom";
import { usePostById} from "../../hooks/usePostById";
import { cartContext } from "../App";
import { useContext } from "react"


export function PostPage() {
    const { id } = useParams<{ id: string }>();
    const postId = Number(id);
    const{post} = usePostById(postId)

    const {addItem} = useContext(cartContext)


    if (!post) return <div>Loading...</div>;
    return (
      <div className="post-div">
          <h1 className="title">{post.title}</h1>
          <div className="image-div">
              <img className="image" src={post.image}/>
          </div>
          <p className="description">{post.description}</p>
          <p className="author">Author: {post.author}</p>
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
