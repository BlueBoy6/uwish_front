import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Bands() {
  const bands = useSelector((state: any) => state?.user?.bands);
  const navigate = useNavigate();

  return (
    <GroupStyled>
      <h2>Vos groupes</h2>
      <BandsList>
        {bands
          ? bands.map((band: any) => (
              <BandStyle
                onClick={() => navigate(`/group/${band.id}`)}
                key={band.id}
              >
                {band.name}
              </BandStyle>
            ))
          : "Vous n'êtes dans aucun groupe"}
      </BandsList>
    </GroupStyled>
  );
}

const GroupStyled = styled.div`
  margin-top: 20px;
`;

const BandsList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px 10px;
`;

const BandStyle = styled.div`
  padding: 10px;
  background: #efefef;
  border-radius: 5px;
  border-left: 4px solid #3fff54;
  cursor: pointer;
  &:hover {
    background: #e3e3e3;
  }
  &:active {
    background: #b3b3b3;
  }
`;
