import React from "react";
import "./sidetoside.css";

const SideToSide = ({ moto }) => {
  return (
    <div>
      <section class="" id="sbs-1161">
        <div id="sobre-nosotros" class="cs-container">
          <div class="cs-image-group">
            <picture class="cs-picture cs-picture1">
              <source
                media="(max-width: 600px)"
                srcset={moto.imgMoto.promoImg2}
              />

              {/* <!--Tablet and above Image--> */}
              <source
                media="(min-width: 601px)"
                srcset={moto.imgMoto.promoImg2}
              />
              <img
                loading="lazy"
                decoding="async"
                alt="appliance"
                width="630"
                height="390"
              />
            </picture>
            <picture class="cs-picture cs-picture2">
              <source
                media="(max-width: 600px)"
                srcset={moto.imgMoto.promoImg}
              />
              <source
                media="(min-width: 601px)"
                srcset={moto.imgMoto.promoImg}
              />
              <img
                loading="lazy"
                decoding="async"
                src={moto.imgMoto.promoImg}
                alt="appliance"
                width="461"
                height="300"
              />
            </picture>
            <img
              class="cs-graphic cs-graphic1"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/splash-4.svg"
              alt="splash"
              width="1154"
              height="505"
              aria-hidden="true"
            />
            <img
              class="cs-graphic cs-graphic2"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/tire-mark.svg"
              alt="tire mark"
              width="1085"
              height="322"
              aria-hidden="true"
            />
            <div class="cs-box">
              <span class="cs-number">+5</span>
              <span class="cs-desc">Años de experiencia en el rubro</span>
            </div>
          </div>
          <div class="cs-content">
            <span class="font-bold text-md text-3xl text-white mb-2">
              Sobre Nosotros
            </span>
            <p class="text-lg text-white mb-6">
              Somos una empresa joven con más de 5 años de experiencia en la
              venta de motocicletas, vehículos 0Km y usados en Buenos Aires. Nos
              esforzamos por crear armonía entre conductores, autos y
              comunidades, ofreciendo un manejo inteligente, seguro y
              emocionante. Únete al MUNDO FINANCIALS para descubrir una nueva
              forma de conducir.
            </p>
            <ul class="text-lg">
              <li class="cs-li">Entrega inmediata</li>
              <li class="cs-li">Aceptamos todos los metodos de pago</li>
              <li class="cs-li">Transparencia en cada transacción</li>
              <li class="cs-li">Servicio post venta incluido</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SideToSide;
