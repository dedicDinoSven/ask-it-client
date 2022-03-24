import React, { useEffect, useState } from "react";
import QuestionsApi from "../../apis/questionsApi";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions, getRecentQuestions } from "../../redux/questionSlice";
import QuestionsList from "../../components/questionsList/questionsList";
import { FaFireAlt, FaUsers, FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
    const [paginationState, setPaginationState] = useState(
        { page: 1, numberOfRows: 10 });
    const [paginationLoading, setPaginationLoading] = useState(false);

    const dispatch = useDispatch();
    const { questions, recentQuestions } = useSelector(
        (state) => state.questions);
    useEffect(() => {
        const queryParams = {
            orderBy: "title",
            sort: "ASC",
            limit: 10,
            offset: 0,
            filters: { userId: 1 }
        };
        setPaginationLoading(true);
        dispatch(getQuestions());
        dispatch(getRecentQuestions({
            limit: paginationState?.numberOfRows,
            offset: (paginationState?.page - 1) * paginationState?.numberOfRows
        }));
        setPaginationLoading(false);
    }, [dispatch, paginationState?.page, paginationState?.numberOfRows]);

    return (<div className="dashboard-wrapper">
        <section className="dashboard-content-left">
            <div className="dashboard-container">
                <h1>Recent Questions <FaCalendarAlt /></h1>
                <QuestionsList hasPagination={true}
                               paginationState={paginationState}
                               setPaginationState={setPaginationState}
                               loading={paginationLoading}
                               dataCount={questions?.length}
                               data={recentQuestions} />
            </div>
        </section>
        <section className="dashboard-content-right">
            <div className="dashboard-container">
                <h1>Hot Questions <FaFireAlt /></h1>
                <QuestionsList data={questions} />
            </div>
            <div className="dashboard-container">
                <h1> Most Answers By <FaUsers /></h1>
            </div>
        </section>
    </div>);
};

export default Dashboard;