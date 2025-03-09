
export type Question = {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    value: string;
  }[];
};

export type QuizSection = {
  id: string;
  title: string;
  questions: Question[];
};

export type QuizAnswer = {
  questionId: string;
  answerId: string;
};

export type ResultType = 
  | 'JSC' 
  | 'LLC' 
  | 'INDIVIDUAL_LLC' 
  | 'FOREIGN_BRANCH' 
  | 'RHQ';

export type QuizResult = {
  type: ResultType;
  title: string;
  description: string;
  capitalRequirement: string;
  governmentFees: {
    saudiGM: string;
    nonSaudiGM: string;
  };
  timeline: {
    saudiGM: string;
    nonSaudiGM: string;
  };
};

export const quizSections: QuizSection[] = [
  {
    id: 'ownership',
    title: '1. Business Ownership & Investment Structure',
    questions: [
      {
        id: 'ownership-type',
        text: 'Q1: Who will own the company?',
        options: [
          { id: 'foreign-100', text: 'A. 100% Foreign Ownership', value: 'foreign-100' },
          { id: 'mixed', text: 'B. Foreign and Saudi Partners', value: 'mixed' },
          { id: 'single-foreign', text: 'C. A Single Foreign Individual', value: 'single-foreign' }
        ]
      },
      {
        id: 'extension',
        text: 'Q2: Will your business be an extension of an existing foreign company?',
        options: [
          { id: 'yes-branch', text: 'A. Yes, a branch of a foreign company', value: 'yes-branch' },
          { id: 'no-new', text: 'B. No, it will be a new entity', value: 'no-new' }
        ]
      }
    ]
  },
  {
    id: 'scale',
    title: '2. Business Scale & Growth Goals',
    questions: [
      {
        id: 'operation-scale',
        text: 'Q3: What is the scale of your operations?',
        options: [
          { id: 'large', text: 'A. A large company planning for public investment', value: 'large' },
          { id: 'small-mid', text: 'B. A small to mid-sized company', value: 'small-mid' },
          { id: 'regional-hq', text: 'C. A regional headquarters managing operations in multiple countries', value: 'regional-hq' },
          { id: 'single-entrepreneur', text: 'D. A single entrepreneur setting up a structured entity', value: 'single-entrepreneur' }
        ]
      },
      {
        id: 'public-investment',
        text: 'Q4: Are you planning to raise public investment or list on the stock market?',
        options: [
          { id: 'yes-public', text: 'A. Yes, we may seek public investment', value: 'yes-public' },
          { id: 'no-private', text: 'B. No, we will remain privately held', value: 'no-private' }
        ]
      }
    ]
  },
  {
    id: 'capital',
    title: '3. Capital Investment',
    questions: [
      {
        id: 'capital-amount',
        text: 'Q5: How much capital are you willing to invest upfront?',
        options: [
          { id: '500k-plus', text: 'A. SAR 500,000 or more', value: '500k-plus' },
          { id: '100k-500k', text: 'B. SAR 100,000 – SAR 500,000', value: '100k-500k' },
          { id: 'less-100k', text: 'C. Less than SAR 100,000 (varies by industry)', value: 'less-100k' },
          { id: 'no-specific', text: 'D. No specific capital investment required (e.g., branch or RHQ)', value: 'no-specific' }
        ]
      }
    ]
  },
  {
    id: 'business-activity',
    title: '4. Business Activity & Regulatory Compliance',
    questions: [
      {
        id: 'activity-type',
        text: 'Q6: What type of business activity will you engage in?',
        options: [
          { id: 'general', text: 'A. General business and services', value: 'general' },
          { id: 'trading', text: 'B. Trading (import/export, wholesale, or retail)', value: 'trading' },
          { id: 'financial', text: 'C. Financial services, insurance, or banking', value: 'financial' },
          { id: 'strategic', text: 'D. Strategic sectors (e.g., defense, energy, media)', value: 'strategic' }
        ]
      },
      {
        id: 'special-license',
        text: 'Q7: Does your business require a special regulatory license?',
        options: [
          { id: 'yes-special', text: 'A. Yes, we need approval from MISA, CMA, or other authorities', value: 'yes-special' },
          { id: 'no-standard', text: 'B. No, we only need a standard business license', value: 'no-standard' }
        ]
      }
    ]
  },
  {
    id: 'managerial',
    title: '5. Managerial & Legal Considerations',
    questions: [
      {
        id: 'shareholders',
        text: 'Q8: How many shareholders will be involved in the company?',
        options: [
          { id: 'one', text: 'A. One', value: 'one' },
          { id: 'two-plus', text: 'B. Two or more', value: 'two-plus' }
        ]
      },
      {
        id: 'foreign-gm',
        text: 'Q9: Will your company require a foreign General Manager (GM)?',
        options: [
          { id: 'yes-foreign-gm', text: 'A. Yes, the GM will be non-Saudi', value: 'yes-foreign-gm' },
          { id: 'no-saudi-gm', text: 'B. No, the GM will be Saudi', value: 'no-saudi-gm' }
        ]
      }
    ]
  }
];

export const quizResults: Record<ResultType, QuizResult> = {
  JSC: {
    type: 'JSC',
    title: 'Joint Stock Company (JSC)',
    description: 'Best for: Large businesses seeking public investment.',
    capitalRequirement: 'Minimum SAR 500,000, with 25% paid at incorporation.',
    governmentFees: {
      saudiGM: 'SAR 17,065',
      nonSaudiGM: 'SAR 29,555 (includes SAR 12,490 for work permit)'
    },
    timeline: {
      saudiGM: '10 days – 4 weeks',
      nonSaudiGM: '1 – 2 months'
    }
  },
  LLC: {
    type: 'LLC',
    title: 'Limited Liability Company (LLC)',
    description: 'Best for: Most foreign investors, allowing 100% ownership with a MISA license.',
    capitalRequirement: 'No fixed minimum (varies by industry).',
    governmentFees: {
      saudiGM: 'SAR 17,065',
      nonSaudiGM: 'SAR 29,555'
    },
    timeline: {
      saudiGM: '10 days – 4 weeks',
      nonSaudiGM: '1 – 2 months'
    }
  },
  INDIVIDUAL_LLC: {
    type: 'INDIVIDUAL_LLC',
    title: 'Single-Owner LLC (Individual LLC)',
    description: 'Best for: A single foreign investor wanting a structured entity.',
    capitalRequirement: 'Minimum SAR 100,000.',
    governmentFees: {
      saudiGM: 'SAR 17,065',
      nonSaudiGM: 'SAR 29,555'
    },
    timeline: {
      saudiGM: '10 days – 4 weeks',
      nonSaudiGM: '1 – 2 months'
    }
  },
  FOREIGN_BRANCH: {
    type: 'FOREIGN_BRANCH',
    title: 'Foreign Branch',
    description: 'Best for: Companies expanding into Saudi Arabia without creating a separate legal entity.',
    capitalRequirement: 'No minimum capital required, but parent company must provide financial guarantees.',
    governmentFees: {
      saudiGM: 'SAR 17,065',
      nonSaudiGM: 'SAR 29,555'
    },
    timeline: {
      saudiGM: '10 days – 4 weeks',
      nonSaudiGM: '1 – 2 months'
    }
  },
  RHQ: {
    type: 'RHQ',
    title: 'Regional Headquarters (RHQ) Entity',
    description: 'Best for: Multinational corporations managing operations in the Middle East.',
    capitalRequirement: 'No minimum capital, but financial stability required.',
    governmentFees: {
      saudiGM: 'SAR 17,065',
      nonSaudiGM: 'SAR 29,555'
    },
    timeline: {
      saudiGM: '10 days – 4 weeks',
      nonSaudiGM: '1 – 2 months'
    }
  }
};

export const determineResult = (answers: QuizAnswer[]): ResultType => {
  // Count the selected types of answers to determine the best match
  const answerCounts: Record<string, number> = {
    'foreign-100': 0,
    'yes-public': 0,
    'single-foreign': 0,
    'yes-branch': 0,
    'regional-hq': 0,
    'one': 0,
    'large': 0,
    'small-mid': 0,
    '500k-plus': 0
  };
  
  // Count the occurrences of specific answers
  answers.forEach(answer => {
    if (Object.keys(answerCounts).includes(answer.answerId)) {
      answerCounts[answer.answerId]++;
    }
  });
  
  // Check for foreign branch first (high priority indicator)
  if (answerCounts['yes-branch'] > 0) {
    return 'FOREIGN_BRANCH';
  }
  
  // Check for regional headquarters
  if (answerCounts['regional-hq'] > 0) {
    return 'RHQ';
  }
  
  // Check for JSC (public investment, large company, high capital)
  if (answerCounts['yes-public'] > 0 || 
      (answerCounts['large'] > 0 && answerCounts['500k-plus'] > 0)) {
    return 'JSC';
  }
  
  // Check for Individual LLC (single owner)
  if (answerCounts['single-foreign'] > 0 || answerCounts['one'] > 0) {
    return 'INDIVIDUAL_LLC';
  }
  
  // Default to standard LLC
  return 'LLC';
};
