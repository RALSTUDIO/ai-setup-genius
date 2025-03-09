
import { QuizResult } from './quizData';

interface QuizResultCardProps {
  result: QuizResult;
  gmType: 'saudi' | 'nonSaudi';
}

const QuizResultCard = ({ result, gmType }: QuizResultCardProps) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <div className="bg-purple-100 text-purple-500 p-1 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-bold">{result.title}</h3>
      </div>
      
      <p className="text-neutral-600 mb-4">{result.description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-neutral-800">Capital Requirement</h4>
          <p className="text-neutral-600">{result.capitalRequirement}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-neutral-800">Government Fees</h4>
          <p className="text-neutral-600">
            {gmType === 'saudi' ? result.governmentFees.saudiGM : result.governmentFees.nonSaudiGM}
          </p>
        </div>
        
        <div>
          <h4 className="font-medium text-neutral-800">Estimated Timeline</h4>
          <p className="text-neutral-600">
            {gmType === 'saudi' ? result.timeline.saudiGM : result.timeline.nonSaudiGM}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizResultCard;
