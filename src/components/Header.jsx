import { Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
	return (
		<Container fixed sx={{ padding: "40px" }}>
			<Typography variant="h4" align="center">
				iTunes Albums
			</Typography>
			<Typography align="center">
				Search your favorites Albuns directly from iTunes
			</Typography>
		</Container>
	);
};

export default Header;
