import Header from "../../components/Header";
import { Container } from "./styles";
import Goals from "../../components/Goals";
import GroupList from "../../components/GroupList";
import MyGroups from "../../components/MyGroups";
import BlackButton from "../../components/BlackButton";
import { GoSearch } from "react-icons/go";
import { IoIosStats } from "react-icons/io";
import { useState } from "react";
import { GroupSearchPopUp } from "../../components/GroupSearch";
import GroupsMenu from "../../components/GroupsMenu";

const Groups = () => {

  const [isConfigVisible, setIsConfigVisible] = useState(false);

  return (
    <>
      <Header />
      <Container>
        <Goals className="goalsContainer" />
        <div className="buttonsContainer">
          <BlackButton className="groupSearchButton" onClick={() => setIsConfigVisible(!isConfigVisible)}>
            <GoSearch size="0.8em" class="searchIcon" />
            Buscar grupos
          </BlackButton>
          <BlackButton className="groupStatsButton">
            <IoIosStats size="1em" class="statsIcon" />
            Progresso
          </BlackButton>
        </div>
        <GroupList />
        <MyGroups />
      </Container>
      <GroupsMenu groupsColorScheme={true} />
      {isConfigVisible && (
        <GroupSearchPopUp
          setIsConfigVisible={setIsConfigVisible}
        />
      )}
      <GroupsMenu groupsColorScheme={true} />
    </>
  );
};

export default Groups;
