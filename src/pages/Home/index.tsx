import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import logo from '../../assets/logo.png';
import { db } from '../../firebase-config';
import { Container } from './styles';

export default function Home() {
  const [answer, setAnswer] = useState(false);

  const answerCollectionRef = collection(db, 'answers');

  useEffect(() => {
    addDoc(answerCollectionRef, { answer: answer });
  });

  const handleChange = () => setAnswer((prevState) => !prevState);
  const error = !answer;

  return (
    <Container>
      <img src={logo} alt="Key People Insights logo" className="logo" />
      <h1>Seja bem-vindo(a) a nossa pesquisa de satisfação!</h1>
      <Button variant="contained" endIcon={<PlayArrowOutlinedIcon />} disabled={!answer}>
        {' '}
        Iniciar Pesquisa
      </Button>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={answer} onChange={handleChange} name="Privacy" />}
            label="Concordo com os termos ao iniciar a pesquisa."
          />
        </FormGroup>
        <FormHelperText>
          Para iniciar, você precisa concordar com os termos.
        </FormHelperText>
      </FormControl>
    </Container>
  );
}
