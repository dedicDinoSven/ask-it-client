import React from "react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

const Question = () => {
    return (
        <div className="question-wrapper">
            <section className="question-header">
                <h1>{question.title}</h1>
                <div className="question-details">
                    <p><span>Posted</span> {question.createdAt}</p>
                    <p><span>Updated</span> {question.updatedAt}</p>
                </div>
            </section>
            <section className="question-main">
                <p>{question.text}</p>
            </section>
            <section className="question-footer">
                <p><span>Author</span> {question.user}</p>
                <div className="question-ratings">
                    <div className="question-rating">
                        <FaArrowAltCircleUp /> {question.likes}
                    </div>
                    <div className="question-rating">
                        <FaArrowAltCircleDown /> {question.dislikes}
                    </div>
                </div>
            </section>
        </div>);
};

export default Question;

const question = {
    id: 1,
    title: "Question Title ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et tortor consequat. Amet nisl purus in mollis nunc sed. Viverra orci sagittis eu volutpat odio. Donec et odio pellentesque diam volutpat commodo sed egestas egestas.",
    answers: 5,
    likes: 5,
    dislikes: 3,
    user: "Dino-Sven",
    createdAt: "22 Mar 2022",
    updatedAt: ""
};