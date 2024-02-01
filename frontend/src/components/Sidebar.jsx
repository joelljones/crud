const Sidebar = () => {
  const navTop = [
    {
      href: 'javascript:void(0)',
      name: 'Canada',
      icon: '🇨🇦',
    },
    {
      href: 'javascript:void(0)',
      name: 'United States',
      icon: '🇺🇸',
    },
    {
      href: 'javascript:void(0)',
      name: 'Mexico',
      icon: '🇲🇽',
    },
  ];

  const navBottom = [
    {
      href: 'javascript:void(0)',
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

  return (
    <>
      <nav className="h-screen md:w-[250px] lg:w-[336px] bg-gray-med space-y-8">
        <div className="flex flex-col h-full">
          {/* TITLE / LOGO */}
          <div className="h-20 flex items-center justify-center px-8 md:text-5xl lg:text-6xl">
            <a href="javascript:void(0)" className="text-white">
              {/* <img
                src="https://floatui.com/logo.svg"
                width={140}
                className="mx-auto"
              /> */}
              Passport
            </a>
          </div>

          <div className="flex-1 flex flex-col h-full overflow-auto">
            {/* LOCATIONS */}
            <ul className="mt-4 px-4 text-sm font-medium flex-1">
              {navTop.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-gray-light-hover active:bg-gray-light-hover duration-150"
                  >
                    <div className="mt-1">{item.icon}</div>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              {/* LOGOUT */}
              <ul className="px-4 pb-4 text-sm font-medium">
                {navBottom.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="flex items-center gap-x-2 text-white p-2 rounded-lg  hover:bg-gray-light-hover active:bg-gray-light-hover duration-150"
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* <div className="py-4 px-4 border-t">
                <div className="flex items-center gap-x-4">
                  <img
                    // src="https://randomuser.me/api/portraits/women/79.jpg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <span className="block text-gray-700 text-sm font-semibold">
                      Alivika tony
                    </span>
                    <a
                      href="javascript:void(0)"
                      className="block mt-px text-gray-600 hover:text-indigo-600 text-xs"
                    >
                      View profile
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
