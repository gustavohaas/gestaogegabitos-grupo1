import { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { GroupSearchContex } from "../../providers/GroupSearch";
import GroupSearchCard from "../GroupSearchCard";
import SearchInput from "../SearchInput";
import { Container, PopupDiv, GroupSearchStyle, GroupSearchContainer, } from "./style"
import { ActivityList } from '../GroupActivity/index'



export const GroupListPopUp = ({setIsConfigVisible, groupID}) => {

    const {GroupSearch, filteredGroupList} = useContext(GroupSearchContex);

    return (
        <>
      <Container>
        <PopupDiv>
          <ActivityList groupID={groupID}/>
        </PopupDiv>
      </Container>
    </>
    )
}