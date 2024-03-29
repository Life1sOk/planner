import styled from 'styled-components';

const AboutStyle = styled.div`
    width: ${props => props.type === 'done' ? '265px' : '275px'};
    height: 345px;
    flex-shrink: 0;
    background-color: rgb(20, 25, 50);
    padding: 0 15px 15px 15px;
    border-top: 2px solid ${({color}) => color};
    border-bottom: 1px solid ${({color}) => color};
    border-radius: 20px 20px 10px 10px;
    color: white;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* box-shadow: ${({color}) => `1px 0px 27px -6px ${color}`};
    -webkit-box-shadow: ${({color}) => `1px 0px 17px -6px ${color}`};
    -moz-box-shadow: ${({color}) =>`1px 0px 27px -6px ${color}`}; */
`;

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    .quest-id {
        width: 30px;
        height: 30px;
        font-size: 17px;
        background-color: red;
        border-radius: 50%;
        flex-shrink: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quest-title {
        font-size: 22px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

const RoadLinks = styled.div`
    width: 100%;
    border-radius: 20px 20px 0 0;
    color: rgb(255, 98, 0);
    padding: 10px 5px 0 5px;
    font-size: 13px;

    display: flex;
    justify-content: space-between;
`;

const PointBalls = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 10px;

    span {
        width: 25px;
        height: 25px;
        background-color: green;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

AboutStyle.Title = Title;
AboutStyle.RoadLinks = RoadLinks;
AboutStyle.AboutWrapper = AboutWrapper;
AboutStyle.PointBalls = PointBalls;

export default AboutStyle;