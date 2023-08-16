import { COLORS } from '../../constants/colors';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  background: ${COLORS.colorPrimary};
  height: 100%;
  overflow-y: auto;
  min-width: 206px;
  padding-top: 45px;
  .sidebar__name {
    text-align: center;
    margin-bottom: 13px;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const SideNavLinkText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.7rem;
`;

export const SidebarLinkWrapper = styled.div`
  & > :first-child {
    margin-bottom: 15px;
    padding-left: 3.3rem;
  }

  .nav-link {
    color: ${COLORS.white};
    white-space: nowrap;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 5px 15px 5px 32px;
    margin: 5px 0 10px 0;
    &--selected {
      background: ${COLORS.colorSecondary};
      border-right: 5pxm ${COLORS.colorSecondary} solid;
      color: ${COLORS.black};
    }
  }
`;
