import "./wsp.css";

const WhatsappBtn = ({ moto }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
      <a
        href={`https://wa.me/541131042028?text=Hola+Financials+Motors+estoy+interesado+en+la+${moto.nombreMoto}+me+gustaria+obtener+más+info`}
        target="”_blank”"
        class="whatsapp-btn"
      >
        <i class="bi bi-whatsapp"></i>
      </a>
    </>
  );
};

export default WhatsappBtn;
