import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button.component";
import CartItem from "../cart-item/cart-icon.component";

import {
	CartDropDownContainer,
	EmptyMessage,
	CartItems,
} from "./cart-dropdown.styles.js";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	const navigate = useNavigate();

	const goToCheckOutHandler = () => {
		navigate("/checkout");
	};

	return (
		<CartDropDownContainer>
			<CartItems>
				{cartItems.length > 0 ? (
					cartItems.map((item) => <CartItem key={item.id} CartItem={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
		</CartDropDownContainer>
	);
};

export default CartDropdown;
