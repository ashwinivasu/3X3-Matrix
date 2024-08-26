import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
  const initialColors = Array(9).fill('white'); // Initialize all boxes with white color
  const [colors, setColors] = useState(initialColors);
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (clickOrder.includes(index)) return; // Prevent clicking the same box multiple times

    const newColors = [...colors];
    newColors[index] = 'black'; // Change clicked box to green
    setColors(newColors);

    const newClickOrder = [...clickOrder, index];
    setClickOrder(newClickOrder);

    if (newClickOrder.length === 9) {
      // All boxes clicked, change all to orange in the order of clicks
      newClickOrder.forEach((idx, i) => {
        setTimeout(() => {
          const updatedColors = [...newColors];
          updatedColors[idx] = 'white';
          setColors(updatedColors);
        }, i * 300); // Delay to show order of color change
      });
    }
  };

  return (
    <div className="matrix">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Matrix;
