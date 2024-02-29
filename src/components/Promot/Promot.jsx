import "./promot.css";

const Promot = ({ moto }) => {
  return (
    <div class="shapedividers_com-8611">
      <section
        id="promotions-1567"
        class="bg-slate-800 shapedividers_com-9285 relative"
      >
        <div class="cs-container">
          <ul class="cs-card-group">
            <li class="cs-item">
              <picture class="cs-background">
                <source media="(max-width: 600px)" />
                <source
                  media="(min-width: 601px)"
                  srcset="/Financiacion/financiacion.jpg"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src="/Financiacion/financiacion.jpg"
                  alt="room"
                  width="630"
                  height="354"
                />
              </picture>
              <div class="cs-content">
                <span class="cs-tag"> Financia Ahora !! (Solo Con Tu Dni)</span>
                <h2 class="cs-h2">Paga tu moto en cuotas</h2>
                <a href="/financia" class="cs-button-solid">
                  Mas info
                </a>
              </div>
            </li>
            <li class="cs-item">
              <picture class="cs-background">
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
                  alt="room"
                  width="630"
                  height="354"
                />
              </picture>
              <div class="cs-content">
                <span class="cs-tag">Disfruta el 2024 en una 0km</span>
                <h2 class="cs-h2">LLeva tu moto hoy mismo</h2>
                <a href="#comprar" class="cs-button-solid">
                  Compra ya
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div class="shapedividers_com-6655"></div>
    </div>
  );
};

export default Promot;
