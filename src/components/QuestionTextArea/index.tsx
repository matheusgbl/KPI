/* eslint-disable no-unused-vars */
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Container } from './styles';

type QuestionTextAreaProps = {
  title: string;
  button_text: string;
  onChange: (e: any) => void;
  onClick: () => void;
};

export default function QuestionTextArea({
  title,
  button_text,
  onChange,
  onClick,
}: QuestionTextAreaProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <TextareaAutosize minRows={6} className="write_question" onChange={onChange} />
      <Button
        onClick={onClick}
        variant="outlined"
        className="finalize-questions-btn"
        component={RouterLink}
        to="/results"
        endIcon={<CheckIcon />}>
        {button_text}
      </Button>
    </Container>
  );
}
