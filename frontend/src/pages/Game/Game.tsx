import AppNavbar from "@/components/custom/common/nav/AppNavbar";
import DisplayQuestion from "@/components/custom/game/DisplayQuestion";

const GamePage = () => {
  return (
    <div>
      <AppNavbar />
      <div className=" px-[5rem] flex flex-col  ">
        <DisplayQuestion />
      </div>
    </div>
  );
};

export default GamePage;
