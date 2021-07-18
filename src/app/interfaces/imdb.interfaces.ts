/* eslint-disable @typescript-eslint/naming-convention */
export interface IMDBTitleFindRes {
  '@meta': Meta;
  '@type': string;
  query: string;
  results: Movie[];
  types: string[];
}

export interface Movie {
  id: string;
  image?: Image;
  runningTimeInMinutes?: number;
  nextEpisode?: string;
  numberOfEpisodes?: number;
  seriesEndYear?: number;
  seriesStartYear?: number;
  title: string;
  titleType: string;
  year: number;
  principals?: Actor[];
  episode?: number;
  season?: number;
  parentTitle?: ParentTitle;
  previousEpisode?: string;
}

export interface ParentTitle {
  id: string;
  image: Image;
  title: string;
  titleType: string;
  year: number;
}

export interface Actor {
  id: string;
  legacyNameText: string;
  name: string;
  category: string;
  characters: string[];
  endYear?: number;
  episodeCount?: number;
  roles: Role[];
  startYear?: number;
  disambiguation?: string;
  attr?: string[];
  billing?: number;
  as?: string;
}

export interface Role {
  character: string;
  characterId?: string;
}

export interface Image {
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface Meta {
  operation: string;
  requestId: string;
  serviceTimeMs: number;
}

export interface MovieDetails {
  id: string;
  title: Title;
  certificates: Certificates;
  ratings: Ratings;
  genres: string[];
  releaseDate: string;
  plotOutline: PlotOutline;
  plotSummary: PlotOutline;
}

export interface PlotOutline {
  author: string;
  id: string;
  text: string;
}

export interface Ratings {
  canRate: boolean;
  rating: number;
  ratingCount: number;
  otherRanks: OtherRank[];
}

export interface OtherRank {
  id: string;
  label: string;
  rank: number;
  rankType: string;
}

export interface Certificates {
  US: ME[];
}

export interface ME {
  certificate: string;
  country: string;
}

export interface Title {
  '@type': string;
  id: string;
  image: Image;
  runningTimeInMinutes: number;
  nextEpisode: string;
  numberOfEpisodes: number;
  seriesEndYear: number;
  seriesStartYear: number;
  title: string;
  titleType: string;
  year: number;
}
