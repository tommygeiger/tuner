import React, { useContext, useState } from 'react'
import { Typography, withStyles, Slider, Tooltip, IconButton, Box, Switch, ClickAwayListener, isWidthDown } from '@material-ui/core'
import { SearchContext } from './SearchContext'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


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


function ParamSlider(props) {

  const { params, setParams } = useContext(SearchContext);
  const [isOn, setSwitch] = useState(false)
  const [value, setValue] = useState(50)
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }
  const handleTooltipOpen = () => {
    (open ? setOpen(false) : setOpen(true))
  }

  function handleChange() {
    //Handle when the switch is checked/unchecked
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
  }


  return (
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
            style={{minWidth:110, textAlign:"left", textTransform: "capitalize"}}>
             {props.param}
          </Typography>

              
        <div style={{paddingRight:20}}>
          <Switch
            size="small"
            color="primary"
            checked={isOn}
            onChange={handleChange}
            name="checked"
            inputProps={{ 'aria-label': 'switch' }}
          />
        </div>

          <Slider
            color="primary"
            disabled={!isOn}
            valueLabelDisplay="auto"
            aria-label={props.param}
            defaultValue={50}
            onChange={(event, value) => {
              //Update params
              let temp = {...params}
              temp[props.param] = value
              setParams(temp)
              //Update local value
              setValue(value)
            }}
          />

      </Box>    
  );
  
}

export default ParamSlider;