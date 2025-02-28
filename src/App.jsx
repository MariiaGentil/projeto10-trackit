import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { Habits } from "./components/Habits"
import ResetCss from "./styles/resetCss"
import GlobalStyle from "./styles/globalStyles"
import { UserProvider } from "./contexts/UserContext"

function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/habits' element={<Habits />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App
