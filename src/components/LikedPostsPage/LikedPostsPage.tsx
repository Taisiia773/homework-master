import { useContext } from "react";
import { cartContext } from "../App";
export function LikedPages() {
    // тоже нужно использовать кастомный хук useLikedPostsContext
	const { cartItems } = useContext(cartContext);
	return (
		<div>
			{cartItems.map((cartItem) => {
				return (
					<div>
						<h1>{cartItem.title}</h1>
						<img src={cartItem.image} />
					</div>
				);
			})}
		</div>
	);
}