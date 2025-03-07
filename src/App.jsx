import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { Habits } from "./components/Habits"
import ResetCss from "./styles/resetCss"
import GlobalStyle from "./styles/globalStyles"
import { UserProvider } from "./contexts/UserContext"
import { useState } from "react"
import { HabitsToday } from "./components/HabitsToday"

function App() {
  const [percentage, setPercentage] = useState(0.1)

  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/habits' element={<Habits percentage={percentage} setPercentage={setPercentage}/>}></Route>
            <Route path='/habitstoday'element={<HabitsToday percentage={percentage} setPercentage={setPercentage}/>}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
