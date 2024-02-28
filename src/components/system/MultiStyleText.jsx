import React from 'react';

const MyComponent = ({ text, classes = [], style = {} }) => {
  let styles = [
    { color: 'red' },    // style for 'a'
    { color: 'blue' },   // style for 's'
    { color: 'green' },  // style for 't'
    { color: 'yellow' }, // style for 'r'
    { color: 'pink' }    // style for 'o'
  ];

  return (
    <>
      {text.split('').map((letter, index) => (
        <span 
          key={index} 
          className={classes[index] || ''} 
          // style={styles[index % styles.length]}
        >
          {letter}
        </span>
      ))}
    </>
  );
};

export default MyComponent;
