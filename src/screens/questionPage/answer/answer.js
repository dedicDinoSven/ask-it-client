import React, { useEffect, useState } from "react";
import {
    FaArrowAltCircleDown,
    FaArrowAltCircleUp,
    FaCheck,
    FaEdit,
    FaTimesCircle,
    FaTrash
} from "react-icons/fa";
import DateUtils from "../../../utils/dateUtils";
import InputField from "../../../components/inputField/inputField";

const Answer = ({
    data, userId, editAnswer, setEditAnswer,
    handleAnswerUpdate, handleAnswerDelete
}) => {
    const [toEdit, setToEdit] = useState(false);

    const prepareEdit = (id) => {
        let temp = "";
        console.log(id);
        if (data?.id === id) temp = data?.text;
        setEditAnswer(temp);
        setToEdit(true);
    };

    return (
        <div className="answer-wrapper">
            <section className="answer-main">
                <div className="answer-main-left">
                    {!toEdit ?
                        <p>{data?.text}</p> :
                        <InputField type="textarea" rows="4"
                                    id="text" name="text"
                                    value={editAnswer}
                                    onChange={(e) => setEditAnswer(
                                        e.target.value)}
                                    style={{ width: "100%" }} />
                    }
                    <div className="answer-info">
                        <p><span>Posted</span>
                            {DateUtils.parse(data?.createdAt)}
                        </p>
                        <p><span>Updated</span>
                            {DateUtils.parse(data?.updatedAt)}
                        </p>
                    </div>
                </div>
                {userId === parseInt(data?.user?.id) &&
                <div className="answer-buttons">
                    {toEdit ?
                        <>
                            <FaCheck onClick={() => {
                                handleAnswerUpdate(data?.id);
                                setToEdit(false);
                            }} />
                            <FaTimesCircle onClick={() => setToEdit(false)} />
                        </> :
                        <>
                            <FaEdit onClick={() => prepareEdit(data?.id)} />
                            <FaTrash
                                onClick={() => handleAnswerDelete(data?.id)} />
                        </>}
                </div>}
            </section>
            <section className="answer-details">
                <p><span>Author</span>
                    {(data?.user?.firstName.length > 0 ||
                        data?.user?.lastName.length > 0) ?
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
