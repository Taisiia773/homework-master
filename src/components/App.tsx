import { PostsList } from "./PostsList/PostsList";
import { Layout } from "./Layout/Layout";
import  { PostPage }  from "./PostPage/PostPage";
import {IPost} from "../hooks/usePosts";
import { LikedPages } from "./LikedPostsPage/LikedPostsPage";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { createContext, useState } from "react";
// Импорт не используется, нужно убрать
import { title } from "process";
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";
// cart? и что с табуляциями случилось
interface ICartContext{
	cartItems : IPost[],
	addItem: (item: IPost) => void,
	removeItem: (id: number) => void,
  isLiked: (id: number) => boolean
}

const initialValue: ICartContext = {
  cartItems: [],
	addItem: (item: IPost) => {},
	removeItem: (id: number) => {},
  isLiked: (id: number) => {return false},
}

export const cartContext = createContext<ICartContext>(initialValue)

export function AppComponent() {

	const [cartItems, setCartItems] = useState<IPost[]>([])
	function addItem(item: IPost) {
		if (!isLiked(item.id)) {  
			setCartItems([...cartItems, item]);
		}
	}

	function removeItem(id: number){
		const tempArray = cartItems.filter((value) => {return value.id != id})
		setCartItems(tempArray)
	}

	function isLiked(id:number){
		return Boolean( cartItems.find(item => item.id === id))
	}


  return(
    <div>
      <cartContext.Provider value={{cartItems: cartItems, addItem:addItem, removeItem: removeItem, isLiked: isLiked}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route path="/posts" element={<PostsList></PostsList>}></Route>
                    <Route path = "/post/:id" element = {<PostPage></PostPage>}> </Route>
                    <Route path = "/liked" element = {<LikedPages></LikedPages>}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/registration" element={<Registration />}></Route>
                </Route>
            </Routes>
            </BrowserRouter>
      </cartContext.Provider>
    </div>
  )
}

