import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectWindowStateOpen, windowHandler, selectWichOne } from "../../../../App/slices/create-quest.slice";

import { PlanSectionContainer, WindowContainer, FixSectionContainer } from './index.style';
import SlideQuestOne from "./slide-quest-one/slide-quest-one.component";
import SlideQuestTwo from "./slide-quest-two/slide-quest-two.component";
import SlideQuestThree from "./slide-quest-three/slide-quest-three.component";
import SlideQiestFix from "./slide-quest-fix/slide-quest-fix.component";
import CreateProgress from "./create-progress/create-progress.component";
import BlackBoxWindow from "../../../../Components/black-box/black-box.component";
import SettingMenu from "./setting-menu/setting-menu.component";

const QuestWindow = ({ title }) => {
    const dispatch = useDispatch();
    const stateOpen = useSelector(selectWindowStateOpen);
    const wichOne = useSelector(selectWichOne);

    const closeWindowHandler = () => dispatch(windowHandler(false));

    return (
        <BlackBoxWindow state={stateOpen} handler={closeWindowHandler}>
            <WindowContainer>
                <SettingMenu />
                {
                    wichOne === 'Add' ?
                        <>
                            <PlanSectionContainer>
                                <SlideQuestOne />
                                <SlideQuestTwo />
                                <SlideQuestThree /> 
                            </PlanSectionContainer>
                            <CreateProgress title={title}/>
                        </>
                        :
                        <FixSectionContainer>
                            <SlideQiestFix />
                        </FixSectionContainer>
                }
            </WindowContainer>
        </BlackBoxWindow>
    )
}

export default QuestWindow;