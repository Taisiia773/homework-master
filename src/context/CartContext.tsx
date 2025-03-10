import { createContext, ReactNode, useContext, useState } from "react";
import { IPost } from "../hooks/usePosts"

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

export function useLikedPostsContext(){
	return useContext(cartContext)
}

interface ICartContextProviderProps {
	children: ReactNode;
}

export function CartContextProvider(props: ICartContextProviderProps) {
    const { children } = props;

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

    return (
        <cartContext.Provider value={{cartItems: cartItems, addItem:addItem, removeItem: removeItem, isLiked: isLiked}}>{children}</cartContext.Provider>
	);

}