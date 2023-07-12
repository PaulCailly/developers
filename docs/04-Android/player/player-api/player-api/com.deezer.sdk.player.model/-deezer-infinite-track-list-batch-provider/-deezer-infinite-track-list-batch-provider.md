//[player-api](../../../index.md)/[com.deezer.sdk.player.model](../index.md)/[DeezerInfiniteTrackListBatchProvider](index.md)

# DeezerInfiniteTrackListBatchProvider

[androidJvm]\
interface [DeezerInfiniteTrackListBatchProvider](index.md)

Interface to define a provider of batch of tracks for an [InfiniteTrackListDeezerPlayable](../-infinite-track-list-deezer-playable/index.md)

## Functions

| Name                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getNextBatch](get-next-batch.md) | [androidJvm]<br/>abstract fun [getNextBatch](get-next-batch.md)(callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](../-track-deezer-playable/index.md)&gt;&gt;)<br/>Request asynchronously for the next batch of tracks |
