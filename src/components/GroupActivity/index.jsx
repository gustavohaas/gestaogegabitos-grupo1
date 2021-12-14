import { useContext, useEffect } from "react";
import { StyleList, StyleListContainer } from "./style";
import { GroupsActivitiesContext } from "../../providers/GroupsActivities";
import Checkbox from "../Checkbox";


export const ActivityList = () => {

    const { activitiesList, searchActivities } = useContext(GroupsActivitiesContext);

    useEffect(() => {
        searchActivities(422);
    },"")

    return (
        <ul>
            {activitiesList?.map((item, index) => {
                return (
                    <StyleListContainer>
                        <Checkbox />
                        <StyleList key={index}>
                            {item.title}
                        </StyleList>
                    </StyleListContainer>
                    
                );
            })}
        </ul>
    );

};

export const ActiviryPopUp = () => {

    const { createActivity } = useContext(GroupsActivitiesContext);

    

};