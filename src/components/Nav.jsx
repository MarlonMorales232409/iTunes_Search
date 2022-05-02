import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CalendarViewDayRoundedIcon from "@mui/icons-material/CalendarViewDayRounded";
import { Button, CssBaseline } from "@mui/material";
import { useDispatch } from "react-redux";
import { gridView, listView } from "../redux/actions/ui";
import { useEffect } from "react";
import { startLoadingAlbums } from "../redux/actions/albums";
import { useForm } from "../hooks/useForm";



export default function Nav() {

	const dispatch = useDispatch();

	// Custom Hook
	const [formValue, handleInputChange] = useForm({search: ""});
	const { search } = formValue;

	// Cargando datos cuando la pagina carga o cuando el usuario escribe algo 
	// la llamda a la api se realizara cada 1700ms despues de cada cambio
	// se despacha la accion correspondiente para ello [ver archivo actions.js] ubicado en el directorio de redux/actions 
	useEffect(() => {

		setTimeout(() => {
			dispatch(startLoadingAlbums(search));
		}, 1700);

	}, [dispatch, search]);

	// Manejadores para intercambiar de vista de grilla a vista de lista
	// ver acciones en redux/actions

	const handleGridView = () => {
		dispatch(gridView());
	};

	const handleListView = () => {
		dispatch(listView());
	};

	return (
		<>
			<CssBaseline />

			<Box sx={{ flexGrow: 1 }}>

				<AppBar position="static">

					<Toolbar>

						<ActionButtonsWrapper>

							<IconButton
								size="large"
								edge="end"
								aria-label="account of current user"
								aria-haspopup="true"
								onClick={handleGridView}
								color="inherit"
							>
								<GridViewRoundedIcon />
							</IconButton>

							<IconButton
								size="large"
								edge="end"
								aria-label="account of current user"
								//   aria-controls={menuId}
								aria-haspopup="true"
								onClick={handleListView}
								color="inherit"
							>
								<CalendarViewDayRoundedIcon />
							</IconButton>

						</ActionButtonsWrapper>

						<Search>

							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>

							<StyledInputBase
								placeholder="Enter artist name"
								inputProps={{ "aria-label": "search" }}
								onChange={handleInputChange}
								name="search"
								value={search}
								maxLength="10"
							/>

						</Search>

					</Toolbar>

				</AppBar>

			</Box>

		</>
	);
}

// Estilos de los componentes personalizados

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

const ActionButtonsWrapper = styled("div")(() => ({
	padding: "0px",
	paddingRight: "7px",
	display: "flex",
	flexWrap: "no-wrap",
	flex: 1,
}));

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));
