import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Navbar() {
  const [mobileNavbarVisible, setMobileNavbarVisible] = useState(false);
  
  return (
    <div className="container mx-auto py-6 px-4 md:px-0">
      <div className="flex justify-between items-center">
        <a className="text-xl md:text-3xl font-bold" href="/">LOGO</a>

        <div className="flex-row-reverse items-center hidden md:block">
          <button className="ml-12 text-lg">
            Page 1
          </button>
          <button className="ml-12 text-lg">
            Page 2
          </button>
          <button className="ml-12 text-lg">
            Page 3
          </button>
        </div>

        {/* For mobile */}
        <button className="text-lg block md:hidden" onClick={() => setMobileNavbarVisible(true)}>
          <Icon icon="material-symbols:menu-rounded" />
        </button>

        {/* For mobile */}
        {mobileNavbarVisible && (
          <div className="block md:hidden h-screen w-screen absolute top-0 right-0 z-30 bg-gray-100">
            <div className="flex justify-between items-center pt-8 pb-4 px-4 border-b">
              <span className="text-center text-xl font-bold">LOGO</span>
              <button className="text-lg block md:hidden" onClick={() => setMobileNavbarVisible(false)}>
                <Icon icon="material-symbols:close-rounded" />
              </button>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4">
              <button className="text-lg" onClick={() => setMobileNavbarVisible(false)}>
                Page 1
              </button>
              <button className="text-lg" onClick={() => setMobileNavbarVisible(false)}>
                Page 2
              </button>
              <button className="text-lg" onClick={() => setMobileNavbarVisible(false)}>
                Page 3
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}