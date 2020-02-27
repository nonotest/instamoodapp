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
