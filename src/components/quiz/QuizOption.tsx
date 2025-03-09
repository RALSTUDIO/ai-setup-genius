
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface QuizOptionProps {
  id: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const QuizOption = ({ id, text, isSelected, onClick }: QuizOptionProps) => {
  return (
    <div
      className={cn(
        "flex items-start p-4 border rounded-lg cursor-pointer transition-all duration-300",
        isSelected 
          ? "border-purple-400 bg-purple-50 shadow-sm" 
          : "border-neutral-200 hover:border-purple-300 hover:bg-purple-50/50"
      )}
      onClick={onClick}
    >
      <div className={cn(
        "flex-shrink-0 w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center",
        isSelected 
          ? "bg-purple-400 border-purple-400" 
          : "border-neutral-300"
      )}>
        {isSelected && <Check size={12} className="text-white" />}
      </div>
      <span className="ml-3 text-neutral-800">{text}</span>
    </div>
  );
};

export default QuizOption;
