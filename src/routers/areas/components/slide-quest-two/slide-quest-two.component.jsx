import React from "react";

import Input from "../input/input.component";
import TextArea from "../textarea/textarea.component";
import Points from "../points/points.component";
import { SlideSectionContainer, InDescWrapper, SlideIn, DisplayPoints, SlideDescription, Quote, Ul, Buttons, Date } from './slide-quest-two.style';

const SlideQuestTwo = () => {
    return (
        <SlideSectionContainer>
            <h2>Create Steps Points</h2>
            <InDescWrapper>
                <SlideIn>
                    <Input label='Point Title:' />
                    <Date>
                        <span>Date:</span>
                        <input type='date' />
                    </Date>
                    <TextArea type='normal' label='Need to do!' />
                    <button>Add</button>
                </SlideIn>
                <SlideDescription>
                    <Quote>Success is steady progress toward one’s personal goals. — Jim Rohn</Quote>
                    <Ul>
                        <li>Create milestones to track progress. <br />
                            (Add some explanation)
                        </li>
                    </Ul>
                </SlideDescription>
            </InDescWrapper>
            <DisplayPoints>
                <Points />
                <Points />
                <Points />
                <Points />
                <Points />
                <Points />
            </DisplayPoints>
            <Buttons>
                <button>Accept</button>
            </Buttons>
        </SlideSectionContainer>
    )
}

export default SlideQuestTwo;