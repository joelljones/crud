import React, { useState } from 'react';
import ErrorAlert from './ErrorAlert.jsx';

const CreateComment = React.forwardRef((props, ref) => {
  const [value, setValue] = useState('');
  const [minHeight, setMinHeight] = useState('auto'); // Initialize minHeight as 'auto'
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);

  // HANDLE RESIZE
  const handleChange = (e) => {
    setValue(e.target.value);
    const newHeight = `${e.target.scrollHeight}px`; // Calculate the new height

    // Update minHeight if the new height exceeds the current height
    if (newHeight !== minHeight) {
      setMinHeight(newHeight);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = comment;

    const res = await fetch(
      'http://crud-mern.up.railway.app/api/posts/' +
        props.post._id +
        '/comments/',
      {
        method: 'POST',
        body: JSON.stringify({ text: newComment }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
    }
    if (res.ok) {
      setError(null);
      setComment(newComment);
      console.log('New comment added:', json);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative w-full flex items-center">
          <textarea
            ref={ref}
            {...props}
            style={{ minHeight }} // Set the minHeight inline style
            className="overflow-y-hidden rounded-3xl bg-gray-light pl-4 pr-8 py-2 text-sm font-medium text-gray-med-txt focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 w-full text-left resize-none h-9"
            onChange={(e) => {
              handleChange(e);
              setComment(e.target.value);
            }}
            value={comment}
            placeholder="Write a comment..."
          />
          <button
            type="submit"
            className="absolute top-o right-0 bg-transparent p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
            </svg>
          </button>
          {/* ERROR ALERT */}
          {error && <ErrorAlert error={error} className="flex" />}
        </div>
      </form>
    </>
  );
});

export default CreateComment;
