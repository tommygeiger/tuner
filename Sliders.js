import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


var vals;
const useStyles = makeStyles({
  root: {
    height: 300       //this defines length of slider for vertical sliders
  },
});

export function valuetext(value) {
  return `${value}°C`;
}

export function getValue(value){
  vals=value;
  return vals;
}



export function Sliders() {
  const classes = useStyles();
  
  return (
    
    <div className={classes.root}>
      <Typography id="vertical-slider" gutterBottom>
        Energy - Accousticness
      </Typography>
      
      <Slider
        defaultValue={50}
        //export val = {valuetext}
        getAriaValueText={valuetext}
        orientation= "vertical"
        aria-labelledby="vertical-slider"
        valueLabelDisplay="auto"
        onChange={(e,val)=> vals=val}             //THIS IS THE PROBLEM
        //onDragStop = { (e) => this.props.update(e, control.id, this.val)}
        step={5}

        min={0}
        max={100}
      />
      
      {/* <Typography id="discrete-slider" gutterBottom>
        Accousticness
      </Typography> */}
      
      <Slider
        defaultValue={50}
        //val = {valuetext}
        getAriaValueText={valuetext}
        orientation= "vertical"
        aria-labelledby="vertical-slider"
        valueLabelDisplay="auto"
        step={5}
        min={0}
        max={100}
      />

      
      
    </div>
    
  );
  
}

export default Sliders;