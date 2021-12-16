import { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { GroupSearchContex } from "../../providers/GroupSearch";
import GroupSearchCard from "../GroupSearchCard";
import SearchInput from "../SearchInput";
import { Container, PopupDiv, GroupSearchStyle, GroupSearchContainer, } from "./style"



export const GroupSearchPopUp = ({setIsConfigVisible}) => {

    const {GroupSearch, filteredGroupList} = useContext(GroupSearchContex);

    return (
        <>
      <Container>
        <PopupDiv>
          <div className="buttonContainer">
            <button
              className="greyBtn"
              onClick={() => setIsConfigVisible(false)}
            >
              X
            </button>
          </div>
          <SearchInput
                icon={GoSearch}
                name="search"
                className="searchInput"
                onChange={(e) => GroupSearch(e.target.value)}
            />
          <GroupSearchContainer>
              <GroupSearchStyle>
                {filteredGroupList?.map((item, index) => {
                    return (
                      <GroupSearchCard key={index} >
                        {item}
                      </GroupSearchCard>
                    )
                })}
              </GroupSearchStyle>
          </GroupSearchContainer>
        </PopupDiv>
      </Container>
    </>
    )
}