import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { Container, Content, ContentInfo } from './styles';

export default function Home() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked((prevState) => !prevState);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Key People Insights logo" className="logo" />
        <ContentInfo>
          <h1>Seja bem-vindo(a) a nossa pesquisa de satisfação!</h1>
          <p>
            Esta pesquisa consiste em avaliar como o funcionário (você) está se sentindo,
            e ajuda o RH a entender e melhorar a vida dos seus funcionários em diversos
            pontos.
          </p>
          <p>A pesquisa contempla alguns dos seguintes pontos: </p>
          <ul>
            <li>Satisfação em relação ao horário de trabalho.</li>
            <li>Relacionamento entre funcionários e equipes.</li>
            <li>Avaliação geral do seu gestor ou liderança.</li>
            <li>Benefícios disponibilizados pela empresa.</li>
          </ul>
        </ContentInfo>
        <Button
          variant="contained"
          endIcon={<PlayArrowOutlinedIcon />}
          disabled={!checked}
          component={RouterLink}
          className="start"
          to="/questions">
          {' '}
          Iniciar Pesquisa
        </Button>
        <FormControl className="terms" required component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={checked} onChange={handleChange} name="Privacy" />
              }
              label="Concordo com os termos ao iniciar a pesquisa."
            />
          </FormGroup>
        </FormControl>
      </Content>
    </Container>
  );
}
