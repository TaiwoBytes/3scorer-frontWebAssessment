import { COLORS } from '../../constants/colors';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 8px 20px 0px rgba(181, 181, 181, 0.2);
`;

export const TabName = styled.p`
  color: ${COLORS.colorPrimary};
  font-size: 32px;
  font-weight: 600;
  margin-left: 40px;
`;

export const ProfileWrapper = styled.div`
  width: 96px;
  height: 44px;
  display: flex;
  align-items: center;
  margin-right: 40px;
  cursor: pointer;

  .profileName {
    color: ${COLORS.black};
    font-size: 16px;
    font-weight: 600;
  }

  .profileRole {
    color: ${COLORS['text-gray']};
    font-size: 14px;
    font-weight: 400;
  }
`;

// export const ProfilePhoto = styled.div`
//   margin-right: 0px;
// `;
