export interface Question {
  question: string;
  wrongAnswers: string[];
  correctAnswer: string;
  figures?: string[];
  id: string;
  hint?: string;
}
