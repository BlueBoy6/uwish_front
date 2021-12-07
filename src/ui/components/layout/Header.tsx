import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Section from './Section';
import Button from '../form/Button';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const disconnect = () => {
    //TO IMPROVE
    sessionStorage.clear();
    dispatch({ type: 'user/disconnect' });
    navigate('/');
  };
  const back = () => {
    navigate(-1);
    dispatch({ type: 'group/clean' });
  };

  return (
    <Section>
      <GridContainer>
        <ButtonStyled onClick={back}>← Retour</ButtonStyled>
        <ButtonStyled onClick={disconnect}>🏃 J'me barre</ButtonStyled>
      </GridContainer>
    </Section>
  );
}
const GridContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ButtonStyled = styled(Button)`
  display: inline-grid;
`;
