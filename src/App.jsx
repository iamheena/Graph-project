import Selectcolor from "./Selectcolor"
import Grid from '@material-ui/core/grid';
import {useState} from 'react';

function App() {
    let x=[<Grid item><Selectcolor/></Grid>]
    const [data, setdata] = useState(x)
    function click(){
        let xy=[...data,<Grid item><Selectcolor/></Grid>]
        setdata(xy)
    }
    return (
        <div>
            <button onClick={click}>+</button>
            <Grid container>
            {data.map((d)=>{
                return d;
            })}
            </Grid>
        </div>
    )
}

export default App
