/**
 * The type of the data returned by the API.
 */
export type Wow = {
  movie: string;
  year: number;
  release_date: string;
  director: string;
  character: string;
  movie_duration: string;
  timestamp: string;
  full_line: string;
  current_wow_in_movie: number;
  total_wows_in_movie: number;
  poster: string;
  video: {
    "1080p": string;
    "720p": string;
    "480p": string;
    "360p": string;
  };
  audio: string;
};

/**
 * The props for the Card component.
 */
export type CardProps = {
  wow: Wow;
};

/**
 * 
 */
export type VideoProps = Record<string, string>;
