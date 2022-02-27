import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import React, { useState } from 'react';

import { Container } from './styles';

type QuestionProps = {
  questions: string;
};

export default function Questions({ questions }: QuestionProps) {
  const [state, setState] = useState({
    gilad: false,
    jason: false,
    antoine: false,
    john: false,
    sett: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine, john, sett } = state;

  return (
    <Container>
      <h2>Pergunta 1</h2>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Resposta 1"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Resposta 2"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Resposta 3"
          />
          <FormControlLabel
            control={<Checkbox checked={john} onChange={handleChange} name="antoine" />}
            label="Resposta 4"
          />
          <FormControlLabel
            control={<Checkbox checked={sett} onChange={handleChange} name="antoine" />}
            label="Resposta 5"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <Button variant="outlined" startIcon={<ArrowForwardIosOutlinedIcon />}>
        Próxima
      </Button>
    </Container>
  );
}
