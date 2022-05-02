import { types } from "../types/types";


// ACCIONES PARA EL MANEJO DEL ESTADO DE LA UI


// pone la variable isLoading en true cuando se esten cargando datos
export const startLoading = () => ({
	type: types.uiStartLoading,
});

// pone la variable isLoading en false cuando la carga termina
export const finishLoading = () => ({
	type: types.uiFinishLoading,
});

// maneja el cambio de vista a grilla
export const gridView = () => ({
	type: types.uiGridView,
});

// maneja el cambio de vista a lista
export const listView = () => ({
	type: types.uiListView,
});
