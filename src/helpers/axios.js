import axios from "axios";

// Helper para usar Axios
// Si el parametro search esta vacio se hara la busqueda por defecto de los albunes de David Guetta
// David Guetta por que es uno de mis artistas favoritos
// En caso de no devolver ningun dato o de existir algun error se devolvera un array vacio

export const apiCall = async (search) => {
	if (search) {
		search.replace(/ /g, "+");
	}

	const baseUrl = `https://itunes.apple.com/search?term=${
		search ? search : "David+Guetta"
	}&entity=album&limit=60`;

	const data = axios(baseUrl)
		.then((data) => data)
		.catch(() => []);
	return data;
};
