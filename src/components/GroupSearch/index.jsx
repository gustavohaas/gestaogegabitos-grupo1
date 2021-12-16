import { useContext } from "react";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { GroupSearchContex } from "../../providers/GroupSearch";
import SearchInput from "../SearchInput";
import { Container, PopupDiv, GroupSearchStyle, GroupSearchContainer, GroupSearchList, ListItemContainer } from "./style"



export const GroupSearchPopUp = ({setIsConfigVisible}) => {

    const {GroupSearch, filteredGroupList} = useContext(GroupSearchContex);

    return (
        <>
      <Container>
        <PopupDiv>
          <div>
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
                        <ListItemContainer>
                            <GroupSearchList key={index}>
                                {item.name}
                            </GroupSearchList>
                            
                        </ListItemContainer>
                    )
                })}
              </GroupSearchStyle>
          </GroupSearchContainer>
        </PopupDiv>
      </Container>
    </>
    )
}