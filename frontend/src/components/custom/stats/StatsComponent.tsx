import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SubmissionPieChart from "@/components/custom/charts/SubmissionPieChart";
import { useGameStore } from "@/store/gameStore";

const StatsComponent = () => {
  const navigate = useNavigate();
  const { games: gameData } = useGameStore();

  const overallStats = gameData.reduce(
    (acc, game) => {
      acc.totalGames += 1;
      acc.totalCorrect += game?.correct?.length as number;
      acc.totalWrong += game?.wrong?.length as number;
      acc.totalPossible += game?.answer?.length;
      acc.averageScore += game.score;
      return acc;
    },
    {
      totalGames: 0,
      totalCorrect: 0,
      totalWrong: 0,
      totalPossible: 0,
      averageScore: 0,
    }
  );

  overallStats.averageScore =
    overallStats.averageScore / overallStats.totalGames;

  return (
    <div className="container flex w-full py-[1.5rem] h-[calc(100vh-4rem)] gap-6">
      {/* Overview Statistics */}
      <div className="flex flex-col w-[70%] h-full justify-evenly gap-[2rem] ">
        <div className="flex h-[30%] justify-between gap-6">
          <Card className="w-[50%]">
            <CardHeader className="pb-2 space-y-0">
              <CardTitle className="text-lg font-medium">
                Average Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[3rem] text-primary font-montserrat font-bold">
                {overallStats.averageScore.toFixed(1)}%
              </div>
            </CardContent>
          </Card>

          <Card className="w-[50%]">
            <CardHeader className="pb-2 space-y-0">
              <CardTitle className="text-lg font-medium">Total Games</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-[3rem] text-primary font-montserrat font-bold">
                {overallStats.totalGames}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Games List */}
        <div className=" h-[70%] ">
          <Card className="h-full ">
            <CardHeader>
              <CardTitle className="text-lg font-medium font-montserrat">
                Game History
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full overflow-y-auto ">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Pokemon</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead>Correct</TableHead>
                    <TableHead>Wrong</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="">
                  {gameData.map((game) => (
                    <TableRow
                      key={game.id}
                      className="cursor-pointer hover:bg-muted"
                      onClick={() => navigate(`/game/${game.id}/stats`)}
                    >
                      <TableCell className="flex items-center gap-2 font-medium">
                        <img
                          src={game.question.image}
                          alt={game.question.name}
                          className="w-8 h-8"
                        />
                        {game.question.name}
                      </TableCell>
                      <TableCell>{game.score.toFixed(1)}%</TableCell>
                      <TableCell>{game.correct?.length}</TableCell>
                      <TableCell>{game.wrong?.length}</TableCell>
                      <TableCell>
                        <span className="capitalize">{game.status}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
      <Card className="w-[25%] h-full">
        <CardHeader className="">
          <CardTitle className="text-lg font-semibold font-montserrat ">
            Overall Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SubmissionPieChart
            correct={overallStats.totalCorrect}
            wrong={overallStats.totalWrong}
            total={overallStats.totalPossible}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsComponent;
