import React, { useContext, useState } from 'react'
import { Typography, withStyles, Slider, Tooltip, IconButton, Box, Switch } from '@material-ui/core'
import { SearchContext } from './SearchContext'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


const ParamTip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#ffffff',
    color: "#000000",
    maxWidth: 400,
    fontSize: ".75em",
  },
}))(Tooltip);


function ParamSlider(props) {
  const { params, setParams } = useContext(SearchContext);
  const [state, setState] = useState({checked: false, value: 50});
  const [nothing, doNothing] = useState(null)

  function handleChange() {
    //Handle when the switch is checked/unchecked
    (state.checked ? 
      params[props.param] = null
    :
      params[props.param] = state.value
    )
    
    setState({checked:!state.checked, value:state.value})
  }

  return (
      <Box display="flex" style={{alignItems:"center", paddingTop:5, paddingRight:20, paddingLeft:5}}>
          
        <ParamTip 
          interactive
          title={props.description}
          placement="right">
          <IconButton style={{height:'.75em', width:'.75em'}}>
            <InfoOutlinedIcon style={{height:'.75em', width:'.75em'}} />
          </IconButton>
        </ParamTip>
        
          <Typography
            variant="subtitle1" 
            style={{minWidth:110, textAlign:"left", textTransform: "capitalize"}}>
             {props.param}
          </Typography>

              
        <div style={{paddingRight:20}}>
          <Switch
            size="small"
            color="primary"
            checked={state.checked}
            onChange={handleChange}
            name="checked"
            inputProps={{ 'aria-label': 'Checkbox' }}
          />
        </div>

        <>
          
          <Slider
            color="primary"
            disabled={!state.checked}
            valueLabelDisplay="auto"
            aria-label={props.param}
            defaultValue={50}
            onChangeCommitted={(event, value) => {
              params[props.param] = value
              setState({checked:state.checked, value:value})
              doNothing()
            }}
          ><span>{nothing}</span></Slider>
        </>

      </Box>    
  );
  
}

export default ParamSlider;