import { useEffect } from "react";
import { useContext } from "react";
import { GroupsAddContext } from "../../providers/GroupsAdd";
import { ActivityList } from "../GroupActivity";
import MiniButton from "../MiniButon";
import { Card, Container } from "./style"


const GroupCardList = () => {

    const { subscribedGroups } = useContext(GroupsAddContext);

    console.log(subscribedGroups)

    return (
        <>
            <Container>
                {subscribedGroups.map((item, index) => {
                    return (
                        <Card key={index}>
                            <h4>{item.name}</h4>

                            <ActivityList groupID={item.id} />
                        </Card>
                    )
                })}
            </Container>
        </>

    )
}

export default GroupCardList;