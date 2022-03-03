/* eslint-disable no-unused-vars */
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import React from 'react';

import { Container, Content } from './styles';

type QuestionProps = {
  title: string;
  answers: Array<any>;
  disabled: boolean;
  button_text: string;
  onChange: (e: any) => void;
  onClick: () => void;
};

export default function Question({
  title,
  answers,
  disabled,
  button_text,
  onChange,
  onClick,
}: QuestionProps) {
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        <FormControl className="question-form">
          <RadioGroup name="controlled-radio-buttons-group" onChange={onChange}>
            {answers.map((answer) => (
              <FormControlLabel
                key={answer.id}
                value={answer.answer}
                control={<Radio />}
                label={answer.answer}
                id={answer.id}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Content>
      <Button
        onClick={onClick}
        disabled={disabled}
        variant="outlined"
        className="next-question-btn"
        endIcon={<ArrowForwardIosOutlinedIcon />}>
        {button_text}
      </Button>
    </Container>
  );
}
