//[player-api](../../../index.md)/[com.deezer.sdk.player.model](../index.md)/[InfiniteTrackListDeezerPlayable](index.md)/[InfiniteTrackListDeezerPlayable](-infinite-track-list-deezer-playable.md)

# InfiniteTrackListDeezerPlayable

[androidJvm]\
fun [InfiniteTrackListDeezerPlayable](-infinite-track-list-deezer-playable.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), initialTracks: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](../-track-deezer-playable/index.md)&gt;?, batchProvider: [DeezerInfiniteTrackListBatchProvider](../-deezer-infinite-track-list-batch-provider/index.md))

## Parameters

androidJvm

| | |
|---|---|
| id | see [DeezerPlayable.id](../-deezer-playable/id.md) |
| initialTracks | First batch of [TrackDeezerPlayable](../-track-deezer-playable/index.md) to start this infinite track list. Due to the batch providing system, the last tracks of the [initialTracks](../../../../../player/player-api/com.deezer.sdk.player.model/-infinite-track-list-deezer-playable/[60]init[62].md) could not be played as they can be replaced by tracks from new batch. |
| batchProvider | Provider for the next batches |
