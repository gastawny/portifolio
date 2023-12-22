import { ISong } from '@/interfaces/Song'
import { SpotifyService } from '@/services/spotifyService'

export async function GET(req: Request) {
  const headers = req.headers

  const res = await SpotifyService.getNowPlaying({ cache: 'no-cache' })
  if (res.status == 204 || res.status >= 400) return Response.json({ isPlaying: false })

  const { is_playing, item: song }: { is_playing: boolean; item: SpotifyApi.TrackObjectFull } =
    await res.json()

  const { name } = song
  const artist = song.artists.map((_artist: any) => _artist.name).join(', ')
  const songUrl = song?.external_urls.spotify

  return Response.json({
    isPlaying: is_playing,
    song: {
      artist,
      songUrl,
      name,
    },
  } as ISong)
}
