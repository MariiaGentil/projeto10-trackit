import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./contexts/UserContext"
import { PercentProvider } from "./contexts/PercentContext"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { Habits } from "./components/Habits"
import { HabitsToday } from "./components/HabitsToday"
import { HabitsHistory } from "./components/HabitsHistory"
import GlobalStyle from "./styles/globalStyles"
import ResetCss from "./styles/resetCss"

function App() {

  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <UserProvider>
      <PercentProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/habits' element={<Habits/>}></Route>
            <Route path='/habitstoday'element={<HabitsToday/>}></Route>
            <Route path='/habitshistory'element={<HabitsHistory/>}></Route>
          </Routes>
        </BrowserRouter>
        </PercentProvider>
      </UserProvider>
    </>
  )
}

export default App
