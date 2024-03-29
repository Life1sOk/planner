import React, { useState, useRef, useEffect } from "react";

// Component Style //
import TodoStyle from "./todo.style.js";

const Todo = ({ quest, color, currentQuest, setCurrentQuest, index, doneChangeHandler, type }) => {
    const { questName, description, status, id } = quest;
    const textAreaRef = useRef(null);
    const [generatedHeight, setGeneratedHeight] = useState(null);
    const [state, setState] = useState(false);

    useEffect(() => {
        const scrollHeight = textAreaRef.current.scrollHeight;
        setGeneratedHeight(scrollHeight);
    }, [state]);

    useEffect(() => {
        if (questName === currentQuest) setState(true);
        if (questName !== currentQuest) setState(false);
    }, [currentQuest, questName]);

    const stateChangeHandler = () => {
        if (state) return setCurrentQuest(null);
        setCurrentQuest(questName);
    };

    const doneChanger = () => doneChangeHandler(id, !status, type);

    return (
        <TodoStyle>
            <TodoStyle.Container state={state}>
                <TodoStyle.Done id="todo" color={color} onClick={doneChanger}>D</TodoStyle.Done>
                <TodoStyle.Title color={color} htmlFor="todo" onClick={stateChangeHandler} done={status}>
                    {questName}
                </TodoStyle.Title>
            </TodoStyle.Container>
            <TodoStyle.DescriptionWrapper state={state} generatedHeight={generatedHeight} index={index}>
                <TodoStyle.Discription ref={textAreaRef} readOnly disabled value={description}/>
            </TodoStyle.DescriptionWrapper>
        </TodoStyle>
    )
}

export default Todo;