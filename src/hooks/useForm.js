import { useState } from "react";

// Custom hook para manejos de formularios
// Devuelve el valor del formulario, la funcion handleInputChange encargada de controlar los cambios
// en el formulario y la funcion reset encargada de reiniciar el formulario

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    };

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    return [values, handleInputChange, reset];
};
