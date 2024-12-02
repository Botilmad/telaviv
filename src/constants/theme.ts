export const COLORS = {
  primary: {
    dark: '#00548F',
    light: '#0099DC',
  },
  secondary: '#FF671F',
  background: '#F8FAFC',
  text: '#1E293B',
  white: '#FFFFFF',
} as const;

export const PRESET_QUESTIONS: { id: string; text: string }[] = [
  {
    id: 'registration',
    text: 'מה תהליך ההרשמה לוועדת זכאות ואפיון?',
  },
  {
    id: 'schedule',
    text: 'מתי מתקיימות הוועדות?',
  },
  {
    id: 'appeal',
    text: 'איך אפשר לערער על החלטת הוועדה?',
  },
  {
    id: 'documents',
    text: 'אילו מסמכים נדרשים להגשה לוועדה?',
  },
] as const;