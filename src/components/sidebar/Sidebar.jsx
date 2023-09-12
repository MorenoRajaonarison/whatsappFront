import React from 'react';
import SidebarHeader from './sidebarHeader/SidebarHeader';

const Sidebar = () => {
  return (
    <div className='w-[40%] h-full select-none'>
      {/* sidebar header */}
      <SidebarHeader/>
    </div>
  );
}

export default Sidebar;
