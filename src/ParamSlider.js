import React, { useContext } from 'react'
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import Switch from '@material-ui/core/Switch'
import Box from '@material-ui/core/Box'
import { SearchContext } from './SearchContext'


function ValueLabelComponent(props) {
  const { children, open, value } = props;
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};


function ParamSlider(props) {

  const { params, setParams } = useContext(SearchContext);
  const [state, setState] = React.useState({checked: false, value: 50});

  const handleChange = (event) => {
    
    //Set param to null
    (state.checked ? 
      params[props.param] = null
    :
      params[props.param] = state.value
    )

    setState({ ...state, [event.target.name]: event.target.checked })
    console.log(params)

  };

  return (
      <Box display="flex" style={{alignItems:"center"}}>

        <Typography style={{width:180, textAlign:"left", textTransform: "capitalize"}}>{props.param}</Typography>

        <Switch
          color="primary"
          checked={state.checked}
          onChange={handleChange}
          name="checked"
          inputProps={{ 'aria-label': 'Checkbox' }}
        />

        <Slider
          color="primary"
          disabled={!state.checked}
          ValueLabelComponent={ValueLabelComponent}
          aria-label="Value"
          defaultValue={50}
          onChange={(event, value) => {
            setState({checked:state.checked, value:value})
            params[props.param] = value
            console.log(params)
          }}
        />
      </Box>    
  );
  
}

export default ParamSlider;