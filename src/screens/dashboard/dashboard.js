import React, { useEffect, useState } from "react";
import QuestionsApi from "../../apis/questionsApi";
import { useDispatch } from "react-redux";
import { getQuestions, getRecentQuestions } from "../../redux/questionSlice";

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const queryParams = {
            orderBy: "title",
            sort: "ASC",
            limit: 10,
            offset: 0
        };
        dispatch(getQuestions(queryParams));
        dispatch(getRecentQuestions());
    }, [dispatch]);
    return (<div>Dashboard</div>);
};

export default Dashboard;