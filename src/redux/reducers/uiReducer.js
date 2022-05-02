import { types } from "../types/types";

// Reducer que se encarga de manejar todo lo referente a la UI

const initialState = {
	isLoading: false,
	isList: false,
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.uiStartLoading:
			return { ...state, isLoading: true };

		case types.uiFinishLoading:
			return { ...state, isLoading: false };

		case types.uiGridView:
			return { ...state, isList: false };

		case types.uiListView:
			return { ...state, isList: true };

		default:
			return state;
	}
};
