import Boxcard from "./Boxcard"
import Grid from '@material-ui/core/grid';
import {useState} from 'react'
function Selectcolor() {
   
    const [Rgb, setrgb] = useState({r:0,g:0,b:0})
    function colorchange(e){
       let hexa= e.target.value
       let value=hex2rgb(hexa)
       setrgb(value)
    //    console.log(value.r);       

    }
    function hex2rgb(hex) {
        var validHEXInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        if (!validHEXInput) {
          return false;
        }
        var output = {
          r: parseInt(validHEXInput[1], 16),
          g: parseInt(validHEXInput[2], 16),
          b: parseInt(validHEXInput[3], 16),
        };
        return output;
      } 
    return (
        <div>
            <Boxcard> 
            <Grid container spacing={6}>
                <Grid item >
                   <div style={{width:"40px",height:`${Rgb.r}px`,backgroundColor:"red"}} >
                       <b >{Rgb.r+"px"}</b>
                       <p>{(Rgb.r/255*100).toFixed(2)+"%"}</p>
                     
                       </div>                   
                </Grid>
                <Grid item > 
                <div style={{width:"40px",height:`${Rgb.g}px`,backgroundColor:"blue"}}>
                <b >{Rgb.g+"px"}</b>
                <p>{(Rgb.g/255*100).toFixed(2)+"%"}</p>
                    </div>                  
                </Grid>
                <Grid item > 
                <div style={{width:"40px",height:`${Rgb.g}px`,backgroundColor:"green"}}>
                <b >{Rgb.b+"px"}</b>
                <p>{(Rgb.b/255*100).toFixed(2)+"%"}</p>
                    </div>                  
                </Grid>
               
            </Grid>
            <Grid container spacing={5}>
                <Grid item >
                    <input type="color" onChange={colorchange} style={{position:"absolute",bottom:"0px",left:"40%"}}/>
                 </Grid>

            </Grid>

            </Boxcard>

        </div>
    )
}

export default Selectcolor
