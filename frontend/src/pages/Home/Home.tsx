import assets from "@/assets/assetsManager";
import AppNavbar from "@/components/custom/common/nav/AppNavbar";
import Image from "@/components/custom/Image";
import { Button } from "@/components/ui/button";
import { IoArrowForwardOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppNavbar />
      <div className=" px-[5rem] flex flex-col gap-[1rem] justify-center items-center h-[calc(100vh-4rem)] ">
        <Image src={assets.PookieLogoImage} className=" w-[10rem] " />
        <div className="text-center ">
          <h2 className=" font-montserrat font-[500] text-[1.7rem]  ">
            Play Pokkie game{" "}
          </h2>
          <p>Guess your favorite pokemons abilities and win points.</p>
        </div>

        <Button
          onClick={() => navigate("/game")}
          className=" w-[10rem] bg-primary hover:bg-primary/70 rounded-full font-openSans mt-[.5rem] "
        >
          Play Game
          <IoArrowForwardOutline />
        </Button>
      </div>
    </>
  );
};

export default Home;
