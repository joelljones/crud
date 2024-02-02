import React, { useState } from 'react';

const DynamicTextarea = React.forwardRef((props, ref) => {
  const [value, setValue] = useState('');
  const [minHeight, setMinHeight] = useState('auto'); // Initialize minHeight as 'auto'

  const handleChange = (e) => {
    setValue(e.target.value);
    const newHeight = `${e.target.scrollHeight}px`; // Calculate the new height

    // Update minHeight if the new height exceeds the current height
    if (newHeight !== minHeight) {
      setMinHeight(newHeight);
    }
  };

  return (
    <textarea
      ref={ref}
      {...props}
      style={{ minHeight }} // Set the minHeight inline style
      className="overflow-y-hidden rounded-full bg-gray-light px-4 py-2 text-sm font-medium text-gray-med-txt focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 w-full text-left resize-none h-9"
      value={value}
      onChange={handleChange}
      placeholder="Write a comment..."
    />
  );
});

export default DynamicTextarea;
