import React from 'react';

export const Filter = props => {
  const capitalizedWord = word => word.charAt(0).toUpperCase() + word.slice(1);
  return (
    <div>
      <select
        onChange={e => {
          props.handleChange({
            name: e.target.options[e.target.selectedIndex].parentNode.label,
            value: e.target.value,
          });
        }}>
        {props.optGrups.map((group, index) => {
          console.log(group.name);
          return (
            <optgroup
              label={capitalizedWord(group.name)}
              value={group.name}
              key={index}>
              {group.value.map((option, index) => {
                return (
                  <option value={option} name={group.name} key={index}>
                    {capitalizedWord(option)}
                  </option>
                );
              })}
            </optgroup>
          );
        })}
      </select>
    </div>
  );
};
