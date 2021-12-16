import Header from "../../components/Header";
import { Container } from "./styles";
import Menu from "../../components/Menu";
import { useProgress } from "../../providers/Progress/index";
import { useEffect, useContext } from "react";
import { DashboardContext } from "../../providers/Dashboard";
import ProgressCard from "../../components/ProgressCard";

const Progress = () => {
  const { achievedHabits } = useProgress();
  const { list, listHabits } = useContext(DashboardContext);

  useEffect(() => {
    listHabits();
  }, []);
  useEffect(() => {
    achievedHabits(list);
  }, [list]);
  const achieved =
    JSON.parse(localStorage.getItem("@Habitactics:achieved")) || [];
  return (
    <>
      <Header />
      <Container>
        {console.log(list)}
        <section>
          <div>
            <h2>Meu Progresso</h2>
          </div>

          <div>
            {list.map((l) => (
              <ProgressCard>
                {console.log(l)}
                Você completou a atividade {l.title} {l.how_much_achieved}{" "}
                vezes.
              </ProgressCard>
            ))}
          </div>
        </section>

        <section>
          <div>
            <h2>Hábitos Adquiridos</h2>
          </div>

          <ul>
            {achieved.map((ac) => (
              <ProgressCard>
                Você adquiriu {ac.title} como um hábito para si
              </ProgressCard>
            ))}
          </ul>
        </section>
      </Container>
      <Menu />
    </>
  );
};

export default Progress;
