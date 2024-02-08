import { Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ErrorAlert from './ErrorAlert.jsx';

export default function PostMenu({ post }) {
  let [isOpen, setIsOpen] = useState(false);
  const [caption, setCaption] = useState(post.caption);
  const [error, setError] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // HANDLE EDIT
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const updatedCaption = caption;

    const res = await fetch('http://localhost:3000/api/posts/' + post._id, {
      method: 'PATCH',
      body: JSON.stringify({ caption: updatedCaption }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
    }
    if (res.ok) {
      setCaption('');
      setError(null);
      console.log('Post edited:', json);
      closeModal(); // close modal here to prevent close on submit when error is present
    }
  };

  // HANDLE DELETE
  const handleDeleteClick = async () => {
    const res = await fetch('http://localhost:3000/api/posts/' + post._id, {
      method: 'DELETE',
    });
    const json = await res.json();

    if (res.ok) {
      console.log('Post deleted:', json);
    }
  };

  return (
    <>
      <div className="absolute top-0 right-0">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-full px-2 py-2 hover:bg-gray-light focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8.5 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM15.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-44 origin-top-right rounded-md bg-gray-light shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={openModal}
                      className={`${
                        active
                          ? 'bg-gray-light-hvr text-gray-light-txt'
                          : 'bg-transparent'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <EditActiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <EditInactiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Edit
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleDeleteClick}
                      className={`${
                        active
                          ? 'bg-gray-light-hvr text-gray-light-txt'
                          : 'bg-transparent'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DeleteActiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <DeleteInactiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {/* MODAL */}
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
                  <form onSubmit={handleEditSubmit}>
                    {/* HEADER */}
                    <div className="border-b border-gray-light h-[60px] flex items-center justify-center">
                      <div className="flex-grow flex items-center justify-center">
                        <Dialog.Title
                          as="h3"
                          className="text-xl font-bold leading-6 text-gray-light-txt text-center"
                        >
                          Edit post
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

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="currentColor" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="currentColor" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
