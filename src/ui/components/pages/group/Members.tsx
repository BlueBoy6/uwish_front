import styled from 'styled-components';

export default function Members({ members }: { members: [] }) {
  return (
    <div>
      <h2>Les membres du groupe</h2>
      <MembersStyle>
        {members && members.map((member: any) => (
          <Member key={member.id}>{member.username}</Member>
        ))}
      </MembersStyle>
    </div>
  );
}

const Member = styled.div`
  padding: 5px;
  background: #efefef;
  color: #2f2f2f;
  border-radius: 5px;
  text-align: center;
  border-left: 4px solid #3fff54;
`;
const MembersStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px 10px;
`;
