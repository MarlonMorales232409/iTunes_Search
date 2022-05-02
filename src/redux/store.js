import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { uiReducer } from "./reducers/uiReducer";
import { albumsReducer } from "./reducers/albumsReducer";


// UI almacenara todo lo referente a cambios en la interfaz
// Albums almacenara la respuesta de la Api Albums[]

const reducers = combineReducers({
	ui: uiReducer,
	albums: albumsReducer,
});

export const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(thunk))
);
