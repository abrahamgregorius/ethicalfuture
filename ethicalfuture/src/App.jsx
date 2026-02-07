import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PathOne from './pages/PathOne'
import PathTwo from './pages/PathTwo'
import PathOneOne from './pages/PathOneOne'
import PathOneTwo from './pages/PathOneTwo'
import PathTwoOne from './pages/PathTwoOne'
import PathTwoTwo from './pages/PathTwoTwo'
import ScrollToTop from './component/ScrollToTop'
import OutcomeOne from './pages/outcome/OutcomeOne'
import OutcomeTwo from './pages/outcome/OutcomeTwo'
import OutcomeThree from './pages/outcome/OutcomeThree'
import OutcomeFour from './pages/outcome/OutcomeFour'

function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <audio src="./stranger_things.mp3" loop autoPlay={"true"}></audio>

      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/1"} element={<PathOne></PathOne>}></Route>
        <Route path={"/2"} element={<PathTwo></PathTwo>}></Route>
        <Route path={"/1/1"} element={<PathOneOne></PathOneOne>}></Route>
        <Route path={"/1/2"} element={<PathOneTwo></PathOneTwo>}></Route>
        <Route path={"/2/1"} element={<PathTwoOne></PathTwoOne>}></Route>
        <Route path={"/2/2"} element={<PathTwoTwo></PathTwoTwo>}></Route>

        <Route path={"/out/1"} element={<OutcomeOne></OutcomeOne>}></Route>
        <Route path={"/out/2"} element={<OutcomeTwo></OutcomeTwo>}></Route>
        <Route path={"/out/3"} element={<OutcomeThree></OutcomeThree>}></Route>
        <Route path={"/out/4"} element={<OutcomeFour></OutcomeFour>}></Route>



      </Routes>
    </>
  )
}

export default App
