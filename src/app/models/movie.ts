export interface Movie {
    page: number;
    results: (ResultsEntity)[] ;
    total_pages: number;
    total_results: number;
  }

  export interface ResultsEntity {
    name: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: (number)[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    image: string;
    poster_path: string;
    release_date: string;
    fullTitle: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
