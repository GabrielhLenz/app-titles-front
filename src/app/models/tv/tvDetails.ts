export interface TVDetails{
    backrop_path?: string;
    created_by: (ex)[];
    episode_run_time: number[];
    first_air_date: string;
    genres: (ex)[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: (ex);
    name: string;
    next_episote_to_air: null;
    networks: (ex)[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    production_companies: (ex)[];
    production_countries: (ex)[];
    seasons: (ex)[];
    spoken_languages: (ex)[]
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;

}

export interface ex{

}