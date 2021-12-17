import { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { GroupSearchContex } from "../../providers/GroupSearch";
import GroupSearchCard from "../GroupSearchCard";
import SearchInput from "../SearchInput";
import { Container, PopupDiv, GroupSearchStyle, GroupSearchContainer, } from "./style"
import { ActivityList } from '../GroupActivity/index'
import Goals from "../Goals";



export const GroupListPopUp = ({ item, setIsConfigVisible, groupID }) => {

  const { GroupSearch, filteredGroupList } = useContext(GroupSearchContex);

  return (
    <>
      <Container>
        <PopupDiv>
          <Goals group={item} />
          <ActivityList group={item} />
        </PopupDiv>
      </Container>
    </>
  )
}