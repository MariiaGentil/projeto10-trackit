import styled from "styled-components"
import { HabitHeader } from "./HabitHeader"
import { HabitFooter } from "./HabitFooter"
import { HabitMainToday } from "./HabitMainToday"

export const HabitsToday = ({percentage, setPercentage}) => {
    

    return (
        <DivHabitMain>
            <HabitHeader />
            <HabitMainToday/>
            <HabitFooter percentage={percentage} />
        </DivHabitMain>
    )
}

const DivHabitMain = styled.div`
    background-color: var(--background);
    height: calc(100vh - 70px);
    overflow-y: auto;
`