import AppNavbar from "@/components/custom/common/nav/AppNavbar";
import GameCanvas from "@/components/custom/game/GameCanvas";

const PlayGame = () => {
  return (
    <div>
      <AppNavbar />
      <div className=" px-[5rem] w-[100%] h-[calc(100vh-4rem] ">
        <GameCanvas />
      </div>
    </div>
  );
};

export default PlayGame;
