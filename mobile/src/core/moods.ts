export type Mood = {
  id: string;
  emoji: string;
  name: string;
  linearGradient: {
    colors: Array<string>;
    start: { x: number; y: number };
    end: { x: number; y: number };
  };
};

export const BLESSED_MOOD: Mood = {
  id: '5',
  name: 'Blessed',
  emoji: '😇',

  linearGradient: {
    colors: ['#ED4264', '#FFEDBC'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  },
};
