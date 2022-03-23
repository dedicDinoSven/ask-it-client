import React from "react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import DateUtils from "../../../utils/dateUtils";
import { useNavigate } from "react-router";

const Question = ({ question }) => {
    const navigate = useNavigate();

    return (
        <div className="question-wrapper">
            <section className="question-header">
                <h1>{question?.title}</h1>
                <div className="question-details">
                    <p><span>Posted</span>
                        {DateUtils.parse(question?.createdAt)}
                    </p>
                    <p><span>Updated</span>
                        {DateUtils.parse(question?.updatedAt)}
                    </p>
                </div>
            </section>
            <section className="question-main">
                <p>{question?.text}</p>
            </section>
            <section className="question-footer">
                <p onClick={() => navigate(`/user/${question?.user?.id}`)}>
                    <span>Author</span>
                    {question?.user?.firstName + " " + question?.user?.lastName}
                </p>
                <div className="question-ratings">
                    <div className="question-rating">
                        <FaArrowAltCircleUp /> {question?.likes}
                    </div>
                    <div className="question-rating">
                        <FaArrowAltCircleDown /> {question?.dislikes}
                    </div>
                </div>
            </section>
        </div>);
};

export default Question;