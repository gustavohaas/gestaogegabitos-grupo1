import { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { StyleList, StyleListContainer, HabitBtn } from "./style";
import { GroupsActivitiesContext } from "../../providers/GroupsActivities";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Button from "../Button";
import GroupActivityPopUp from "../GroupActivityPopUp";
import ActivityCard from "../ActivityCard";

export const ActiviryCreatePopUp = () => {

    const groupID = JSON.parse(localStorage.getItem("@Habitactics:groupID"));
    const { createActivity } = useContext(GroupsActivitiesContext);

    const activitySchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        realization_time_date: yup.date().min(new Date()).required("Campo obrigatório"),
        realization_time: yup.string().máx(5, "Formato de horário inválido").min(5, "Formato de horário inválido").required("Campo obrigatório")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(activitySchema) });

    const handleActivity = (data) => {
        const time = data.realization_time_date + 'T' + data.realization_time + 'Z';

        const newData = { "title": data.title, 'realization_time': time, 'group': groupID }

        createActivity(newData)
    }

    return (
        <form onSubmit={handleSubmit(handleActivity)}>
            <label for='title' >
                Título <span>{errors.title?.message}</span>
            </label>
            <Input name='title' register={register} />
            <label for='realization_time_date' >
                Data de realização <span>{errors.realization_time_date?.message}</span>
            </label>
            <Input name='realization_time_date' register={register} />
            <label for='realization_time' >
                Horário de realização <span>{errors.realization_time?.message}</span>
            </label>
            <Input name='realization_time' register={register} />
            <Button type="submit">Cadastrar</Button>
        </form>
    );
};

export const ActivityUpdatePopUp = (activityID) => {

    const { updateActivity } = useContext(GroupsActivitiesContext);

    const activitySchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(activitySchema) });

    const handleActivity = (data, activityID) => {
        updateActivity(data, activityID)
    }

    return (
        <form onSubmit={handleSubmit(handleActivity)}>
            <label for='title' >
                Título <span>{errors.title?.message}</span>
            </label>
            <Input name='title' register={register} />
            <Button type="submit">Atualizar</Button>
        </form>
    )
}

export const ActivityList = ({ group }) => {

    const { activitiesList, searchActivities } = useContext(GroupsActivitiesContext);

    const [visibility, setVisibility] = useState(false);

    // useEffect(() => {
    //     searchActivities(groupID);
    // },[]);

    return (
        <>
            <h2>Atividades</h2>
            <ul>
                {group.activities.map((item, index) => {
                    return (
                        <StyleListContainer>
                            <Checkbox />
                            <StyleList key={index}>
                                <ActivityCard>
                                    {item}
                                </ActivityCard>
                            </StyleList>
                        </StyleListContainer>
                    );
                })}
            </ul>
        </>
    );

};