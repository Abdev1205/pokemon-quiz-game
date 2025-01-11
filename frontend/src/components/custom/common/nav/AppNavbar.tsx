import { NavLink } from "react-router-dom";

import { IoHome } from "react-icons/io5";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { SingleLink } from "./SingleLink";
import assets from "@/assets/assetsManager";
import Image from "../../Image";

const AppNavbar = () => {
  return (
    <nav className=" w-full sticky top-0 z-[50] bg-white h-[4rem] border-b flex shadow-md justify-between items-center px-[4rem] ">
      {/* Logo Part */}
      <NavLink to={"/"} className="flex gap-[.5rem] items-center w-fit">
        <Image
          src={assets.PookieLogoImage}
          alt="Logo"
          className=" w-[3rem] h-full "
        />
        <h2 className=" font-poppins  text-[1.4rem] font-[500] ">Pookie Man</h2>
      </NavLink>

      <div className=" flex gap-[.5rem] items-center  ">
        <SingleLink label="Home" icon={<IoHome />} path="/" />
        <SingleLink
          label="Stats"
          icon={<BiSolidBarChartAlt2 />}
          path="/stats"
        />
      </div>
    </nav>
  );
};

export default AppNavbar;
