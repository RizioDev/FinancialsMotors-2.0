import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Wpp from "./Wpp.astro";
import "./finan.css";

const FinanciaFor = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAcceptTerms(!acceptTerms);
  };

  const [whatsAppMessage, setWhatsAppMessage] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    celular: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const whatsappSubmit = (e) => {
    e.preventDefault();

    const isFormValid = formData.nombre && formData.dni && formData.celular;

    if (isFormValid) {
      const link = `https://api.whatsapp.com/send/?phone=541131042028&text=Hola%21+mi+nombre+es+${encodeURIComponent(
        formData.nombre
      )}+mi+dni+es+${encodeURIComponent(
        formData.dni
      )}+y+estoy+interesado+en+la+Rouser+NS200+me+solicitar+un+plan+de+Financiación+&type=phone_number&app_absent=0`;

      window.open(link, "_blank");
      setWhatsAppMessage("");
    } else {
      setWhatsAppMessage(
        "¡Debes completar el formulario para enviar por WhatsApp!"
      );
    }
  };

  return (
    <section className="min-h-screen flex items-stretch text-white">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{ backgroundImage: "url(/financiaBg.jpg)" }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            Solicitá tu crédito Online
          </h1>
          <p className="text-xl my-4">Te ayudamos a cumplir tu sueño... 💙</p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <span>
            <a href="https://wa.me/541131042028?text=Hola+Financials+Motors+estoy+interesado+en+la+Rouser+NS200+me+gustaria+obtener+más+info">
              <svg
                fill="#ffffff"
                height="24"
                width="24"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 308 308"
                xmlSpace="preserve"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="XMLID_468_">
                    {" "}
                    <path
                      id="XMLID_469_"
                      d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"
                    ></path>
                    <path
                      id="XMLID_470_"
                      d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
          </span>

          <a href="https://www.instagram.com/financialsmotors/">
            <span>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
        <div
          className="absolute lg:hidden z-10 inse bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{ backgroundImage: "url(/financiaBg.jpg)" }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-2 z-20">
          <h1 className="font-bold font- flex text-xl lg:text-3xl text-sky-100">
            <div className="flex justify-center items-center">
              <span>
                <img
                  src="/fnlogo.png"
                  className="h-10 mr-3"
                  alt="Financials Logo"
                />
              </span>
            </div>{" "}
            Tené hoy tu prestamo
          </h1>
          <hr />
          <hr />
          <div className="py-6 space-x-2">
            <h1 className="font-semibold flex mb-3 text-2xl text-sky-100">
              Requisitos :
            </h1>
            <h3 className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
              </svg>
              Tener DNI
            </h3>
            <h3 className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
              </svg>
              Ser mayor de 21 años
            </h3>
            <h3 className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z"></path>
              </svg>
              Si sos extranjero DNI Permanente
            </h3>
          </div>
          <form action="" className="sm:w-full w-full px-7 lg:px-0">
            <div className="pb-2 pt-4">
              <input
                type="text"
                name="nombre" // Change to "nombre" instead of "Nombre"
                value={formData.nombre}
                onChange={handleChange}
                id="nombre"
                required
                placeholder="🙂 Nombre Completo"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                type="number"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                minLength="7"
                required
                id="dni"
                placeholder="💳 Número de DNI"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                type="number"
                name="celular"
                required
                onChange={handleChange}
                value={formData.celular}
                id="celular"
                pattern="[0-9]+"
                inputMode="numeric"
                minLength="9"
                placeholder="📲 Número de Celular"
                className="block w-full p-4 text-lg rounded-sm bg-black"
              />
            </div>

            <p className="flex mt-2 mb-2">
              <label>
                <span className="checkbox">
                  <input
                    title="Please tick"
                    name="accept_terms"
                    type="checkbox"
                    className="required"
                    id="js-accept-terms"
                    checked={acceptTerms}
                    onChange={handleCheckboxChange}
                  />
                </span>
              </label>
              <span className="ml-4">
                Acepto los{" "}
                <span className="text-blue-500 font-bold underline">
                  <a href="/terminos-y-condiciones">Términos y Condiciones.</a>
                </span>
              </span>
            </p>
            <div className="px-4 pb-2 pt-4">
              <button
                type="submit"
                onClick={whatsappSubmit}
                disabled={!acceptTerms}
                className="flex items-center font-bold justify-center px-6 w-full mt-1 py-3 text-lg font-noto text-white rounded-lg bg-green-600 hover:bg-green-500 focus:outline-none "
              >
                <FaWhatsapp size={20} className="mr-2" />
                <span className="text-center">Realizar presupuesto</span>
              </button>
            </div>
            {whatsAppMessage && (
              <p className="text-yellow-200 font-bold text-sm mt-1 font-noto">
                {whatsAppMessage}
              </p>
            )}

            <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden">
              <a href="">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinanciaFor;
