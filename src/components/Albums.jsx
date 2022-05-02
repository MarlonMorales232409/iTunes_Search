import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingAlbums } from "../redux/actions/albums";
import { finishLoading, startLoading } from "../redux/actions/ui";
import AlbumList from "./AlbumList";
import Box from "@mui/material/Box";
import ClipLoader from "react-spinners/ClipLoader";
import { boxContent, override } from "../styles/styles";



const Albums = () => {
	// Estado local para manejar la paginacion
	const [currentPage, setCurrentPage] = useState(0);
	const [index, setIndex] = useState(1);

	// Obtener datos del estado global
	const { albums } = useSelector((state) => state.albums);
	const isLoading = useSelector((state) => state.ui.isLoading);

	// Hook useDispatch
	const dispatch = useDispatch();


	// Se cargan los datos de la Api cuando la pagina carga
	useEffect(() => {
		dispatch(startLoading());
		dispatch(startLoadingAlbums());
		dispatch(finishLoading());
	}, [dispatch]);

	// Funcion que divide el Array de datos en varios pedazos para hacer la paginacion
	const filteredAlbums = () => albums.slice(currentPage, currentPage + 20);

	// Funcion encargada de hacer la paginacion
	const handleChange = (event, value) => {
		setIndex(value);
		let selectPage = 20 * value;
		setCurrentPage(selectPage - 20);
	};

	return (
		<>
			{albums.length > 0 ? (
				<AlbumList
					albums={albums}
					filteredAlbums={filteredAlbums}
					index={index}
					handleChange={handleChange}
				/>
			) : (
				<Box sx={boxContent}>
					<ClipLoader loading={true} css={override} size={150} />
				</Box>
			)}
		</>
	);
};

export default Albums;
