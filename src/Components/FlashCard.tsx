import { useCallback, useMemo, useState } from 'react';
import { Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import { shuffle } from 'lodash';

import Figure from './Figure';

const FlashCard = ({
  card,
  previewMode,
  highlightCorrectAnswer,
  onAnswered = () => {},
}: {
  card: {
    question: string;
    wrongAnswers: string[];
    correctAnswer: string;
    figures?: string[];
    hint?: string;
    id: string;
  };
  onAnswered?: (answer: number) => void;
  previewMode?: boolean;
  highlightCorrectAnswer?: boolean;
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number>(previewMode ? 0 : -1);
  const [isShowingHint, setIsShowingHint] = useState(false);
  const isSubmitDisabled = useMemo(() => selectedAnswer === -1, [selectedAnswer]);

  const handleAnswerChange = useCallback(
    (_e: unknown, value: string) => {
      const answer = Number(value);
      if (isNaN(answer) || answer === -1) return;
      setSelectedAnswer(answer);
    },
    [setSelectedAnswer],
  );

  const onSubmit = useCallback(() => {
    if (isSubmitDisabled) return;
    onAnswered(selectedAnswer);
  }, [isSubmitDisabled, selectedAnswer, onAnswered]);

  const onShowHint = useCallback(() => {
    setIsShowingHint(true);
  }, []);

  const answers = useMemo(() => {
    const formControls = [card.correctAnswer, ...card.wrongAnswers].map((answer, index) => (
      <FormControlLabel
        style={{ background: index === 0 && highlightCorrectAnswer ? 'lightblue' : 'white' }}
        key={`answer-${index}`}
        value={index}
        control={<Radio />}
        label={answer}
      />
    ));

    return shuffle(formControls);
  }, [card]);

  return (
    <Paper sx={{ padding: 3, display: 'flex', flexDirection: 'column' }}>
      <p>{card.question}</p>
      {card.figures?.map((figure) => <Figure src={`/figures/${figure}`} />)}
      <FormControl disabled={previewMode || false}>
        <FormLabel id="demo-radio-buttons-group-label">Answer</FormLabel>
        <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
          {...answers}
        </RadioGroup>
      </FormControl>
      {card.hint && !isShowingHint && <Button onClick={onShowHint}>Show Hint</Button>}
      {card.hint && isShowingHint && <p>Hint: {card.hint}</p>}
      {previewMode ? null : (
        <Button onClick={onSubmit} disabled={isSubmitDisabled}>
          Submit
        </Button>
      )}
      <Typography style={{ fontSize: '14px', color: 'lightgrey' }}>{card.id}</Typography>
    </Paper>
  );
};

export default FlashCard;
