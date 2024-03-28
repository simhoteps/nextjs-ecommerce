import Image from "next/image";

const ShortBenner = () => {
  return (
    <div className="h-[400px] flex items-center justify-between p-6">
      <div className="items-center gap-4">
        <div className="text-xl md:text-4xl">
          Bu güce ulaşmak hiç güç değil.
        </div>
        <div className="text-xl md:text-2xl">Başlangıç fiyatı: 58.499 TL</div>

        <button> Satın alın </button>
      </div>
      <div className=" ">
        <Image
          src={"/iphone15pro.png"}
          height={200}
          width={200}
          alt=""
          className="object-cover "
        />
      </div>
    </div>
  );
};

export default ShortBenner;
