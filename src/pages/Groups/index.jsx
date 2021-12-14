import { ActivityList } from "../../components/GroupActivity";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

const Groups = () => {
  return (
    <>
      <Header />
      <Menu groupsColorScheme={true}/>
      <div>
        <ActivityList />
      </div>
    </>
  );
};

export default Groups;
