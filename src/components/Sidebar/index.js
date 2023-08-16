// import { DPIconActiveEdge } from 'assets/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarContent } from '../../utilities/SidebarContent';
import {
  SidebarContainer,
  SidebarLinkWrapper,
  SideNavLinkText,
} from './styles';
import { FWIconLogo } from '../assets';

function Sidebar() {
  const clearStorage = () => {
    localStorage.removeItem('route');
  };
  return (
    <SidebarContainer>
      <div className="sidebar__name">
        <FWIconLogo />
      </div>
      <SidebarLinkWrapper>
        {SidebarContent.map(({ route, icon, text }) => {
          return (
            <NavLink
              onClick={() => clearStorage()}
              key={Math.random()}
              to={route}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--selected' : ''}`
              }
            >
              <span>{icon}</span> <SideNavLinkText>{text}</SideNavLinkText>
            </NavLink>
          );
        })}
      </SidebarLinkWrapper>
      <div className="sidebar__footer">
        <div className="footer">{/* <DPIconActiveEdge /> */}</div>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;
