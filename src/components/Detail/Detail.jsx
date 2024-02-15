import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
// import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./cosa.css";
// import Thumb from "./Thumb.jsx";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const Detail = () => {
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
      const link = `https://api.whatsapp.com/send/?phone=541131908921&text=Hola%21+mi+nombre+es+${encodeURIComponent(
        formData.Nombre
      )}+soy+de+${encodeURIComponent(
        formData.Localidad
      )}+y+estoy+interesado+en+la+Rouser+NS200+me+gustaria+pagar+el+anticipo+con+${encodeURIComponent(
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
              BAJAJ
            </a>{" "}
            <span className="text-white">/</span>
            <span className="text-white"> Rouser NS200</span>
            <p className="text-xl mb-1 normal-case text-white font-noto">
              Entrega Asegurada
            </p>
          </div>
        </div>
        {/* <Thumb /> */}

        <section className="max-w-screen-sm 2xl:max-w-screen-md mx-auto">
          <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
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
                  src="/finan.png"
                  className="w-full h-full object-cover"
                  alt="Finan"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/slider2.png" alt="Nature 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/slider3.png" alt="Nature 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="slider4.png" alt="Nature 4" />
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
                <img src="/finan.png" alt="Nature 7" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/slider2.png" alt="Nature 8" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/slider3.png" alt="Nature 9" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/slider4.png" alt="Nature 10" />
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
              src="https://media.discordapp.net/attachments/1136484648344621087/1138541153667530812/descarga_1.png?width=499&height=676"
              className="h-10 mr-3"
              alt="Financials Logo"
            />
          </span>
          <div>
            <h1 className="text-2xl 2xl:text-3xl text-white uppercase  font-noto">
              solicitar <span className="font-bold">infórmacion</span>
            </h1>
          </div>
        </div>
        <h1 className="text-white font-noto font-bold text-3xl md:text-4xl 2xl:text-5xl">
          ROUSER NS200
        </h1>
        <h2 className="text-white font-noto font-semibold text-xl">
          2024 <span className="text-white">•</span> 0 km{" "}
        </h2>
        {/* <h3 className="text-white font-noto font-semibold text-xs">
          Vendido por:{" "}
          <span className="text-blue-800 font-extralight">BAJAJ</span>
        </h3> */}
        <h1 className="text-xl 2xl:text-3xl">
          <span className=" font-noto text-white font-semibold ">Precio: </span>
          <span className="bg-blue-400 border border-black font-extrabold p-1">
            $ 3.999.990{" "}
          </span>
          <del className=" text-white font-bold text-sn ml-2 font-noto">
            $4.200.000
          </del>
        </h1>

        <form className="max-w-lg xl:max-w-lg 2xl:max-w-2xl mt-10 md:mt-20">
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
      </div>
    </div>
  );
};

export default Detail;
