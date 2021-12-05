import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Section from './Section';

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
        navigate(-1)
        dispatch({type: 'group/clean'})
    };

  return (
    <SectionStyle>
      <button onClick={back}>Retour</button>
      <button onClick={disconnect}>J'me barre</button>
    </SectionStyle>
  );
}

const SectionStyle = styled(Section)`
  display: grid;
  margin: 20px;
`;
