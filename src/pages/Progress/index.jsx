import Header from "../../components/Header";
import { Container } from "./styles";
import Menu from "../../components/Menu";
import { useProgress } from "../../providers/Progress/index";
import { useEffect, useContext } from "react";
import { DashboardContext } from "../../providers/Dashboard";

const Progress = () => {
  const { achievedHabits } = useProgress();
  const { list } = useContext(DashboardContext);
  useEffect(() => {
    achievedHabits(list);
  }, []);
  const achieved =
    JSON.parse(localStorage.getItem("@Habitactics:achieved")) || [];
  return (
    <>
      <Header />
      <Container>
        <section>
          <div>
            <h2>Meu Progresso</h2>
          </div>

          <ul>
            {list.map((h) => (
              <li>
                Você completou a atividade {h.title} {h.how_much_achieved}{" "}
                vezes.
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div>
            <h2>Hábitos Adquiridos</h2>
          </div>

          <ul>
            {achieved.map((ach) => (
              <li>Você adquiriu {ach.title} como um hábito para si</li>
            ))}
          </ul>
        </section>
      </Container>
      <Menu />
    </>
  );
};

export default Progress;
