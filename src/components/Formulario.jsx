import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormSchema from "./FormSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPen,
  faVenusMars,
  faEnvelope,
  faPhone,
  faLocationDot,
  faEarthAmericas,
  faCity,
  faTextWidth,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'



const Formulario = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          paterno: "",
          materno: "",
          genero: "",
          correo: "",
          telefono: "",
          direccion: "",
          codigopostal: "",
          estado: "",
          ciudad: "",
          ine: "",
          comprobantedomi: "",
          talondenomina: "",
        }}
        // validate={(valores) => {
        //   <Errores valores={valores}/>
        // }}
        validationSchema={FormSchema}
        onSubmit={async (valores, { resetForm }) => {
          let response = await fetch("https://my-json-server.typicode.com/BrianLopezM99/jsonserverFAKE/datos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(valores),
          });
          let result = await response.json();
          console.log(result.message);

          resetForm();
          setFormularioEnviado(true);
          console.log(valores);
          console.log("Form enviado");
          setTimeout(() => {
            setFormularioEnviado(false);
          }, 3000);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El formulario ha sido guardado exitosamente',
            showConfirmButton: false,
            timer: 2000
          })
        }}
      >
        {({ errors }) => (
          <div className="md:w-1/2 lg:w-2/5 mx-auto ">
            <h2 className="font-black text-3xl text-center text-indigo-800">
              Formulario
            </h2>
            <br />
            <Form className="bg-white shadow-lg shadow-indigo-500/40 mb-5 rounded-lg py-10 px-5 inline-grid grid-cols-2 gap-3">
              <h2 className="font-black text-3xl text-center text-indigo-500">
                Datos personales
              </h2>
              <br />
              <div className="mb-5">
                <label
                  htmlFor="nombre"
                  className="block text-gray-700 uppercase font-bold"
                >
                  {" "}
                  <FontAwesomeIcon icon={faUser} /> Nombre
                </label>
                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="nombre"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.nombre}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="paterno"
                  className="block text-gray-700 uppercase font-bold"
                >
                  <FontAwesomeIcon icon={faTextWidth} /> Apellido Paterno
                </label>
                <Field
                  type="text"
                  id="paterno"
                  name="paterno"
                  placeholder="paterno"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="paterno"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.paterno}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="materno"
                  className="block text-gray-700 uppercase font-bold"
                >
                  <FontAwesomeIcon icon={faTextWidth} /> Apellido Materno
                </label>
                <Field
                  type="text"
                  id="materno"
                  name="materno"
                  placeholder="materno"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="materno"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.materno}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="materno"
                  className="block text-gray-700 uppercase font-bold"
                >
                  <FontAwesomeIcon icon={faVenusMars} /> Genero
                </label>
                <Field
                  as="select"
                  id="genero"
                  name="genero"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                >
                  <option value="">--Seleccionar--</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </Field>
                <ErrorMessage
                  name="genero"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.genero}
                    </div>
                  )}
                />
              </div>
              <h2 className="font-black text-3xl text-center text-indigo-500">
                Datos de contacto
              </h2>{" "}
              <br />
              <div className="mb-5">
                <label
                  htmlFor="correo"
                  className="block text-gray-700 uppercase font-bold"
                >
                  <FontAwesomeIcon icon={faEnvelope} /> Correo
                </label>
                <Field
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="correo@correo.com"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="correo"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.correo}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="telefono"
                  className="block text-gray-700 uppercase font-bold"
                >
                  <FontAwesomeIcon icon={faPhone} /> Telefono
                </label>
                <Field
                  type="text"
                  id="telefono"
                  name="telefono"
                  placeholder="Telefono"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="telefono"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.telefono}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="direccion"
                  className="block text-gray-700 uppercase font-bold"
                >
                  {" "}
                  <FontAwesomeIcon icon={faLocationDot} /> Direccion
                </label>
                <Field
                  type="text"
                  id="direccion"
                  name="direccion"
                  placeholder="Direccion"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="direccion"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.direccion}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="codigopostal"
                  className="block text-gray-700 uppercase font-bold"
                >
                  <FontAwesomeIcon icon={faPen} /> Codigo Postal
                </label>
                <Field
                  type="text"
                  id="codigopostal"
                  name="codigopostal"
                  placeholder="Codigo Postal"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="codigopostal"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.codigopostal}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="estado"
                  className="block text-gray-700 uppercase font-bold"
                >
                  <FontAwesomeIcon icon={faEarthAmericas} /> Estado
                </label>
                <Field
                  type="text"
                  id="estado"
                  name="estado"
                  placeholder="Estado"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="estado"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.estado}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="ciudad"
                  className="block text-gray-700 uppercase font-bold"
                >
                  <FontAwesomeIcon icon={faCity} /> Ciudad
                </label>
                <Field
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  placeholder="Ciudad"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="ciudad"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.ciudad}
                    </div>
                  )}
                />
              </div>
              <h2 className="font-black text-3xl text-center text-indigo-500">
                Subir archivos
              </h2>
              <br />
              <div className="mb-5">
                <label
                  htmlFor="ine"
                  className="block text-gray-700 uppercase font-bold"
                >
                  <FontAwesomeIcon icon={faUpload} /> INE
                </label>
                <Field
                  type="file"
                  id="ine"
                  name="ine"
                  placeholder="INE"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="ine"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.ine}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="comprobantedomi"
                  className="block text-gray-700 uppercase font-bold"
                >
                  <FontAwesomeIcon icon={faUpload} /> Comprobante de domicilio
                
                </label>
                <Field
                  type="file"
                  id="comprobantedomi"
                  name="comprobantedomi"
                  placeholder="Comprobante domicilio"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="comprobantedomi"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.comprobantedomi}
                    </div>
                  )}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="talondenomina"
                  className="block text-gray-700 uppercase font-bold"
                >
                  <FontAwesomeIcon icon={faUpload} /> Talon de Nomina 
                </label>
                <Field
                  type="file"
                  id="talondenomina"
                  name="talondenomina"
                  placeholder="Nomina aqui"
                  className="rounded-md border-2 w-full p-2 mt-2 placeholder-gray-400"
                />
                <ErrorMessage
                  name="talondenomina"
                  component={() => (
                    <div className="text-red-500 text-center p-3 uppercase font-bold mb-3">
                      {errors.talondenomina}
                    </div>
                  )}
                />
              </div> <br />
              <button
                type="submit"
                className="bg-green-400 w-full
           p-3 text-white uppercase font-bold 
           hover:bg-green-500 cursor-pointer transition-opacity
           shadow-lg shadow-cyan-500/50 col-span-2"
              >
                Enviar
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
