
import { Question, QuizAnswer } from './quizData';
import QuizOption from './QuizOption';

interface QuizSectionProps {
  title: string;
  questions: Question[];
  answers: QuizAnswer[];
  onAnswerSelect: (questionId: string, answerId: string) => void;
}

const QuizSection = ({ title, questions, answers, onAnswerSelect }: QuizSectionProps) => {
  const getSelectedAnswer = (questionId: string) => {
    const answer = answers.find(a => a.questionId === questionId);
    return answer ? answer.answerId : '';
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-8">
        {questions.map((question) => (
          <div key={question.id} className="space-y-4">
            <p className="font-medium text-lg">{question.text}</p>
            <div className="space-y-3">
              {question.options.map((option) => (
                <QuizOption
                  key={option.id}
                  id={option.id}
                  text={option.text}
                  isSelected={getSelectedAnswer(question.id) === option.id}
                  onClick={() => onAnswerSelect(question.id, option.id)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSection;
