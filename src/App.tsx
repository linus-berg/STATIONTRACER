import styled from 'styled-components';
import './App.scss'
import {Departures} from "./components/Departures";
import {Weather} from "./components/Weather";
import {Restaurant} from "./components/Restaurant";
import {Clock} from "./components/Clock";


const Grid = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 100vh;
`;

const Div = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

function App() {

  return (
    <Grid>
      <Div>
        <Departures />
      </Div>
      <Div>
        <Weather />
      </Div>
      <Div>
        <Restaurant />
      </Div>
      <Div>
        <Clock />
      </Div>
    </Grid>
  )
}

export default App
