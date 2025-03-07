import styled from "styled-components"
import { HabitHeader } from "./HabitHeader"
import { HabitMain } from "./HabitMain"
import { HabitFooter } from "./HabitFooter"

export const Habits = ({percentage, setPercentage}) => {
    

    return (
        <DivHabitMain>
            <HabitHeader />
            <HabitMain/>
            <HabitFooter percentage={percentage} />
        </DivHabitMain>
    )
}

const DivHabitMain = styled.div`
    background-color: var(--background);
    height: calc(100vh - 70px);
    overflow-y: auto;
`