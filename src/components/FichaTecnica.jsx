import React from "react";

const FichaTecnica = ({ moto }) => {
  return (
    <div class="container relative my-5 mt-10 mx-auto md:px-6 xl:px-24 border border-gray-300 bg-slate-800 rounded-lg p-6">
      <div class="absolute inset-0 bg-opacity-10">
        <img
          src="/prueba.png"
          alt="Logo Financials"
          class="w-full h-full object-cover opacity-20"
        />
      </div>

      <h1 class="text-4xl text-center font-sans font-bold text-slate-800">.</h1>
      <div class="text-center">
        <img
          src={moto.imgMoto.textoImg}
          alt="Icono Ficha Técnica"
          class="mx-auto mb-5 w-1/4 "
        />
        <img
          src={moto.imgMoto.fichaImg}
          alt="Icono Ficha Técnica"
          class="mx-auto mb-2 w-1/2 h-full rounded-lg shadow-xl"
        />
      </div>
      <h1 class="text-4xl mt-10 text-center text-white font-noto font-bold">
        Ficha Técnica
      </h1>
      <div class="mt-5 text-md md:grid md:grid-cols-3 gap-4">
        <div>
          <h3 class="text-white font-bold mt-2 font-noto">
            Motor:
            <span class="font-semibold capitalize font-noto text-white-500">
              {moto.fichaTecnica.motor}
            </span>
          </h3>
          <hr />
        </div>
        <div>
          <h3 class="text-white mt-2 font-bold font-noto">
            Refrigeración:
            <span class="font-semibold capitalize font-noto text-white-500">
              {moto.fichaTecnica.refrigeracion}
            </span>
          </h3>
          <hr />
        </div>
        <div>
          <h3 class="text-white mt-2 font-bold font-noto">
            Alimentación:
            <span class="font-semibold font-noto text-white-500">
              {moto.fichaTecnica.alimentacion}
            </span>
          </h3>
          <hr />
        </div>
        <div>
          <h3 class="text-white mt-2 font-bold font-noto">
            Potencia Máx:
            <span class="font-semibold capitalize font-noto text-white-500">
              {moto.fichaTecnica.potenciaMax}
            </span>
          </h3>
          <hr />
        </div>
        <div>
          <h3 class="text-white mt-2 font-bold font-noto">
            Velocidad Máx:
            <span class="font-semibold font-noto capitalize text-white-500">
              {moto.fichaTecnica.velocidadMax}
            </span>
          </h3>
          <hr />
        </div>
        <div>
          <h3 class="text-white mt-2 font-bold font-noto">
            Arranque:
            <span class="font-semibold font-noto text-white-500">
              {moto.fichaTecnica.arranque}
            </span>
          </h3>
          <hr />
        </div>
        <div>
          <h3 class="text-white mt-2 font-bold font-noto">
            Transmisión:
            <span class="font-semibold font-noto capitalize text-white-500">
              {moto.fichaTecnica.transmision}
            </span>
          </h3>
          <hr />
          <h3 class="text-white mt-2 font-bold font-noto">
            Rodado delantero:
            <span class="font-semibold font-noto text-white-500">
              {moto.fichaTecnica.rodadoDelantero}
            </span>
          </h3>
          <hr />
          <h3 class="text-white mt-2 font-bold font-noto">
            Rodado trasero:
            <span class="font-semibold font-noto text-white-500">
              {moto.fichaTecnica.rodadoTrasero}
            </span>
          </h3>
          <hr />
          <h3 class="text-white mt-2 font-bold font-noto">
            Freno delantero:
            <span class="font-semibold font-noto text-white-500">
              {moto.fichaTecnica.rodadoDelantero}
            </span>
          </h3>
          <hr />
        </div>
        <div>
          <h3 class="text-white mt-2 font-bold font-noto">
            Peso:
            <span class="font-semibold capitalize font-noto text-white-500">
              {moto.fichaTecnica.peso}
            </span>
          </h3>
          <hr />
          <h3 class="text-white mt-2 font-bold font-noto">
            Ancho:
            <span class="font-semibold font-noto text-white-500">
              {moto.fichaTecnica.ancho}
            </span>
          </h3>
          <hr />
          <h3 class="text-white mt-2 font-bold font-noto">
            Alto:
            <span class="font-semibold font-noto text-white-500">
              {moto.fichaTecnica.alto}
            </span>
          </h3>
          <hr />
          <h3 class="text-white mt-2 font-bold font-noto">
            Alarma:
            <span class="font-semibold font-noto text-white-500">
              {moto.fichaTecnica.alarma}
            </span>
          </h3>
          <hr />
        </div>
        <div>
          <h3 class="text-white mt-2 font-bold font-noto">
            Freno Trasero:
            <span class="font-semibold font-noto text-white-500">
              {moto.fichaTecnica.frenoTrasero}
            </span>
          </h3>
          <hr />
          <h3 class="text-white mt-2 font-bold font-noto">
            Tanque:
            <span class="font-semibold font-noto text-white-500">
              {moto.fichaTecnica.tanque}
            </span>
          </h3>
          <hr />
          <h3 class="text-white mt-2 font-bold font-noto">
            Equipamientos:
            <span class="font-semibold font-noto text-white-500">
              {moto.fichaTecnica.equipamientos}
            </span>
          </h3>
          <hr />
        </div>
        <h1 class="text-4xl mt-12 text-center font-noto font-bold text-slate-800">
          .
        </h1>
      </div>
    </div>
  );
};

export default FichaTecnica;
