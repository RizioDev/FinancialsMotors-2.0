import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./cosa.css";

const Detail = ({ moto }) => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleCheckboxChange = () => {
    setAcceptTerms(!acceptTerms);
  };
  const [whatsAppMessage, setWhatsAppMessage] = useState("");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [formData, setFormData] = useState({
    Nombre: "",
    Telefono: "",
    Localidad: "",
    Anticipo: "Financiado",
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

    console.log("Form Data:", formData.Nombre);

    const isFormValid =
      formData.Nombre && formData.Telefono && formData.Localidad;

    if (isFormValid) {
      const link = `https://api.whatsapp.com/send/?phone=541131042028&text=Hola%21+mi+nombre+es+${encodeURIComponent(
        formData.Nombre
      )}+soy+de+${encodeURIComponent(
        formData.Localidad
      )}+y+estoy+interesado+en+la+${
        moto.nombreMoto
      }+me+gustaria+pagar+el+anticipo+con+${encodeURIComponent(
        formData.Anticipo
      )}&type=phone_number&app_absent=0`;

      window.open(link, "_blank");
      setWhatsAppMessage("");
    } else {
      setWhatsAppMessage(
        "¡Debes completar el formulario para enviar por WhatsApp!"
      );
    }
  };
  return (
    <div id="comprar" className="flex flex-col md:flex-row bg-gray-900">
      <div className="md:w-1/2 md:ml-10">
        <div className="mt-5 ml-2 lg:ml-6 2xl:ml-16">
          <p className="inline-block font-noto bg-green-400 text-white rounded-full capitalize font-bold px-3 py-[-5px]">
            Disponible
          </p>

          <div className="text-xs mt-2 text-blue-600 mb-1 font-bold uppercase">
            <a href="/" className="hover:underline">
              Comprar nueva
            </a>{" "}
            <span>/</span>{" "}
            <a
              className="hover:underline"
              href="https://www.globalbajaj.com/argentina/castellano/productos/motorcycles/rouser/rouser-ns-200/general/"
            >
              {moto.empresa}
            </a>{" "}
            <span className="text-white">/</span>
            <span className="text-white"> {moto.nombreMoto}</span>
            <p className="text-xl mb-1 normal-case text-white font-noto">
              Entrega Asegurada
            </p>
          </div>
        </div>
        {/* <Thumb /> */}

        <section className="max-w-screen-sm 2xl:max-w-screen-md mx-auto cursor-pointer">
          <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#000",
                "--swiper-pagination-color": "#000",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img
                  src={moto.imgMoto.swiperUno}
                  className="w-full h-full object-cover"
                  alt="Swiper 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src={moto.imgMoto.swiperDos} alt="Swiper 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={moto.imgMoto.swiperTres} alt="Swiper 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={moto.imgMoto.swiperCuatro} alt="Swiper 4" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className="w-16 h-16 object-cover"
                  src={moto.imgMoto.swiperUno}
                  alt="swiperUnoSmall"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-16 h-16 object-cover"
                  src={moto.imgMoto.swiperDos}
                  alt="swiperDosSmall"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-16 h-16 object-cover"
                  src={moto.imgMoto.swiperTres}
                  alt="swiperTresSmall"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-16 h-16 object-cover"
                  src={moto.imgMoto.swiperCuatro}
                  alt="swiperCuatroSmall"
                />
              </SwiperSlide>
            </Swiper>
          </>
        </section>

        <div className="ml-1 mt-2 items-center justify-center">
          <div className="mt-5"></div>
        </div>
      </div>
      <div className="md:w-1/2 md:mt-28 md:ml-24">
        <div className="mb-6 flex items-center text-white underline">
          <span>
            <img
              src="/fnlogo.png"
              className="h-10 mr-3"
              alt="Financials Logo"
            />
          </span>
          <div>
            <h1 className="text-2xl 2xl:text-3xl text-white uppercase  font-noto">
              Solicitar <span className="font-bold">información</span>
            </h1>
          </div>
        </div>
        <div className="text-white font-noto items-start justify-start">
          <img className="w-64 mb-2 h-20" src={moto.imgMoto.textoImg} alt="" />
        </div>
        <h2 className="text-white font-noto font-semibold text-xl">
          2024 <span className="text-white">•</span> 0 km{" "}
        </h2>
        {/* <h3 className="text-white font-noto font-semibold text-xs">
          Vendido por:{" "}
          <span className="text-blue-800 font-extralight">BAJAJ</span>
        </h3> */}
        <h1 className="text-xl 2xl:text-3xl">
          <span className=" font-noto text-white font-semibold ">
            Reserva:{" "}
          </span>
          <span className="bg-blue-400 border border-black font-extrabold p-1">
            $ {moto.reserva}
          </span>
          <del className=" text-white font-bold text-sn ml-2 font-noto">
            $567,000
          </del>{" "}
          <br />
          <span className="text-base text-yellow-300 font-bold mt-2  flex items-center ">
            En efectivo 20% de descuento
          </span>
        </h1>

        <div className="card">
          <button className="socialContainer containerOne">
            <img className="w-16 h-10" src="/Bancos/visa.png" alt="" />
          </button>

          <button className="socialContainer containerTwo">
            <img className="w-16 h-8" src="/Bancos/master.png" alt="" />
          </button>

          <button className="socialContainer containerThree">
            <img className="w-15 h-9" src="/Bancos/naranjax.png" alt="" />
          </button>

          <button className="socialContainer containerFour">
            <img src="/Bancos/mp.png" alt="" />
          </button>

          <button className="socialContainer containerFour">
            <img
              src="https://brandemia.org/sites/default/files/inline/images/american_express_logo_wordmark_detail.png"
              alt=""
            />
          </button>
          <button className="socialContainer containerFour">
            <img src="/Bancos/santander.png" alt="" />
          </button>
        </div>
        <span className="text-base text-yellow-300 font-bold  flex items-center ">
          (Promoción válida hasta agotar stock)
        </span>

        <form className="max-w-lg xl:max-w-lg 2xl:max-w-2xl mt-10">
          <h1 className="text-white font-noto font-bold">Anticipo</h1>
          <div className="mb-1">
            <select
              id="Anticipo"
              name="Anticipo"
              required
              onChange={handleChange}
              value={formData.Anticipo}
              className="w-full px-4 py-3 font-semibold border border-gray-400 rounded-lg focus:outline-none focus:border-primary-300"
            >
              <option value="Financiado">Financiado</option>
              <option value="Auto usado">Auto usado</option>
              <option value="Efectivo">Efectivo</option>
            </select>
          </div>
          <div className="mb-1">
            <input
              type="text"
              id="Nombre"
              required
              name="Nombre"
              onChange={handleChange}
              value={formData.Nombre}
              placeholder="🙂 Nombre y apellido"
              className="w-full px-4 py-3 border border-gray-400 font-semibold  rounded-lg focus:outline-none focus:border-primary-300"
            />
          </div>
          <div className="mb-1">
            <input
              type="number"
              id="Telefono"
              required
              inputMode="numeric"
              minLength="9"
              onChange={handleChange}
              value={formData.Telefono}
              name="Telefono"
              pattern="[0-9]+" // Expresión regular para solo permitir números
              placeholder="📞 Teléfono Cód. (Área + Nro)"
              className="w-full px-4 py-3 font-semibold border border-gray-400 rounded-lg focus:outline-none focus:border-primary-300"
            />
          </div>
          <div className="mb-1">
            <input
              type="text"
              id="Localidad"
              required
              onChange={handleChange}
              value={formData.Localidad}
              name="Localidad"
              placeholder="📍 Localidad"
              className="w-full px-4 py-3 border font-semibold border-gray-400 rounded-lg focus:outline-none focus:border-primary-300"
            />
          </div>
          {/* <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="px-6 font-noto font-bold w-full py-3 text-lg text-white rounded-lg bg-orange-500 hover:bg-orange-400 focus:outline-none "
            >
              Realizar presupuesto
            </button>
          </div> */}
          <div className="flex items-center justify-end space-x-2">
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
        </form>
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
          <span className="ml-4 text-white">
            Acepto los{" "}
            <span className="text-blue-500 font-bold underline">
              <a href="/terminos-y-condiciones">Términos y Condiciones.</a>
            </span>
          </span>
        </p>
        <div className=" mt-2 flex ">
          <ul>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="font-semibold text-white font-noto text-base">
                Plan personalizado a tu medida.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="font-semibold text-white font-noto text-base">
                Financiación.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span className="font-semibold text-white font-noto text-base">
                Tomamos tu usado como parte de pago.
              </span>
            </li>
          </ul>
        </div>
        {/* <div className="card">
          <a href="#" className="socialContainer containerOne">
            <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
              {" "}
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>{" "}
            </svg>
          </a>

          <a href="#" className="socialContainer containerTwo">
            <svg className="socialSvg twitterSvg" viewBox="0 0 16 16">
              {" "}
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>{" "}
            </svg>{" "}
          </a>

          <a href="#" className="socialContainer containerThree">
            <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </a>

          <a href="#" className="socialContainer containerFour">
            <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
              {" "}
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>{" "}
            </svg>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Detail;
