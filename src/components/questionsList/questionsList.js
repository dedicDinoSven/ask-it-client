import React from "react";
import PaginationToolbar from "../paginationToolbar/paginationToolbar";

const QuestionsList = (props) => {

    return (
        <div className="questions-list-wrapper">
        <div className="questions-list">
            {dummyData.map((item) => {
                return (
                    <div className="questions-list-item">
                        <div className="questions-list-item-main">
                            <h2>{item.title}</h2>
                            <p className="questions-list-item-text">
                                {item.text.length > 80
                                ? `${item.text.slice(0, 76)}...` : item.text}
                            </p>
                            <p className="questions-list-item-author">Posted
                                by <span>{item.user}</span> on <span>{item.createdAt}</span>
                            </p>
                        </div>
                        <div className="questions-list-item-stats">
                            <div>Likes: <span>{item.likes}</span></div>
                            <div>Dislikes: <span> {item.dislikes}</span></div>
                            <div>Answers: <span>{item.answers}</span></div>
                        </div>
                    </div>
                );
            })}
        </div>
            <PaginationToolbar
                numberOfRowsInDropdown={[5, 10, 15, 20]}
                //dataCount={props?.dataCount}
                dataCount={dummyData.length}
                loading={props?.loading}
                state={props?.paginationState}
                setState={props?.setPaginationState}
            />
        </div>);
};

export default QuestionsList;

const dummyData = [
    {
        id: 1,
        title: "Question 1",
        text: "Question 1 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 2,
        title: "Question 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et tortor consequat. Amet nisl purus in mollis nunc sed. Viverra orci sagittis eu volutpat odio. Donec et odio pellentesque diam volutpat commodo sed egestas egestas.",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 3,
        title: "Question 3",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 4,
        title: "Question 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et tortor consequat. Amet nisl purus in mollis nunc sed. Viverra orci sagittis eu volutpat odio. Donec et odio pellentesque diam volutpat commodo sed egestas egestas.",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 5,
        title: "Question 5",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 6,
        title: "Question 6",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 7,
        title: "Question 7",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 8,
        title: "Question 8",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 9,
        title: "Question 9",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 10,
        title: "Question 10",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 11,
        title: "Question 11",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 12,
        title: "Question 12",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 13,
        title: "Question 13",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 14,
        title: "Question 14",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 15,
        title: "Question 15",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 16,
        title: "Question 16",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 17,
        title: "Question 17",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 18,
        title: "Question 18",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 19,
        title: "Question 19",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },
    {
        id: 20,
        title: "Question 20",
        text: "Question 2 text",
        answers: 5,
        likes: 5,
        dislikes: 3,
        user: "Dino-Sven Dedic",
        createdAt: "22 Mar 2022",
        updatedAt: ""
    },

];