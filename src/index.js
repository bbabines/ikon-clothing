import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./components/contexts/user.context";
import { CategoriesProvider } from "./components/contexts/categories.context";
import { CartProvider } from "./components/contexts/cart.context";
import "./index.scss";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<CategoriesProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</CategoriesProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
