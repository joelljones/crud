import { useState } from 'react';

const Sidebar = () => {
  const navTop = [
    {
      href: '',
      name: 'General',
      icon: '🌎',
    },
    {
      href: '',
      name: 'Canada',
      icon: '🇨🇦',
    },
    {
      href: '',
      name: 'United States',
      icon: '🇺🇸',
    },
    {
      href: '',
      name: 'Mexico',
      icon: '🇲🇽',
    },
    {
      href: '',
      name: 'The Bahamas',
      icon: '🇧🇸',
    },
    {
      href: '',
      name: 'Cuba',
      icon: '🇨🇺',
    },
    // {
    //   href: '',
    //   name: 'Turks and Caicos',
    //   icon: '🇹🇨',
    // },
    // {
    //   href: '',
    //   name: 'Cayman Islands',
    //   icon: '🇰🇾',
    // },
    {
      href: '',
      name: 'Jamaica',
      icon: '🇯🇲',
    },
    {
      href: '',
      name: 'Haiti',
      icon: '🇭🇹',
    },
    {
      href: '',
      name: 'Dominican Republic',
      icon: '🇩🇴',
    },
    {
      href: '',
      name: 'Puerto Rico',
      icon: '🇵🇷',
    },
    {
      href: '',
      name: 'Belize',
      icon: '🇧🇿',
    },
    {
      href: '',
      name: 'Guatemala',
      icon: '🇬🇹',
    },
    {
      href: '',
      name: 'Honduras',
      icon: '🇭🇳',
    },
    {
      href: '',
      name: 'El Salvador',
      icon: '🇸🇻',
    },
    {
      href: '',
      name: 'Nicaragua',
      icon: '🇳🇮',
    },
    {
      href: '',
      name: 'Costa Rica',
      icon: '🇨🇷',
    },
    {
      href: '',
      name: 'Panama',
      icon: '🇵🇦',
    },
    {
      href: '',
      name: 'Colombia',
      icon: '🇨🇴',
    },
    {
      href: '',
      name: 'Venezuela',
      icon: '🇻🇪',
    },
    {
      href: '',
      name: 'Guyana',
      icon: '🇬🇾',
    },
    {
      href: '',
      name: 'Suriname',
      icon: '🇸🇷',
    },
    {
      href: '',
      name: 'French Guiana',
      icon: '🇬🇫',
    },
    {
      href: '',
      name: 'Brazil',
      icon: '🇧🇷',
    },
    {
      href: '',
      name: 'Ecuador',
      icon: '🇪🇨',
    },
    {
      href: '',
      name: 'Peru',
      icon: '🇵🇪',
    },
    {
      href: '',
      name: 'Bolivia',
      icon: '🇧🇴',
    },
    {
      href: '',
      name: 'Chile',
      icon: '🇨🇱',
    },
    {
      href: '',
      name: 'Paraguay',
      icon: '🇵🇾',
    },
    {
      href: '',
      name: 'Argentina',
      icon: '🇦🇷',
    },
    {
      href: '',
      name: 'Uruguay',
      icon: '🇺🇾',
    },
  ];

  const navBottom = [
    {
      href: '',
      name: 'Logout',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      ),
    },
  ];

  const [state, setState] = useState(false);

  return (
    <>
      <nav className="mx-[-16px] sm:mx-0 sm:h-screen sm:w-[250px] lg:w-[336px] bg-gray-med space-y-8">
        <div className="flex flex-col h-full">
          {/* TITLE / LOGO */}
          <div className="h-20 flex items-center justify-between px-8 text-5xl lg:text-6xl">
            <a href="" className="text-gray-light-txt">
              {/* <img
                src=""
                width={140}
                className="mx-auto"
              /> */}
              Passport
            </a>

            {/* OPEN & CLOSE NAV BTN */}
            <div className="sm:hidden">
              <button
                className="text-gray-light-txt hover:text-gray-light-hvr bg-transparent p-1"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`sm:flex flex-col flex-1 h-full overflow-auto ${
              !state && 'hidden'
            }`}
          >
            {/* LOCATIONS */}
            <ul className="mt-4 px-4 text-sm font-medium flex-1">
              {navTop.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-center gap-x-2 text-gray-med-txt p-2 rounded-lg  hover:bg-gray-light-hvr active:bg-gray-light-hvr duration-150"
                  >
                    <div className="mt-1">{item.icon}</div>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* LOGOUT */}
            <div className="mt-4 border-t border-gray-light">
              <ul className="p-4 text-sm font-medium">
                {navBottom.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="flex items-center gap-x-2 text-gray-med-txt p-2 rounded-lg  hover:bg-gray-light-hvr active:bg-gray-light-hvr duration-150"
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
