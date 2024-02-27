import React from "react";

const BannerMid = ({ moto }) => {
  return (
    <div class="mt-10 max-w-screen">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <img
          src={moto.imgMoto.bannerMidMovil}
          alt=""
          class="object-cover w-full h-auto lg:hidden"
        />

        <img
          src={moto.imgMoto.bannerMid}
          alt=""
          class="object-cover w-full h-auto hidden lg:block lg:h-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default BannerMid;
