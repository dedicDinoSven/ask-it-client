import React from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import DateUtils from "../../../utils/dateUtils";

const Answer = ({ data }) => {
    return (
        <div className="answer-wrapper">
            <section className="answer-main">
                <p>{data?.text}</p>
                <div className="answer-info">
                    <p><span>Posted</span>
                        {DateUtils.parse(data?.createdAt)}
                    </p>
                    <p><span>Updated</span>
                        {DateUtils.parse(data?.updatedAt)}
                    </p>
                </div>
            </section>
            <section className="answer-details">
                <p><span>Author</span>
                    {(data?.user?.firstName.length > 0 || data?.user?.lastName.length > 0) ?
                        (data?.user?.firstName + " " + data?.user?.lastName) :
                        data?.user?.email}
                </p>
                <div className="answer-ratings">
                    <div className="answer-rating">
                        <FaArrowAltCircleUp /> {data?.likes}
                    </div>
                    <div className="answer-rating">
                        <FaArrowAltCircleDown /> {data?.dislikes}
                    </div>
                </div>
            </section>
        </div>);
};

export default Answer;
