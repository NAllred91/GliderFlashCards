import { useCallback, useMemo, useState } from 'react';
import FlashCard from '../Components/FlashCard';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { Configuration, Results } from '../App';

const Quiz = ({
  configuration,
  results,
  setResults,
  onTestEnded,
}: {
  configuration: Configuration;
  results: Results;
  setResults: (results: Results) => void;
  onTestEnded: () => void;
}) => {
  const [showIncorrectAnswerDialog, setShowIncorrectAnswerDialog] = useState(false);
  const currentQuestion = useMemo(
    () => configuration.selectedQuestions[results.questionsAnswered],
    [configuration, results],
  );

  const onAnswered = useCallback(
    (answer: number) => {
      if (answer === 0) {
        setResults({ ...results, questionsAnswered: results.questionsAnswered + 1 });
      } else {
        // alert(`The correct answer was: ${questionBank[results.questionsAnswered].correctAnswer}`);
        setShowIncorrectAnswerDialog(true);
        // setResults({
        //   incorrectQuestions: results.incorrectQuestions.concat(currentQuestion),
        //   questionsAnswered: results.questionsAnswered + 1,
        // });
      }
    },
    [results, setResults],
  );

  const onDialogClosed = useCallback(() => {
    setShowIncorrectAnswerDialog(false);
  }, [setShowIncorrectAnswerDialog]);

  const onDialogExited = useCallback(() => {
    setResults({
      incorrectQuestions: results.incorrectQuestions.concat(currentQuestion),
      questionsAnswered: results.questionsAnswered + 1,
    });
  }, [setResults, results]);

  const correctQuestions = results.questionsAnswered - results.incorrectQuestions.length;

  return (
    <>
      <Dialog open={showIncorrectAnswerDialog} onClose={onDialogClosed} onTransitionExited={onDialogExited}>
        <DialogTitle>{'Incorrect'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`The correct answer was: \n${configuration.selectedQuestions[results.questionsAnswered].correctAnswer}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDialogClosed} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ padding: 3 }}>
        <Typography>Total Questions Answered: {results.questionsAnswered}</Typography>
        <Typography>Questions Answered Correctly: {correctQuestions}</Typography>
        <Typography>
          Remaining Questions: {configuration.selectedQuestions.length - results.questionsAnswered}
        </Typography>
        {results.questionsAnswered ? (
          <Typography>Percentage: {Math.round((correctQuestions / results.questionsAnswered) * 100)}%</Typography>
        ) : null}
        <Button onClick={onTestEnded}>Stop Test</Button>
      </Box>
      <FlashCard
        key={currentQuestion.id}
        card={currentQuestion}
        onAnswered={onAnswered}
        highlightCorrectAnswer={configuration.highlightCorrectAnswer}
      />
    </>
  );
};

export default Quiz;
