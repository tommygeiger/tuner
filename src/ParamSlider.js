import React, { useState } from 'react'
import { Typography, withStyles, Slider, Tooltip, IconButton, Box, Switch, ClickAwayListener } from '@material-ui/core'
import { SearchContext } from './SearchContext'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";



const ParamTip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#ffffff',
    color: "#000000",
    maxWidth: 200,
    fontSize: ".75em",
  },
  arrow: {
    "&::before": {
      backgroundColor: "#ffffff",
    }
  }
  
}))(Tooltip);


const customSlider = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        border: "2px solid currentColor",
      },
      valueLabel: {
        marginLeft: -4
      }
    }
  }
});


function ParamSlider(props) {

  const [isOn, setSwitch] = useState(false)
  const [value, setValue] = useState(50)
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }
  const handleTooltipOpen = () => {
    (open ? setOpen(false) : setOpen(true))
  }

  return (
    <SearchContext.Consumer>
    {({params, setParams}) => (


      <Box display="flex" style={{alignItems:"center", paddingTop:5, paddingRight:20, paddingLeft:5}}>
          
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
          <ParamTip
            arrow
            PopperProps={{
              disablePortal: true,
            }}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            onClose={handleTooltipClose}
            open={open}
            title={props.description}
            placement="right">
            <IconButton onClick={handleTooltipOpen} style={{height:'.75em', width:'.75em'}}>
              <InfoOutlinedIcon style={{height:'.75em', width:'.75em'}} />
            </IconButton>
          </ParamTip>
          </div>
        </ClickAwayListener>
        
          <Typography
            variant="subtitle1" 
            style={{minWidth:130, textAlign:"left", textTransform: "capitalize"}}>
             {props.param}
          </Typography>

              
        <div style={{paddingRight:20}}>
          <Switch
            size="small"
            color="primary"
            checked={isOn}
            onChange={() => {

              if (isOn) {
                let temp = {...params}
                temp[props.param] = null
                setParams(temp)
                setSwitch(false)
              } else {
                let temp = {...params}
                temp[props.param] = value
                setParams(temp)
                setSwitch(true)
              }

            }}
            name="checked"
            inputProps={{ 'aria-label': 'switch' }}
          />
        </div>
        

        <ThemeProvider theme={customSlider}>
          <Slider
            min={1}
            max={100}
            disabled={!isOn}
            valueLabelDisplay="auto"
            getAriaValueText={() => props.param}
            value={value}
            onChange={(event, value) => {

              //Update local value
              setValue(value)

              //Update params
              let temp = {...params}
              if (props.param === "popularity"){
                temp[props.param] = value //don't scale popularity
              } else {
                temp[props.param] = value/100
              }
              setParams(temp)

            }}
          />
          </ThemeProvider>

      </Box>

      )}
      </SearchContext.Consumer>

  );
  
}

export default ParamSlider