import './Button.css';
import PropTypes from 'prop-types';

// export const Button = ({ onloadMore }) => {
//   return (
//     <div className="Button-container" onClick={onloadMore}>
//       <button type="button" className="Button">
//         Load more
//       </button>
//     </div>
//   );
// };

import React, { useState } from "react";

export const Button = ({ onloadMore }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onloadMore();
    setIsLoading(false);
  };

  return (
    <div className="Button-container" onClick={handleClick}>
      <button
        type="button"
        className={`Button ${isLoading ? "Button--loading" : ""}`}
      >
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};