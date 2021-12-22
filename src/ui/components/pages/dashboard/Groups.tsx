import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'ui/components/form/Button';
import { useState } from 'react';
import ModalCreateGroup from './ModalCreateGroup';

export default function Groups() {
  const [isModalCreateGroupOpen, setIsModalCreateGroupOpen] = useState(false);

  const groups = useSelector((state: any) => {
    return state?.user?.groups;
  });

  const navigate = useNavigate();

  return (
    <GroupStyled>
      <h2>Vos groupes</h2>
      <GroupsList>
        <Button
          onClick={() => setIsModalCreateGroupOpen(!isModalCreateGroupOpen)}
        >
          Créer un groupe
        </Button>
        {groups
          ? groups.map((group: any) => (
              <GroupStyle
                onClick={() => navigate(`/group/${group.id}`)}
                key={group.id}
              >
                {group.name}
              </GroupStyle>
            ))
          : "Vous n'êtes dans aucun groupe"}
      </GroupsList>
      {isModalCreateGroupOpen && <ModalCreateGroup onClickout={() => setIsModalCreateGroupOpen(false)} />}
    </GroupStyled>
  );
}

const GroupStyled = styled.div`
  margin-top: 20px;
`;

const GroupsList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 10px;
`;

const GroupStyle = styled.div`
  padding: 10px;
  background: #efefef;
  border-radius: 5px;
  border-left: 4px solid #3fff54;
  cursor: pointer;
  place-items: center;
  &:hover {
    background: #e3e3e3;
  }
  &:active {
    background: #b3b3b3;
  }
`;
