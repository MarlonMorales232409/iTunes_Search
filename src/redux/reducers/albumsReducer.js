import { types } from "../types/types";

// Reducer que se encarga de manejar la respuesta de la Api
// albums []: se almacena la respuesta
// details {}: almacena los datos del album que se desea ver los detalles

const initialState = {
	albums: [],
	details: {},
};

export const albumsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.setAlbums:
			return {
				...state,
				albums: [...action.payload],
			};

		case types.setDetails:
			return {
				...state,
				details: { ...action.payload },
			};

		default:
			return state;
	}
};
