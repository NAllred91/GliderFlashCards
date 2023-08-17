import { Button, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Switch } from '@mui/material';
import { shuffle } from 'lodash';
import { useCallback, useState } from 'react';
import DataBank from '../DataBank';
import { Configuration } from '../App';

const ConfigureQuiz = ({ setTestConfiguration }: { setTestConfiguration: (configuration: Configuration) => void }) => {
  const [selectedQuestionSubset, setSelectedQuestionSubset] = useState(0);
  const [highlightCorrectAnswer, setHighlightCorrectAnswer] = useState(false);
  const handleQuestionSubsetChange = useCallback(
    (e: SelectChangeEvent<number>) => {
      setSelectedQuestionSubset(Number(e.target.value));
    },
    [setSelectedQuestionSubset],
  );
  const handleHighlightCorrectAnswerChange = useCallback(
    (_e: unknown, checked: boolean) => {
      setHighlightCorrectAnswer(checked);
    },
    [setHighlightCorrectAnswer],
  );

  const onSubmit = useCallback(() => {
    const dataBank = shuffle(DataBank());
    console.log(selectedQuestionSubset);
    switch (selectedQuestionSubset) {
      case 0:
        setTestConfiguration({ totalQuestions: Infinity, selectedQuestions: dataBank, highlightCorrectAnswer });
        break;
      case 1:
        setTestConfiguration({
          totalQuestions: Infinity,
          selectedQuestions: dataBank.filter((q) => !q.figures || q.figures.length === 0),
          highlightCorrectAnswer,
        });
        break;
      case 2:
        setTestConfiguration({
          totalQuestions: Infinity,
          selectedQuestions: dataBank.filter((q) => q.figures && q.figures.length > 0, highlightCorrectAnswer),
          highlightCorrectAnswer,
        });
        break;
      default:
        setTestConfiguration({ totalQuestions: Infinity, selectedQuestions: dataBank, highlightCorrectAnswer });
    }
  }, [selectedQuestionSubset]);

  return (
    <Paper sx={{ padding: '50px', display: 'flex', flexDirection: 'column' }}>
      <FormControl fullWidth sx={{ paddingBottom: '10px' }}>
        <InputLabel>Configuration</InputLabel>
        <Select
          labelId="question-subset"
          id="question-subset"
          value={selectedQuestionSubset}
          label="Question Subset"
          onChange={handleQuestionSubsetChange}
        >
          <MenuItem value={0}>All Questions</MenuItem>
          <MenuItem value={1}>Only Text-Only Questions</MenuItem>
          <MenuItem value={2}>Only Figure Questions</MenuItem>
          <MenuItem value={3}>Custom</MenuItem>
        </Select>
      </FormControl>
      <InputLabel>Highlight Correct Answer</InputLabel>
      <Switch checked={highlightCorrectAnswer} onChange={handleHighlightCorrectAnswerChange}></Switch>
      <Button onClick={onSubmit}>Start Test</Button>
    </Paper>
  );
};

export default ConfigureQuiz;
