import { apiCall } from "../../helpers/axios";
import { types } from "../types/types";

// ACCIONES PARA EL MANEJO DEL ESTADO DE LOS ALBUNES

// Al ser llamada despacha los datos de la Api (albums) y el type al reducer albumsReducer 
export const setAlbums = (albums) => ({
	type: types.setAlbums,
	payload: albums,
});


// Se encarga de hacer la peticion a la Api mediante el Helper "axios"
export const startLoadingAlbums = (search) => {
	return async (dispatch) => {
		apiCall(search)
			.then((data) => {
				dispatch(setAlbums(data?.data.results));
			})
			.catch(() => []);
	};
};



// Al ser llamada despacha los datos del album que deseamos ver en detalle
export const startLoadDetails = (details) => ({
	type: types.setDetails,
	payload: { ...details },
});
