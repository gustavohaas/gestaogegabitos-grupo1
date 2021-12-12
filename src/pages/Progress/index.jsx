import Header from "../../components/Header";
import { Container } from "./styles";
import Menu from "../../components/Menu";
import { useContext } from "react/cjs/react.development";
import ProgressProvider from "../../providers/Progress/index";

const Progress = () => {
  const { hab } = useContext(ProgressProvider);

  return (
    <>
      <Header />
      <Container>
        <div>
          <h2>Meu Progresso</h2>
        </div>

        <section>
          <ul>
            {hab.map((h) => (
              <li>
                `Você completou a atividade ${h.title} ${h.how_much_achieved}{" "}
                vezes`
              </li>
            ))}
          </ul>
        </section>
      </Container>
      <Menu />
    </>
  );
};

export default Progress;
