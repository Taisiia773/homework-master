import { useLikedPostsContext } from "../../context/CartContext";
export function LikedPages() {
    // тоже нужно использовать кастомный хук useLikedPostsContext +
	const { cartItems } = useLikedPostsContext();

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