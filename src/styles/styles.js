import { css } from "@emotion/react";

// En este archivo se encuentran estilos de diferentes componentes necesarios
// para mantener el diseño 100% responsive

export const paginationContainerStyle = {
	display: "flex",
	width: "100%",
	justifyContent: "center",
	margin: "35px 0",
};

// Album Card Styles

export const cardContainerGridView = {
	width: " 350px",
	height: "330px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
};

export const cardContainerListView = {
	width: "90vw",
	display: "flex",
	flexDirection: "column",
};

export const cardActionGridView = {
	display: "flex",
	flexDirection: "column",
	alignItems: "baseline",
};

export const cardActionListView = {
	display: "flex",
	justifyContent: "space-between",
};

export const imageStyle = {
	minWidth: "100px",
	maxWidth: "100px",
	width: "100px",
	margin: "11px",
	borderRadius: "10px",
	boxShadow: "0px 0px 5px #666",
};

export const cardImageContainer = {
	display: "flex",
	alignItems: "center",
};

// Album Details Styles

export const detailsContainerStyle = {
	display: "flex",
	flexDirection: "column",
	marginTop: "40px",
	height: "100vh",
};

export const imageContainer = {
	display: "flex",
	alignItems: "center",
};

export const detailsImageStyle = {
	boxShadow: "0px 0px 10px #666",
	alignSelf: "center",
	borderRadius: "10px",
	margin: "13px",
	width: "initial",
};

export const buttonContainer = {
	display: "flex",
	justifyContent: "space-between",
	padding: "10px 0",
};

// Loader

export const boxContent = {
	display: "flex",
	height: "50vh",
	alignItems: "center",
};

export const override = css`
	display: block;
	margin: 0 auto;
	border-color: #2196f3;
`;
