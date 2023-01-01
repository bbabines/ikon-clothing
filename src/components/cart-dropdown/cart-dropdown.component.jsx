import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/cart.context";

import Button from "../Button/Button.component";
import CartItem from "../cart-item/cart-icon.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	const navigate = useNavigate();

	const goToCheckOutHandler = () => {
		navigate("/checkout");
	};

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem key={item.id} CartItem={item} />
				))}
			</div>
			<Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
