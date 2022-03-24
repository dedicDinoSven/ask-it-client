import React from "react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import DateUtils from "../../../utils/dateUtils";
import { useNavigate } from "react-router";

const Question = ({
    question, handleQuestionRating, questionRating
}) => {
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
                    {(question?.user?.firstName.length > 0 ||
                        question?.user?.lastName.length > 0) ?
                        (question?.user?.firstName + " " +
                            question?.user?.lastName) :
                        question?.user?.email}
                </p>
                <div className="question-ratings">
                    <div className="question-rating" style={questionRating.liked
                        ? { color: "#4693f3" }
                        : { color: "#000" }}
                         onClick={() => handleQuestionRating(question?.id,
                             questionRating?.id, 1)}>
                        <FaArrowAltCircleUp /> {question?.ratings?.likes.length}
                    </div>
                    <div className="question-rating"
                         style={questionRating.disliked
                             ? { color: "#e7412c" }
                             : { color: "#000" }}
                         onClick={() => handleQuestionRating(question?.id,
                             questionRating?.id, 0)}>
                        <FaArrowAltCircleDown /> {question?.ratings?.dislikes.length}
                    </div>
                </div>
            </section>
        </div>);
};

export default Question;