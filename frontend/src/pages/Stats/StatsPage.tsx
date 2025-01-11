import AppNavbar from "@/components/custom/common/nav/AppNavbar";
import StatsComponent from "@/components/custom/stats/StatsComponent";

const StatsPage = () => {
  return (
    <div>
      <AppNavbar />
      <div className=" px-[5rem] flex flex-col  ">
        <StatsComponent />
      </div>
    </div>
  );
};

export default StatsPage;
