import { useContext, useState } from "react";

import { CartContext } from "../../components/contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";
import Button from "../../components/Button/Button.component";

const Checkout = () => {
	const { cartItems, emptyCart, cartTotal } = useContext(CartContext);
	const [orderButton, setOrderButton] = useState("Submit Order");

	const checkOutHandler = () => {
		setOrderButton("Ordering...");
		setTimeout(() => {
			alert("Order Submitted!");
			emptyCart();
			setOrderButton("Submit Order");
		}, 2000);
	};

	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>

				<div className="header-block">
					<span>Description</span>
				</div>

				<div className="header-block">
					<span>Quantity</span>
				</div>

				<div className="header-block">
					<span>Price</span>
				</div>

				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => {
				return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
			})}
			<span className="total">Total: ${cartTotal}</span>

			<Button onClick={checkOutHandler} type="submit">
				{orderButton}
			</Button>
		</div>
	);
};

export default Checkout;
