import { HabitHeader } from "./HabitHeader"
import { HabitMainToday } from "./HabitMainToday"
import { HabitFooter } from "./HabitFooter"
import styled from "styled-components"

export const HabitsToday = () => {
    return (
        <DivHabitMain>
            <HabitHeader />
            <HabitMainToday />
            <HabitFooter today={true}/>
        </DivHabitMain>
    )
}

const DivHabitMain = styled.div`
    background-color: var(--background);
    height: calc(100vh - 70px);
    overflow-y: auto;
`