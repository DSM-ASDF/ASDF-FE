import styled from "styled-components";
import { Dots } from "../../assets";
import { color } from "../../styles/color";
import { Font } from "../../styles/Font";

export const Comment = () => {
  return (
    <Container>
      <CommentHeader>
        <UserInfoTimeWrap>
          <ProfileImage></ProfileImage>
          <UserIdTimeWrap>
            <UserId>포로리</UserId>
            <Time>지금</Time>
          </UserIdTimeWrap>
        </UserInfoTimeWrap>
        <Dots size={20} color={color.gray300} />
      </CommentHeader>
      <CommentContent>안녕하세요</CommentContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 24px;
  border: 1px solid ${color.gray700};
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfoTimeWrap = styled.div`
  display: flex;
  gap: 12px;
`;

const ProfileImage = styled.image`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: ${color.gray500};
`;

const UserIdTimeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const UserId = styled.p`
  color: ${color.gray300};
`;

const Time = styled.p`
  ${Font.medium[14]};
  color: ${color.gray400};
`;

const CommentContent = styled.p`
  color: ${color.gray200};
`;
