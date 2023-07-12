//[player-api](../../../index.md)/[com.deezer.sdk.player.model](../index.md)/[InfiniteTrackListDeezerPlayable](index.md)

# InfiniteTrackListDeezerPlayable

[androidJvm]\
data class [InfiniteTrackListDeezerPlayable](index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val initialTracks: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](../-track-deezer-playable/index.md)&gt;?, val batchProvider: [DeezerInfiniteTrackListBatchProvider](../-deezer-infinite-track-list-batch-provider/index.md)) : [DeezerPlayable](../-deezer-playable/index.md)

Representation of a content of type _infinite track list_ playable by the **_Deezer SDK_**

## Parameters

androidJvm

|               |                                                                                                                                                                                                                                                                                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id            | see [DeezerPlayable.id](../-deezer-playable/id.md)                                                                                                                                                                                                                             |
| initialTracks | First batch of [TrackDeezerPlayable](../-track-deezer-playable/index.md) to start this infinite track list. Due to the batch providing system, the last tracks of the [initialTracks](initial-tracks.md) could not be played as they can be replaced by tracks from new batch. |
| batchProvider | Provider for the next batches                                                                                                                                                                                                                                                  |

## Constructors

|                                                                            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [InfiniteTrackListDeezerPlayable](-infinite-track-list-deezer-playable.md) | [androidJvm]<br/>fun [InfiniteTrackListDeezerPlayable](-infinite-track-list-deezer-playable.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), initialTracks: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](../-track-deezer-playable/index.md)&gt;?, batchProvider: [DeezerInfiniteTrackListBatchProvider](../-deezer-infinite-track-list-batch-provider/index.md)) |

## Properties

| Name                               | Summary                                                                                                                                                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [batchProvider](batch-provider.md) | [androidJvm]<br/>val [batchProvider](batch-provider.md): [DeezerInfiniteTrackListBatchProvider](../-deezer-infinite-track-list-batch-provider/index.md)                                                             |
| [id](id.md)                        | [androidJvm]<br/>open override val [id](id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                                                                                    |
| [initialTracks](initial-tracks.md) | [androidJvm]<br/>val [initialTracks](initial-tracks.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](../-track-deezer-playable/index.md)&gt;? |
