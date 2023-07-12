//[player-api](../../../index.md)/[com.deezer.sdk.player.model](../index.md)/[TrackDeezerPlayable](index.md)/[TrackDeezerPlayable](-track-deezer-playable.md)

# TrackDeezerPlayable

[androidJvm]\
fun [TrackDeezerPlayable](-track-deezer-playable.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), mediaId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, playingContext: [DeezerPlayingContext](../../com.deezer.sdk.player.model.context/-deezer-playing-context/index.md))

## Parameters

androidJvm

| | |
|---|---|
| id | see [DeezerPlayable.id](../-deezer-playable/id.md) |
| mediaId | Optional identifier of the media file. Required when network status is **offline** to play a synchronized media |
| playingContext | see [DeezerPlayingContext](../../com.deezer.sdk.player.model.context/-deezer-playing-context/index.md). If the context cannot be determined due to missing information, please use [com.deezer.sdk.player.model.context.UNDEFINED_DEEZER_PLAYING_CONTEXT](../../com.deezer.sdk.player.model.context/-u-n-d-e-f-i-n-e-d_-d-e-e-z-e-r_-p-l-a-y-i-n-g_-c-o-n-t-e-x-t.md) |
