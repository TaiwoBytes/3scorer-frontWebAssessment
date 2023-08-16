import React from 'react';
import DashboardHeader from '../DashboardHeader';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import Sidebar from '../Sidebar';

const DashboardLayout = ({ children, section }) => {
  return (
   <DashboardContainer>
      <Sidebar />
      <DashboardContentWrapper>
      <DashboardHeader section={section}  />
   <DashboardContent>{children}</DashboardContent>
      </DashboardContentWrapper>
    </DashboardContainer>
  );
};

export default DashboardLayout;


const DashboardContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background: ${COLORS.bgDashboard};
`;

const DashboardContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const DashboardContent = styled.div`
  flex: 1;
  overflow-y: scroll;
  height: 100%;
  padding: 3rem 6rem 7rem 6rem;
  .profile-tab {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: red;
  }
`;
