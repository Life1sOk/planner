import React from "react";

import { useDispatch } from "react-redux";
import { addQuest } from "../../../App/slices/daily.slice";

import Todo from "../daily-todo/todo.component";
import DailyStyle from "./daily.style";

const Daily = ({ createdTime, data, title }) => {
    const dispatch = useDispatch();

    const addAllToDailyHandler = () => {
        for (let i = 0; i < data.length; i++) {
            const { questName } = data[i];
            dispatch(addQuest({ ...data[i], questName: `${title} - ${questName}` }))
        }
    };

    return (
        <DailyStyle>
            <DailyStyle.ButtonWrapper>
                <button onClick={addAllToDailyHandler}>Add All Daily</button>
            </DailyStyle.ButtonWrapper>
            <DailyStyle.ToDo>
                {
                    data[0] &&
                    data.map(day =>
                        <Todo key={day.id} data={day} title={title} />)
                }
            </DailyStyle.ToDo>
        </DailyStyle>
    )
}

export default Daily;