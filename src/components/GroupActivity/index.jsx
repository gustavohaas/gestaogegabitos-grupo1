import { useContext, useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { StyleList, StyleListContainer } from "./style";
import { GroupsActivitiesContext } from "../../providers/GroupsActivities";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Button from "../Button";


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

    const activitySchema = yup.object().shape({
        title: yup.string().required("Campo obrigatório"),
        realization_time_date: yup.date().min(new Date()).required("Campo obrigatório"),
        realization_time: yup.
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(activitySchema) });

    const handleActivity = (data, groupID = 422) => {
        const time = realization_time_date
        
        createActivity(data)
    }

    return(
        <form onSubmit={handleSubmit}>
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