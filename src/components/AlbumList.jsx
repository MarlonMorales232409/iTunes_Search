import React from "react";
import { Grid } from "@mui/material";
import AlbumCard from "./AlbumCard";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/system";
import { paginationContainerStyle } from "../styles/styles";
import { useSelector } from "react-redux";

const AlbumList = ({ albums, filteredAlbums, index, handleChange }) => {

	// Obteniendo datos del estado global 
	// Encargado de manejar la vista en grilla o en lista
	const { isList } = useSelector((state) => state.ui);

	return (
		<>
			{/* Paginacion */}
			<Box sx={paginationContainerStyle}>
				<Pagination
					count={parseInt(albums.length / 20)}
					page={index}
					onChange={handleChange}
					color="primary"
				/>
			</Box>
		{/* Respuesta de la API */}
		{/* En caso de no venir datos se mostrara el componente <h1>No Results</h1> */}
		{/* 
			Si los datos existen se llama a la funcion filteredAlbums() y se itera sobre la respuesta
			para realizar la paginacion
		*/}
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
				justifyContent="center"
				alignItems="center"
				direction={isList ? "column" : "row"}
			>
				{albums.length > 0 ? (
					filteredAlbums().map((album, i) => (
						<AlbumCard
							key={i}
							id={album.artistId}
							artist={album.artistName}
							name={album.collectionCensoredName}
							itunesUrl={album.artistViewUrl}
							artwork={album.artworkUrl100}
							price={album.collectionPrice}
							album={album.collectionViewUrl}
							copyRight={album.copyright}
							country={album.country}
							gender={album.primaryGenreName}
							release={album.releaseDate}
							trackCount={album.trackCount}
						/>
					))
				) : (
					<h1>No Results</h1>
				)}
			</Grid>
		</>
	);
};

export default AlbumList;
