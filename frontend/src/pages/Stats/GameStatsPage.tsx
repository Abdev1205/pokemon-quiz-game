import AppNavbar from "@/components/custom/common/nav/AppNavbar";
import GameStats from "@/components/custom/game/GameStats";

const GameStatsPage = () => {
  return (
    <div>
      <AppNavbar />
      <div className=" px-[5rem] flex flex-col  ">
        <GameStats />
      </div>
    </div>
  );
};

export default GameStatsPage;
