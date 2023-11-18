import React from 'react';
import { Fab, makeStyles } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const FloatingActionButton = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleSection1Click = () => {
    history.push('/section1'); // Navigate to the desired route for section 1
  };

  const handleSection2Click = () => {
    history.push('/section2'); // Navigate to the desired route for section 2
  };

  return (
    <div>
      <Fab className={classes.fab} color="primary" aria-label="Add">
        <AddIcon />
      </Fab>
      <Fab
        className={classes.fab}
        color="secondary"
        aria-label="Section 1"
        onClick={handleSection1Click}
        style={{ bottom: 75 }}
      >
        1
      </Fab>
      <Fab
        className={classes.fab}
        color="secondary"
        aria-label="Section 2"
        onClick={handleSection2Click}
        style={{ bottom: 130 }}
      >
        2
      </Fab>
    </div>
  );
};

export default FloatingActionButton;
