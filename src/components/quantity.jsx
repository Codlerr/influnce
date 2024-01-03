import React, { useState } from 'react';

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button className="border px-3 p-1 font-poppins text-sm" onClick={handleDecrement}>
        -
      </button>
      <span className="border px-3 p-1 font-poppins text-sm">{quantity}</span>
      <button className="border px-3 p-1 font-poppins text-sm" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default QuantityButton;
