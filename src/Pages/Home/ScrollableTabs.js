import React, { useContext, useState } from 'react';
import { secondaryColor } from '../../Constants/colors';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { GlobalStateContext } from '../../Context/GlobalStateContext';
import { StyledAppBar, StyledTab } from './Styled';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     'aria-controls': `scrollable-auto-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  selected: {
    border: "none",
    outline: 'none',
    color: secondaryColor
  }
}));

export default function ScrollableTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const { data } = useContext(GlobalStateContext);
  const { category, setCategory } = data;

  const restaurantFilter = ( type ) => { 
    if( type === category) { 
        setCategory("")
    }
    else{
        setCategory(type)
    } 
  } 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <StyledAppBar position="static" color="white" style={{ boxShadow: 'none' }}>
        <Tabs selectionFollowsFocus={false}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            style={{ textTransform: 'capitalize'}} 
            label="Árabe" onClick={()=>restaurantFilter("Árabe")}
          />
          <Tab
            style={{ textTransform: 'capitalize' }} 
            label="Asiática" onClick={()=>restaurantFilter("Asiática")}
          />
          <Tab 
            style={{ textTransform: 'capitalize' }} 
            label="Hamburguer" onClick={()=>restaurantFilter("Hamburguer")}
          />
          <Tab 
            style={{ textTransform: 'capitalize' }} 
            label="Italiana" onClick={()=>restaurantFilter("Italiana")}
          />
          <Tab 
            style={{ textTransform: 'capitalize' }} 
            label="Sorvetes" onClick={()=>restaurantFilter("Sorvetes")}
          />
          <Tab 
            style={{ textTransform: 'capitalize' }} 
            label="Carnes" onClick={()=>restaurantFilter("Carnes")}
          />
          <Tab 
            style={{ textTransform: 'capitalize' }} 
            label="Baiana" onClick={()=>restaurantFilter("Baiana")}
          />
          <Tab 
            style={{ textTransform: 'capitalize' }} 
            label="Petiscos" onClick={()=>restaurantFilter("Petiscos")}
          />
          <Tab 
            style={{ textTransform: 'capitalize' }} 
            label="Mexicana" onClick={()=>restaurantFilter("Mexicana")}
          />
        </Tabs>
      </StyledAppBar>
    </div>
  );
}