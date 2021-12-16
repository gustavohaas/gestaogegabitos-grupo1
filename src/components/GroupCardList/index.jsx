import { useContext, useState } from "react";
import { GroupsAddContext } from "../../providers/GroupsAdd";
import { GroupListPopUp } from "../GroupListPopUp/index";
import { Card, Container } from "./style"


const GroupCardList = () => {

    const { subscribedGroups } = useContext(GroupsAddContext);

    const [isConfigVisible, setIsConfigVisible] = useState(false);

    console.log(subscribedGroups);

    return (
        <>
            {subscribedGroups.map((item, index) =>
                <>
                    <Container>
                        <Card key={index} onClick={() => setIsConfigVisible(!isConfigVisible)}>
                            <h4>{item.name}</h4>
                        </Card>
                    </Container>
                    {isConfigVisible && (<GroupListPopUp
                        setIsConfigVisible={setIsConfigVisible}
                        item={item}
                    />)}
                </>
            )}
        </>
    )
}

export default GroupCardList;