import React from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const Answer = () => {
    return (
        <div className="answer-wrapper">
            <section className="answer-main">
                <p>{answer.text}</p>
                <div className="answer-info">
                    <p><span>Posted</span> {answer.createdAt}</p>
                    <p><span>Updated</span> {answer.updatedAt}</p>
                </div>
            </section>
            <section className="answer-details">
                <p><span>Author</span> {answer.user}</p>
                <div className="answer-ratings">
                    <div className="answer-rating">
                        <FaArrowAltCircleUp /> {answer.likes}
                    </div>
                    <div className="answer-rating">
                        <FaArrowAltCircleDown /> {answer.dislikes}
                    </div>
                </div>
            </section>
        </div>);
};

export default Answer;

const answer = {
    id: "1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et tortor consequat. Amet nisl purus in mollis nunc sed. Viverra orci sagittis eu volutpat odio. Donec et odio pellentesque diam volutpat commodo sed egestas egestas.",
    likes: 17,
    dislikes: 5,
    user: "Dino-Sven",
    createdAt: "22 Mar 2022",
    updatedAt: ""
};