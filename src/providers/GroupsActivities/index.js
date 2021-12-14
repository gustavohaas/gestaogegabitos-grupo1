import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from '../../services/api'

export const GroupsActivitiesContext = createContext();

const GroupsActivitiesProvider = ({ children }) => {

    const [activitiesList, setActivitiesList] = useState();

    const token = JSON.parse(localStorage.getItem("@Habitactics:token"));

    const createActivity = (data) => {
        api
            .post("/activities/", data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            .then((response) => {
                toast.success("Atividade cadastrada com sucesso");
            })
            .catch((err) => {
                toast.error("Erro ao cadastrar atividade");
            })
    };

    const searchActivities = (groupID) => {
        api
            .get(`/activities/?group=${groupID}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            })
            .then((response) => {
                setActivitiesList(response.data.results);
            })
            .catch((err) => {
                toast.error("Erro ao buscar atividades");
            })
    };

    const updateActivity = (activityID) => {
        api
            .patch(`/activities/${activityID}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                toast.success("Atividade atualizada com sucesso");
            })
            .catch((err) => {
                toast.error("Erro ao atualizar atividade");
            })
    };

    const deleteActivity = (activityID) => {
        api
            .delete(`/activities/${activityID}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                toast.success("Atividade removida com sucesso");
            })
            .catch((err) => {
                toast.error("Erro ao remover ativdade");
            })
    };

    return (
        <GroupsActivitiesContext.Provider
        value={{
            createActivity, searchActivities, updateActivity, deleteActivity, activitiesList
        }}>
            {children}
        </GroupsActivitiesContext.Provider>
    );
};

export default GroupsActivitiesProvider;