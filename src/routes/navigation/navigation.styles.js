import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	/* Glassmorphism base style */
	background: rgba(255, 255, 255, 0.25);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	@media screen and(max-width: 800px) {
		height: 60px;
		padding: 10px;
		margin-bottom: 10px;
	}
`;

export const NavTitle = styled(Link)`
	display: flex;
	align-items: center;
	flex-grow: 1;
	/* Toggle to center title */
	/* justify-content: flex-end; */
	margin-left: 10px;
	font: icon;
	font-size: 2em;
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

	@media screen and(max-width: 800px) {
		display: none;
	}
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 15px;

	@media screen and(max-width: 800px) {
		width: 50px;
		padding: 0;
	}
`;

export const NavLinks = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-shrink: 1;
	align-items: center;
	justify-content: flex-end;

	@media screen and(max-width: 800px) {
		width: 80%;
	}
`;

export const NavLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;
