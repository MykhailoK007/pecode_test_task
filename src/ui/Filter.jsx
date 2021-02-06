import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: '30px',
  },
  label: {
    textAlign: 'center',
    width: '100%',
  },
  select: {
    margin: '0 auto',
    width: '30%',
    color: 'grey',
    background: 'none',
  },
}));

export const Filter = props => {
  const classes = useStyles();
  const [filter, setFilter] = useState('none');
  const handleChange = e => {
    setFilter(e.target.value);
  };
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id='filterBy' className={classes.label}>
        Filter by
      </InputLabel>
      <Select
        className={classes.select}
        labelId='filterBy'
        onChange={handleChange}
        value={filter}>
        <MenuItem value={filter}>none</MenuItem>
        {props.fields.map((field, index) => {
          return (
            <MenuItem value={field} key={index}>
              {field}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
