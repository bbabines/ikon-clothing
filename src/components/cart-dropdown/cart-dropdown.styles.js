import styled from "styled-components";

import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from "../Button/button.styles";

export const CartDropDownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	/* Changed padding from 20px to 10px d/t overflow */
	padding: 10px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
		margin-top: auto;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;
