import React from "react";

import { QuestCardContainer, QuestTitle } from './quest-card.style';
import FixQuest from "../fix-quest/fix-quest.component";
import AddQuest from '../../../../Components/add-quest/add-quest.component';

const QuestCard = ({ title, color, quests, type }) => {

    const newQuestHandler = (questState) => {
        questState();
    }

    return (
        <QuestCardContainer color={color}>
            <QuestTitle color={color}>{title}</QuestTitle>
            {
                quests &&
                quests.map(quest =>
                    <FixQuest key={quest.id} quest={quest} order={quests.indexOf(quest)} color={color} type={type} newQuestHandler={newQuestHandler} />
                )
            }
            <AddQuest type={type} onClick={newQuestHandler} />
        </QuestCardContainer>
    )
}

export default QuestCard;