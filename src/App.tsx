import { useCallback, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Quiz from './Views/Quiz';
import { Question } from './Question';
import ConfigureQuiz from './Views/ConfigureQuiz';
import ResultsView from './Views/Results';

export interface Results {
  questionsAnswered: number;
  incorrectQuestions: Question[];
}

export interface Configuration {
  selectedQuestions: Question[];
  totalQuestions: number;
}

function App() {
  const [isTestEnded, setIsTestEnded] = useState(false);
  const [testConfiguration, setTestConfiguration] = useState<Configuration | undefined>(undefined);
  const [results, setResults] = useState<Results>({ questionsAnswered: 0, incorrectQuestions: [] });

  const onReset = useCallback(() => {
    setIsTestEnded(false);
    setTestConfiguration(undefined);
    setResults({ questionsAnswered: 0, incorrectQuestions: [] });
  }, [setIsTestEnded, setTestConfiguration, setResults]);

  const onTestEnded = useCallback(() => {
    setIsTestEnded(true);
  }, [setIsTestEnded]);

  return (
    <Container maxWidth={'lg'}>
      <Box sx={{ py: 4 }}>
        {!testConfiguration && <ConfigureQuiz setTestConfiguration={setTestConfiguration} />}
        {testConfiguration && !isTestEnded && (
          <Quiz
            questionBank={testConfiguration.selectedQuestions}
            results={results}
            setResults={setResults}
            onTestEnded={onTestEnded}
          />
        )}
        {isTestEnded && <ResultsView onReset={onReset} results={results} />}
      </Box>
    </Container>
  );
}

export default App;
