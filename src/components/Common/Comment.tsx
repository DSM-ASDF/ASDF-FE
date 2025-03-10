import styled from "styled-components";
import { color } from "../../styles/color";
import { Font } from "../../styles/font";
import { CommentType } from "../../utils/dummy/TaskDummy";

export const Comment = ({ commentId, profile, userId, commentDate, commentContent }: CommentType) => {

  return (
    <Container>
      <UserInfoTimeWrap>
        <ProfileImage src={profile} />
        <UserIdTimeWrap>
          <UserId>{userId}</UserId>
          <Time>{commentDate}</Time>
        </UserIdTimeWrap>
      </UserInfoTimeWrap>
      <CommentContent>{commentContent}</CommentContent>
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

const UserInfoTimeWrap = styled.div`
  display: flex;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${color.gray500};
  object-fit: cover;
`

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
