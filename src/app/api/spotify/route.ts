import { ISong } from '@/interfaces/Song'
import { SpotifyService } from '@/services/spotifyService'

export async function GET() {
  const res = await SpotifyService.getNowPlaying({ cache: 'no-store' })
  if (res.status == 204 || res.status >= 400) return Response.json({ isPlaying: false })

  const song = await res.json()

  const isPlaying = song.is_playing
  const { name } = song.item
  const artist = song.item.artists.map((_artist: any) => _artist.name).join(', ')
  const albumImageUrl = song.item.album.images[2].url
  const songUrl = song.item.external_urls.spotify

  return Response.json({
    isPlaying,
    song: {
      albumImageUrl,
      artist,
      songUrl,
      name,
    },
  } as ISong)
}
