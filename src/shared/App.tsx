import { PostsList } from "./PostsList/PostsList";
import { Layout } from "./Layout/Layout";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { PostPage } from "../pages/PostPage/PostPage";
import { LikedPages } from "../pages/LikedPostsPage/LikedPostsPage";
import { Login } from "../pages/Login/Login";
import { Registration } from "../pages/Registration/Registration";
import { CartContextProvider } from "../context/CartContext";



export function AppComponent() {

  return(
    <div>
      <CartContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostsList></PostsList>}></Route>
                    <Route path = "/post/:id" element = {<PostPage></PostPage>}> </Route>
                    <Route path = "/liked" element = {<LikedPages></LikedPages>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/registration" element={<Registration/>}></Route>
                </Route>
            </Routes>
            </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

