import styled from 'styled-components';
import { TextUnderLine, DateAndTime, Text, TextWrapper } from '../HcpCredentials.style';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 35px;
`;
export const UnderLinedText = styled(TextUnderLine)`
  font-style: italic;
`;
export const StyledLine = styled(DateAndTime)`
  margin-bottom: 7px;
`;
export const HeaderText = styled(Text)`
  font-family: MuseoSans, Segoe UI;
  font-weight: 300;
  font-size: 1rem;
`;
export const Content = styled(DateAndTime)`
  font-family: MuseoSans, Segoe UI;
  font-size: 1.125rem;
  font-weight: 500;
`;
export const StyledTextWrapper = styled(TextWrapper)`
  margin-top: 38px;
`;
