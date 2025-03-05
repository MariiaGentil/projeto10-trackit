import { useState } from "react"
import styled from "styled-components"
import { HabitHeader } from "./HabitHeader"
import { HabitMain } from "./HabitMain"
import { HabitFooter } from "./HabitFooter"

export const Habits = () => {
    const [percentage, setPercentage] = useState(0.1)

    return (
        <DivHabitMain>
            <HabitHeader />
            <HabitMain setPercentage={setPercentage}/>
            <HabitFooter percentage={percentage} />
        </DivHabitMain>
    )
}

const DivHabitMain = styled.div`
    background-color: var(--background);
    height: calc(100vh - 70px);
    overflow-y: auto;
`