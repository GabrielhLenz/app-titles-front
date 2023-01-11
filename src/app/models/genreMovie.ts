export interface GenreMovie {
    page: number
    results: (GenreResultsEntity)[] ;
    total_pages: number;
    total_results: number;
  }
  
  export interface GenreResultsEntity{
    poster_path: string;
    adult: boolean; 
    overview: string;
    release_date: string;
    genre_ids: (number)[] | null;
    id: number;
    original_title: string;
    title: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
  }