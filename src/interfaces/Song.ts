export interface ISong {
  isPlaying: boolean
  song?: {
    albumImageUrl: string
    artist: string
    songUrl: string
    name: string
  }
}
