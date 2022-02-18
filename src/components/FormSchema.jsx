import * as Yup from "yup";
import { string } from "yup";

const FormSchema = Yup.object().shape({
  nombre: Yup.string().matches(/^[aA-zZ\s]+$/, "Solo se permiten letras y espacios en este campo")
    .min(2, "Muy corto")
    .max(30, "Muy largo")
    .required("El nombre es obligatorio"),
  paterno: Yup.string().matches(/^[aA-zZ\s]+$/, "Solo se permiten letras y espacios en este campo")
    .min(2, "Muy corto")
    .max(30, "Muy largo")
    .required("El apellido Paterno es obligatorio"),
  materno: Yup.string().matches(/^[aA-zZ\s]+$/, "Solo se permiten letras y espacios en este campo")
    .min(2, "Muy corto")
    .max(30, "Muy largo")
    .required("El apellido Materno es obligatorio"),
    genero: Yup.string().required('El campo es obligatorio'),
  telefono: Yup.string().matches(/^([0-9])*$/, "Solo se permiten numeros en este campo")
    .min(2, "Muy corto")
    .max(9999999999, "Muy largo")
    .required("El numero telefonico es obligatorio"),
  direccion: Yup.string()
    .min(2, "Muy corto")
    .max(50, "Muy largo")
    .required("Por favor ingrese una direccion"),
  codigopostal: Yup.string().matches(/^([0-9])*$/, "Solo se permiten numeros en este campo")
    .min(2, "Muy corto")
    .max(8, "Muy largo")
    .required("Por favor ingrese su codigo postal"),
  estado: Yup.string().matches(/^[aA-zZ\s]+$/, "Solo se permiten letras y espacios en este campo")
    .min(2, "Muy corto")
    .max(60, "Muy largo")
    .required("El estado es obligatorio"),
  ciudad: Yup.string().matches(/^[aA-zZ\s]+$/, "Solo se permiten letras y espacios en este campo")
    .min(2, "Muy corto")
    .max(60, "Muy largo")
    .required("La ciudad es obligatoria"),
  correo: Yup.string()
    .email("Email Invalido")
    .required("El correo es obligatorio"),
});

// const Errores = ({valores}) => {
//     console.log(valores)
//     let errores = {};

//     //validar nombre
//     if (!valores.nombre) {
//       errores.nombre = "Por favor ingresa un nombre";
//     } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
//       errores.nombre = "El nombre solo puede contener letras y espacios";
//     }

//     //validar apellido paterno
//     if (!valores.paterno) {
//       errores.paterno = "Ingrese un apellido valido";
//     } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.paterno)) {
//       errores.paterno =
//         "El apellido solo puede contener letras y espacios";
//     }

//     //validar apellido materno
//     if (!valores.materno) {
//       errores.materno = "Ingrese un apellido valido";
//     } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.materno)) {
//       errores.materno =
//         "El apellido solo puede contener letras y espacios";
//     }

//     //validar Correo
//     if (!valores.correo) {
//       errores.correo = "Por favor ingresa un correo valido";
//     } else if (
//       !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
//         valores.correo
//       )
//     ) {
//       errores.correo =
//         "El correo solo puede contener letras, numeros, puntos, guiones y gion bajo";
//     }
//     return errores;
// }

export default FormSchema;
