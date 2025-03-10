import { Link } from "react-router-dom"
import "./Header.css"

export function Header(){
    return (
        <div>
                <header>

                    <div className="searchBar">
                        <input type="text" placeholder="Search.." />
                    </div>

                    <Link to="/posts">
                    <button className="posts">
                        <p className="postsText">Posts</p>
                    </button> 
                    </Link>

                    <button className="SignIn">
                        <div className="SignInSection">
                            <p className="SignInText">Sign in</p>
                        </div>
                    </button>

                    <Link className="likedPages" to={"/liked"}>liked</Link>

                </header>      
                        
        </div>
    )
}