import React from 'react';
import { HeaderContainer, ProfileWrapper, TabName } from './styles';
// import { FWIconProfile } from '../assets';

function DashboardHeader({ section }) {
  return (
    <HeaderContainer>
      <TabName>{section}</TabName>
      {/* <ProfilePhoto> */}
        {/* <FWIconProfile /> */}
      {/* </ProfilePhoto> */}
      <ProfileWrapper>
        <div>
          <p className="profileName">Rex Stephen</p>
          <p className="profileRole">Administrator</p>
        </div>
      </ProfileWrapper>
    </HeaderContainer>
  );
}

export default DashboardHeader;
