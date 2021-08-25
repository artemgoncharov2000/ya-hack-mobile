export type EpisodeT = {
  guid: string;
  duration: number;
  title: string;
}
export type PodcastStateT = {
  description: string;
  id: string;
  imageUrl: string;
  title: string;
  episodesPreviews: Array<EpisodeT>;
} | null
