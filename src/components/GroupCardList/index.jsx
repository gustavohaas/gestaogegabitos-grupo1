import { useContext, useState } from "react";
import { GroupsAddContext } from "../../providers/GroupsAdd";
import { GroupListPopUp } from "../GroupListPopUp/index";
import { Card, Container } from "./style"


const GroupCardList = () => {

    const { subscribedGroups } = useContext(GroupsAddContext);

    const [isConfigVisible, setIsConfigVisible] = useState(false);

    return (
        <>
            <Container>
                {subscribedGroups.map((item, index) => {
                    return (
                            <Card key={index} onClick={() => setIsConfigVisible(!isConfigVisible)}>
                                <h4>{item.name}</h4>
                            </Card>
                    )
                })}
            </Container>
            {isConfigVisible && (
                <GroupListPopUp
                setIsConfigVisible={setIsConfigVisible}

                />
            )}
        </>

    )
}

export default GroupCardList;