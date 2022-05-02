import { Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<Container fixed sx={{ padding: "40px" }}>
			<Typography variant="h6" align="center">
				Marlon Morales
			</Typography>
			<Typography align="center">Technical Test for NPOW</Typography>
		</Container>
	);
};

export default Footer;
