export interface PopularTVShow {
    page: number;
    results: (ResultsEntity)[] ;
    total_pages: number;
    total_results: number;

  }

  export interface ResultsEntity {
    poster_path: string;
    popularity: number;
    id: number;
    backdrop_path: string;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country: string;
    genre_ids: (number)[];
    original_language: string;  
    vote_count: number;
    name: string;
    original_name: string;
  }
  
