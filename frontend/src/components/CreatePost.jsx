import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ErrorAlert from './ErrorAlert.jsx';

export default function CreatePost() {
  let [isOpen, setIsOpen] = useState(false);
  const [caption, setCaption] = useState();
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState();
  const [error, setError] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = { caption, likes, comments };

    const res = await fetch('https://crud-mern.up.railway.app/api/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
    }
    if (res.ok) {
      setCaption();
      setLikes(0);
      setComments();
      setError(null);
      console.log('New post added:', json);
      closeModal(); // close modal here to prevent close on submit when error is present
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-x-2 border border-transparent rounded-lg pt-3 px-4 pb-4 bg-gray-med">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
          className="w-10 h-10 rounded-full bg-white"
        />
        <button
          type="button"
          onClick={openModal}
          className="rounded-full bg-gray-light px-4 py-2 text-sm font-medium text-gray-med-txt hover:bg-gray-light-hvr focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 w-full text-left h-10"
        >
          Write something...
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[500px] min-h-[451px] transform overflow-hidden rounded-2xl bg-gray-med text-left align-middle shadow-xl transition-all">
                  <form onSubmit={handleSubmit}>
                    {/* HEADER */}
                    <div className="border-b border-gray-light h-[60px] flex items-center justify-center">
                      <div className="flex-grow flex items-center justify-center">
                        <Dialog.Title
                          as="h3"
                          className="text-xl font-bold leading-6 text-gray-light-txt text-center"
                        >
                          Create post
                        </Dialog.Title>
                      </div>
                      <div
                        type="button"
                        onClick={closeModal}
                        className="absolute right-3 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#3a3b3c"
                          className="w-9 h-9 rounded-full hover:bg-gray-light-hvr"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* TEXTAREA */}
                    <textarea
                      className="w-full bg-gray-med p-4 text-2xl outline-none resize-none text-gray-light-txt"
                      placeholder="Write something..."
                      type="text"
                      onChange={(e) => setCaption(e.target.value)}
                      value={caption}
                    ></textarea>

                    {/* POST BUTTON */}
                    <div className="absolute bottom-0 w-full p-3">
                      <button
                        type="submit"
                        className="rounded-md bg-[#505151] px-4 py-2 text-[15px] font-medium text-[#ffffff4d] hover:bg-gray-light-hvr focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 w-full text-center h-10"
                      >
                        Post
                      </button>
                      {/* ERROR ALERT */}
                      {error && <ErrorAlert error={error} />}
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
