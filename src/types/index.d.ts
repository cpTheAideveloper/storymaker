// File: src/types/index.d.ts

export type Genre = 
  | 'Aventura' 
  | 'Fantasía' 
  | 'Ciencia Ficción' 
  | 'Misterio' 
  | 'Romance' 
  | 'Terror' 
  | 'Histórico' 
  | 'Humor' 
  | 'Superhéroes' 
  | 'Drama';

export type NarrativeStyle = 
  | 'Narración en primera persona' 
  | 'Narración en tercera persona' 
  | 'Estilo epistolar' 
  | 'Flujo de conciencia' 
  | 'Narración múltiple';

export type Audience = 
  | 'Niños (3-10)' 
  | 'Jóvenes (12-17)' 
  | 'Adultos (18+)';
  
export interface StoryOptions {
  genre: Genre;
  narrativeStyle: NarrativeStyle;
  audience: Audience;
  userIdea?: string;
}

export interface StoryResponse {
  story: string;
}