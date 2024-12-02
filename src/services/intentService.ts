export interface Intent {
  id: string;
  patterns: string[];
  keywords: string[];
}

export const intents: Intent[] = [
  {
    id: 'registration_process',
    patterns: ['איך', 'כיצד', 'מה', 'תהליך', 'הרשמה', 'להגיש', 'להירשם', 'רישום'],
    keywords: ['ועדה', 'זכאות', 'אפיון', 'בקשה', 'טפסים']
  },
  {
    id: 'documents',
    patterns: ['מסמכים', 'טפסים', 'אישורים', 'להגיש', 'נדרש', 'צריך'],
    keywords: ['ועדה', 'זכאות', 'אפיון', 'בקשה']
  },
  {
    id: 'schedule',
    patterns: ['מתי', 'מועד', 'תאריך', 'זמן', 'מתקיימות'],
    keywords: ['ועדה', 'דיון', 'פגישה', 'זימון']
  },
  {
    id: 'appeal',
    patterns: ['ערעור', 'לערער', 'השגה', 'להשיג', 'החלטה'],
    keywords: ['ועדה', 'זכאות', 'אפיון', 'תשובה']
  },
  {
    id: 'eligibility',
    patterns: ['זכאי', 'זכאות', 'קריטריונים', 'תנאים', 'מי'],
    keywords: ['ועדה', 'שירותים', 'חינוך', 'מיוחד']
  },
  {
    id: 'placement',
    patterns: ['שיבוץ', 'מסגרת', 'כיתה', 'גן', 'בית ספר'],
    keywords: ['חינוך', 'מיוחד', 'רגיל', 'משולב']
  },
  {
    id: 'general_info',
    patterns: ['מה', 'מידע', 'הסבר', 'פרטים'],
    keywords: ['ועדה', 'זכאות', 'אפיון', 'חינוך מיוחד']
  }
];