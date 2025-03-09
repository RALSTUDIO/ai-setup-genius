
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuizSection from '@/components/quiz/QuizSection';
import QuizResultCard from '@/components/quiz/QuizResultCard';
import { 
  quizSections, 
  QuizAnswer, 
  determineResult, 
  quizResults, 
  ResultType
} from '@/components/quiz/quizData';

const QuizPage = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [resultReady, setResultReady] = useState(false);
  const [resultType, setResultType] = useState<ResultType | null>(null);
  const [gmType, setGmType] = useState<'saudi' | 'nonSaudi'>('saudi');
  
  const totalSteps = quizSections.length;
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;
  const currentSection = quizSections[currentStepIndex];
  
  const handleNext = () => {
    if (isLastStep) {
      // Calculate results
      const result = determineResult(answers);
      setResultType(result);
      setResultReady(true);
      
      // Check if GM will be non-Saudi or Saudi
      const gmAnswer = answers.find(a => a.questionId === 'foreign-gm');
      if (gmAnswer && gmAnswer.answerId === 'yes-foreign-gm') {
        setGmType('nonSaudi');
      } else {
        setGmType('saudi');
      }
    } else {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };
  
  const handleAnswerSelect = (questionId: string, answerId: string) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(a => a.questionId === questionId);
    
    if (existingAnswerIndex >= 0) {
      newAnswers[existingAnswerIndex] = { questionId, answerId };
    } else {
      newAnswers.push({ questionId, answerId });
    }
    
    setAnswers(newAnswers);
  };
  
  const isStepComplete = () => {
    const currentQuestions = currentSection.questions;
    return currentQuestions.every(question => 
      answers.some(answer => answer.questionId === question.id)
    );
  };
  
  const resetQuiz = () => {
    setAnswers([]);
    setCurrentStepIndex(0);
    setResultReady(false);
    setResultType(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container-wide py-12">
          {!resultReady ? (
            <>
              {/* Quiz Header */}
              <div className="max-w-3xl mx-auto mb-10">
                <h1 className="heading-md mb-4">
                  Take the Quiz: Find the Right Legal Entity in Saudi Arabia
                </h1>
                <p className="text-neutral-600">
                  Answer the following questions to discover the best legal structure for your business in Saudi Arabia, 
                  along with estimated costs and setup timelines.
                </p>
              </div>
              
              {/* Progress Bar */}
              <div className="max-w-3xl mx-auto mb-8">
                <div className="bg-neutral-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-purple-300 h-full transition-all duration-300 ease-out"
                    style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-sm text-neutral-500 text-right">
                  Step {currentStepIndex + 1} of {totalSteps}
                </div>
              </div>
              
              {/* Quiz Step */}
              <div className="max-w-3xl mx-auto">
                <QuizSection
                  title={currentSection.title}
                  questions={currentSection.questions}
                  answers={answers}
                  onAnswerSelect={handleAnswerSelect}
                />
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={isFirstStep}
                    className="flex items-center"
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Previous
                  </Button>
                  
                  <Button
                    onClick={handleNext}
                    disabled={!isStepComplete()}
                    className="bg-purple-300 hover:bg-purple-400 text-white flex items-center"
                  >
                    {isLastStep ? 'See Results' : 'Next'}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            /* Quiz Results */
            <div className="max-w-3xl mx-auto">
              <Button
                variant="outline"
                onClick={resetQuiz}
                className="mb-8 flex items-center"
              >
                <ArrowLeft size={16} className="mr-2" />
                Take the Quiz Again
              </Button>
              
              <h1 className="heading-md mb-6">
                Your Results: Best Legal Entity, Cost & Timeline
              </h1>
              
              {resultType && (
                <div className="mb-10">
                  <QuizResultCard
                    result={quizResults[resultType]}
                    gmType={gmType}
                  />
                </div>
              )}
              
              {/* Summary Table */}
              <h2 className="text-xl font-bold mb-4">
                Summary of Costs & Timelines Across Different Scenarios
              </h2>
              
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-200 p-3 text-left">Scenario</th>
                      <th className="border border-neutral-200 p-3 text-left">Fixed Fees (SAR 17,065)</th>
                      <th className="border border-neutral-200 p-3 text-left">GM Fees (if Non-Saudi) (SAR 12,490)</th>
                      <th className="border border-neutral-200 p-3 text-left">Total Cost (SAR)</th>
                      <th className="border border-neutral-200 p-3 text-left">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-200 p-3">Saudi GM</td>
                      <td className="border border-neutral-200 p-3">✅ Included</td>
                      <td className="border border-neutral-200 p-3">❌ Not Applicable</td>
                      <td className="border border-neutral-200 p-3">17,065</td>
                      <td className="border border-neutral-200 p-3">10 days – 4 weeks</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-200 p-3">Non-Saudi GM</td>
                      <td className="border border-neutral-200 p-3">✅ Included</td>
                      <td className="border border-neutral-200 p-3">✅ +12,490</td>
                      <td className="border border-neutral-200 p-3">29,555</td>
                      <td className="border border-neutral-200 p-3">1 – 2 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* What's Next */}
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200 mb-8">
                <h3 className="text-lg font-bold mb-3">What's Next?</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Need help with company registration?
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Want a side-by-side comparison of your options?
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-purple-500 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Looking for regulatory guidance?
                  </li>
                </ul>
                <p className="font-medium">Let's discuss your business setup in Saudi Arabia! 🚀</p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/services/self-guided-setup" 
                  className="button-primary flex-1 text-center"
                >
                  Start Self-Guided Setup
                </Link>
                <Link 
                  to="/services/agency-assisted-setup" 
                  className="button-secondary flex-1 text-center"
                >
                  Explore Agency-Assisted Setup
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizPage;
