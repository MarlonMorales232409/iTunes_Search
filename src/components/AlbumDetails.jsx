import React from "react";
import { useSelector } from "react-redux";
import { Button, CardMedia, Container, Divider, Link, Typography, } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { buttonContainer, detailsContainerStyle, detailsImageStyle, imageContainer, } from "../styles/styles";
import moment from "moment";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const AlbumDetails = () => {
	// Datos del estado Global 
	const { albums } = useSelector((state) => state.albums);
	const details = useSelector((state) => state.albums.details);

	// Hook useNavigate
	const navigate = useNavigate();

	// Si el usuario intenta entrar en esta ruta "/details" y no hay datos sera devuelto a "/"
	if (albums.length < 1) {
		return <Navigate to="/" />;
	}


	// Desestructurando los datos del estado global "details"
	const { artwork, artistName, name, gender, trackCount, release, country, price, album, } = details;

	// Uso de moment.js para manejar la fehca de liberacion del albun 
	const releaseDate = moment(release).format("dddd, MMMM Do YYYY");



	return (

		<Container
			maxWidth="sm"
			sx={detailsContainerStyle}
			className="animate__animated animate__fadeInDown"
		>
			<Box sx={imageContainer}>
				<CardMedia
					src={artwork}
					alt="artwork"
					component="img"
					sx={detailsImageStyle}
				/>
				<Typography variant="h4">{name}</Typography>
			</Box>
			<Divider variant="middle" sx={{ margin: "7px 0" }} />
			<Typography variant="h2">{artistName}</Typography>

			<Box>
				<Typography variant="body1">Gender: {gender}</Typography>

				<Divider variant="middle" sx={{ margin: "7px 0" }} />

				<Typography variant="body1">Tracks: {trackCount}</Typography>

				<Divider variant="middle" sx={{ margin: "7px 0" }} />

				<Typography variant="body1">Release: {releaseDate}</Typography>

				<Divider variant="middle" sx={{ margin: "7px 0" }} />

				<Typography variant="body1">Country: {country}</Typography>

				<Divider variant="middle" sx={{ margin: "7px 0" }} />

				<Typography variant="body1">${price}</Typography>
			</Box>

			<Divider variant="middle" sx={{ margin: "7px 0" }} />
			
			<Box sx={buttonContainer}>
				<Button color="primary" variant="contained" disableElevation>
					<Link
						sx={{ color: "#fff" }}
						href={album}
						underline="none"
						target={"_blank"}
					>
						iTunes
					</Link>
					<MusicNoteIcon />
				</Button>

				<Button
					variant="contained"
					disableElevation
					onClick={() => navigate("/")}
				>
					Back
					<ArrowBackIcon />
				</Button>
			</Box>
		</Container>
	);
};

export default AlbumDetails;
