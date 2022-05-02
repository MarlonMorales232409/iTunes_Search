import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startLoadDetails } from "../redux/actions/albums.js";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import { cardContainerGridView, cardContainerListView, cardActionGridView, cardImageContainer, imageStyle, cardActionListView, } from "../styles/styles.js";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const AlbumCard = (Props) => {
	// Datos provenientes de las Props 
	const { name, artwork, price, album, gender, trackCount, artist } = Props;

	// Datos del estado global
	const { isList } = useSelector((state) => state.ui);

	// Hooks useNavigates y useDispatch
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// Funcion manejadora que redirecciona a la pagina de detalles de un album "/details"
	// Los datos que maneja el componenete AlbumDetails.jsx se pasan como Props
	const handleDetails = () => {
		dispatch(startLoadDetails(Props));
		navigate("/details");
	};

	return (
		<Grid item className="animate__animated animate__fadeIn">
			<Card sx={isList ? cardContainerListView : cardContainerGridView}>
				<CardActionArea
					sx={isList ? cardActionListView : cardActionGridView}
					onClick={handleDetails}
				>
					<Box sx={cardImageContainer}>
						<CardMedia
							component="img"
							image={artwork}
							alt="album"
							sx={imageStyle}
						/>
						<Typography gutterBottom variant="h5" component="div">
							{name.slice(0, 30)}
						</Typography>
					</Box>

					<CardContent>
						<Typography
							gutterBottom
							variant="body1"
							component="div"
							align={isList ? "right" : "left"}
						>
							{artist}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							align={isList ? "right" : "left"}
						>
							{gender}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							align={isList ? "right" : "left"}
						>
							${price}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							align={isList ? "right" : "left"}
						>
							Tracks: {trackCount}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						color="primary"
						variant="contained"
						disableElevation
					>
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
				</CardActions>
			</Card>
		</Grid>
	);
};

export default AlbumCard;
