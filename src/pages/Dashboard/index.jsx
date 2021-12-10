import { Container, IconButton } from "./style";
import { GoGear, GoPlusSmall, GoSearch } from "react-icons/go";
import { MdListAlt, MdPeopleOutline } from "react-icons/md";
import Button from "../../components/Button";
import Collapsible from "../../components/Collapsible";

const Dashboard = () => {
    return (
        <>
            <Container>
                <header>
                    <p>Dashboard</p>
                    <IconButton><GoGear size="1.5em" /></IconButton>
                </header>
                <h2>Seja bem-vindo(a), usuário</h2>
                <nav>
                    <div>
                        <button className="day">Hoje</button>
                        <button className="ellipsis">…</button>
                    </div>
                    <IconButton className="search"><GoSearch size="1.5em" /></IconButton>
                </nav>
                <main>
                    <div className="tasks">
                        <Collapsible title="Categoria">
                            <p>Tarefa</p>
                        </Collapsible>
                    </div>
                </main>
                <footer>
                    <IconButton><MdListAlt size="2em" /></IconButton>
                    <Button><GoPlusSmall size="2em" /></Button>
                    <IconButton><MdPeopleOutline size="2em" /></IconButton>
                </footer>
            </Container>
        </>
    )
};

export default Dashboard;