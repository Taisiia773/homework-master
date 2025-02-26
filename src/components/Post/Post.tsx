import { useState } from "react"
import {Link} from "react-router-dom"
import "./Post.css"


interface IPostProps{
    title : string,
    description : string,
    img : string,
    author: string,
    id: number,
}

export function Post(props: IPostProps){
    const [likes, setLikes] = useState(999)
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    function addLike(){
        setLikes(likes + 1)
        setIsLiked(true)
        setIsDisliked(false)
    }
    function removeLike(){
        setLikes(likes - 1)
        setIsDisliked(true)
        setIsLiked(false)
    }

    return(
        <div className="post-div">
            <Link to={`/post/${props.id}`}>
                <h1 className="title">{props.title}</h1>
                <div className="image-div">
                    <img className="image" src={props.img}/>
                </div>
                <p className="description">{props.description}</p>
                <p className="author">Author: {props.author}</p>
                <div className="likes-div">
                    <svg className="svg" width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.11474 1.18288L7.49921 1.79976L6.88174 1.18232C5.30748 -0.391982 2.75502 -0.391982 1.18073 1.18232C-0.393576 2.75662 -0.393576 5.30906 1.18073 6.88339L7.10224 12.8049C7.32191 13.0245 7.67809 13.0245 7.89776 12.8049L13.8238 6.88226C15.3946 5.30276 15.3973 2.75746 13.8228 1.18288C12.2456 -0.394292 9.69191 -0.394292 8.11474 1.18288Z" fill="#FFA6A6"/>
                    </svg>

                    <span className="likes">
                        {likes}
                    </span>
                </div>
            </Link>
                <button className="button1" onClick={removeLike} disabled={isDisliked}>
                    -
                </button>
                <button className="button2" onClick={addLike} disabled={isLiked}>
                    +
                </button>
        </div>
    )
}