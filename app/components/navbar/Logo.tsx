import Image from "next/image";

const Logo = () => {
  return (
    <div /*  className=" bg-orange-700 px-4 py-2 rounded-md text-lg md:text-2xl curser-pointer" */
    >
      <Image src={"/aLaL.png"} width={104} height={40} alt="" className="" />
    </div>
  );
};

export default Logo;
