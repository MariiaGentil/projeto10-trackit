import { HabitHeader } from "./HabitHeader"
import { HabitMainHistory } from "./HabitMainHistory"
import { HabitFooter } from "./HabitFooter"
import styled from "styled-components"

export const HabitsHistory = () => {
    return (
        <DivHabitMain>
            <HabitHeader />
            <HabitMainHistory />
            <HabitFooter history={true}/>
        </DivHabitMain>
    )
}

const DivHabitMain = styled.div`
    background-color: var(--background);
    height: calc(100vh - 70px);
    overflow-y: auto;
`