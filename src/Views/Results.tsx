import { Box, Button, Typography } from '@mui/material';
import { Results } from '../App';
import FlashCard from '../Components/FlashCard';

const ResultsView = ({ onReset, results }: { onReset: () => void; results: Results }) => {
  const correctAnswers = results.questionsAnswered - results.incorrectQuestions.length;
  return (
    <Box>
      <Box>
        <Button onClick={onReset}>Reset Test</Button>
      </Box>
      <Box>
        <Typography variant="h4">Test Complete</Typography>
        <Typography>Total Questions Answered: {results.questionsAnswered}</Typography>
        <Typography>Questions Answered Correctly: {correctAnswers}</Typography>
        {results.questionsAnswered ? (
          <Typography>
            {results.questionsAnswered
              ? `Percentage: ${Math.round((correctAnswers / results.questionsAnswered) * 100)}%`
              : null}
          </Typography>
        ) : null}

        <div>
          <p>Incorrect Questions to Study:</p>
          <div>
            {results.incorrectQuestions.map((q) => (
              <div style={{ paddingBottom: '10px' }}>
                <FlashCard key={q.id} card={q} previewMode />
              </div>
            ))}
          </div>
        </div>
        {/* //     <div>
  //       <p>Test Complete</p>
  //       <div>Total Questions Answered: {totalQuestionsAnswered}</div>
  //       <div>Questions Answered Correctly: {correctAnswers}</div>
  //       {totalQuestionsAnswered ? (
  //         <div>Percentage: {Math.round((correctAnswers / totalQuestionsAnswered) * 100)}%</div>
  //       ) : null}

  //       <Button onClick={onTestRestart}>Restart</Button>

  //       <div>
  //         <p>Incorrect Questions to Study:</p>
  //         <div>
  //           {missedQuestions.map((q) => (
  //             <div style={{ paddingBottom: '10px' }}>
  //               <FlashCard key={q.id} card={q} previewMode />
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div> */}
      </Box>
    </Box>
  );
};

export default ResultsView;
