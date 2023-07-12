//[player-api](../../index.md)/[com.deezer.sdk.player.model](index.md)

# Package com.deezer.sdk.player.model

## Types

| Name                                                                                        | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AlbumDeezerPlayable](-album-deezer-playable/index.md)                                      | [androidJvm]<br/>data class [AlbumDeezerPlayable](-album-deezer-playable/index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [DeezerPlayable](-deezer-playable/index.md)<br/>Representation an of album playable by the **DeezerSDK**                                                                                                                                                                                                                                                                                                                                                         |
| [ArtistTopTracksDeezerPlayable](-artist-top-tracks-deezer-playable/index.md)                | [androidJvm]<br/>data class [ArtistTopTracksDeezerPlayable](-artist-top-tracks-deezer-playable/index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [DeezerPlayable](-deezer-playable/index.md)<br/>Representation of an artist top tracks playable by the **DeezerSDK**                                                                                                                                                                                                                                                                                                                       |
| [DeezerCurrentMedia](-deezer-current-media/index.md)                                        | [androidJvm]<br/>data class [DeezerCurrentMedia](-deezer-current-media/index.md)(val index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val playable: [TrackDeezerPlayable](-track-deezer-playable/index.md)?)<br/>Model describing current media content from the queue of the **_Deezer Player_**                                                                                                                                                                                                                                                                                                             |
| [DeezerDownloadable](-deezer-downloadable/index.md)                                         | [androidJvm]<br/>interface [DeezerDownloadable](-deezer-downloadable/index.md)<br/>Minimal representation of a content that can be downloaded by the **_Deezer SDK_**                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [DeezerInfiniteTrackListBatchProvider](-deezer-infinite-track-list-batch-provider/index.md) | [androidJvm]<br/>interface [DeezerInfiniteTrackListBatchProvider](-deezer-infinite-track-list-batch-provider/index.md)<br/>Interface to define a provider of batch of tracks for an [InfiniteTrackListDeezerPlayable](-infinite-track-list-deezer-playable/index.md)                                                                                                                                                                                                                                                                                                                                                                            |
| [DeezerOfflineState](-deezer-offline-state/index.md)                                        | [androidJvm]<br/>sealed class [DeezerOfflineState](-deezer-offline-state/index.md)<br/>Offline synchronization state of a [TrackDeezerPlayable](-track-deezer-playable/index.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [DeezerOfflineStateDownloaded](-deezer-offline-state-downloaded/index.md)                   | [androidJvm]<br/>object [DeezerOfflineStateDownloaded](-deezer-offline-state-downloaded/index.md) : [DeezerOfflineState](-deezer-offline-state/index.md)<br/>State for offline synchronization indicating that a [TrackDeezerPlayable](-track-deezer-playable/index.md) has been downloaded on local device and is available offline                                                                                                                                                                                                                                                                                                            |
| [DeezerOfflineStateDownloading](-deezer-offline-state-downloading/index.md)                 | [androidJvm]<br/>data class [DeezerOfflineStateDownloading](-deezer-offline-state-downloading/index.md)(@[FloatRange](https://developer.android.com/reference/kotlin/androidx/annotation/FloatRange.html)(from = 0.0, to = 1.0)val progress: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)) : [DeezerOfflineState](-deezer-offline-state/index.md)<br/>State for offline synchronization indicating that a [TrackDeezerPlayable](-track-deezer-playable/index.md) is currently being downloaded on local device                                                                                              |
| [DeezerOfflineStateNotDownloaded](-deezer-offline-state-not-downloaded/index.md)            | [androidJvm]<br/>object [DeezerOfflineStateNotDownloaded](-deezer-offline-state-not-downloaded/index.md) : [DeezerOfflineState](-deezer-offline-state/index.md)<br/>State for offline synchronization indicating that a [TrackDeezerPlayable](-track-deezer-playable/index.md) has **not** been downloaded on local device                                                                                                                                                                                                                                                                                                                      |
| [DeezerOfflineStatePendingClear](-deezer-offline-state-pending-clear/index.md)              | [androidJvm]<br/>object [DeezerOfflineStatePendingClear](-deezer-offline-state-pending-clear/index.md) : [DeezerOfflineState](-deezer-offline-state/index.md)<br/>State for offline synchronization indicating that a [TrackDeezerPlayable](-track-deezer-playable/index.md) was previously downloaded on local device and is registered for upcoming deletion                                                                                                                                                                                                                                                                                  |
| [DeezerOfflineStatePendingDownload](-deezer-offline-state-pending-download/index.md)        | [androidJvm]<br/>object [DeezerOfflineStatePendingDownload](-deezer-offline-state-pending-download/index.md) : [DeezerOfflineState](-deezer-offline-state/index.md)<br/>State for offline synchronization indicating that a [TrackDeezerPlayable](-track-deezer-playable/index.md) is registered for upcoming download on local device                                                                                                                                                                                                                                                                                                          |
| [DeezerPlayable](-deezer-playable/index.md)                                                 | [androidJvm]<br/>interface [DeezerPlayable](-deezer-playable/index.md)<br/>Minimal representation of a content that can be played by the **_Deezer SDK_**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [DeezerPlaybackState](-deezer-playback-state/index.md)                                      | [androidJvm]<br/>data class [DeezerPlaybackState](-deezer-playback-state/index.md)(val deezerPlayerState: [DeezerPlayerState](-deezer-player-state/index.md), val isPaused: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br/>Playback state of the **_Deezer Player_**                                                                                                                                                                                                                                                                                                                                   |
| [DeezerPlayerProgress](-deezer-player-progress/index.md)                                    | [androidJvm]<br/>data class [DeezerPlayerProgress](-deezer-player-progress/index.md)(val position: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), val duration: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), val bufferingPosition: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html))<br/>Playback progress of the current track                                                                                                                                                                                                        |
| [DeezerPlayerState](-deezer-player-state/index.md)                                          | [androidJvm]<br/>enum [DeezerPlayerState](-deezer-player-state/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[DeezerPlayerState](-deezer-player-state/index.md)&gt; <br/>State of the **_Deezer Player_**                                                                                                                                                                                                                                                                                                                                                                                         |
| [DeezerRepeatMode](-deezer-repeat-mode/index.md)                                            | [androidJvm]<br/>enum [DeezerRepeatMode](-deezer-repeat-mode/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[DeezerRepeatMode](-deezer-repeat-mode/index.md)&gt; <br/>Available repeat mode for the **_Deezer Player_**                                                                                                                                                                                                                                                                                                                                                                            |
| [DeezerShuffleState](-deezer-shuffle-state/index.md)                                        | [androidJvm]<br/>sealed class [DeezerShuffleState](-deezer-shuffle-state/index.md)<br/>Shuffle state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [DeezerShuffleStateDisabled](-deezer-shuffle-state-disabled/index.md)                       | [androidJvm]<br/>data class [DeezerShuffleStateDisabled](-deezer-shuffle-state-disabled/index.md)(val queue: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](-track-deezer-playable/index.md)&gt;) : [DeezerShuffleState](-deezer-shuffle-state/index.md)<br/>State for shuffle disabled                                                                                                                                                                                                                                                                                      |
| [DeezerShuffleStateEnabled](-deezer-shuffle-state-enabled/index.md)                         | [androidJvm]<br/>data class [DeezerShuffleStateEnabled](-deezer-shuffle-state-enabled/index.md)(val queue: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](-track-deezer-playable/index.md)&gt;) : [DeezerShuffleState](-deezer-shuffle-state/index.md)<br/>State for shuffle enabled                                                                                                                                                                                                                                                                                         |
| [FavoriteTracksDeezerPlayable](-favorite-tracks-deezer-playable/index.md)                   | [androidJvm]<br/>data class [FavoriteTracksDeezerPlayable](-favorite-tracks-deezer-playable/index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) = CURRENT_USER) : [DeezerPlayable](-deezer-playable/index.md)                                                                                                                                                                                                                                                                                                                                                                                    |
| [FlowConfigDeezerPlayable](-flow-config-deezer-playable/index.md)                           | [androidJvm]<br/>data class [FlowConfigDeezerPlayable](-flow-config-deezer-playable/index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [DeezerPlayable](-deezer-playable/index.md)<br/>Representation of _flow config_ , i.e an infinite and personalized music mix, playable by the **DeezerSDK**                                                                                                                                                                                                                                                                                           |
| [FlowDeezerPlayable](-flow-deezer-playable/index.md)                                        | [androidJvm]<br/>object [FlowDeezerPlayable](-flow-deezer-playable/index.md) : [DeezerPlayable](-deezer-playable/index.md)<br/>Representation of a user _flow_, i.e an infinite and personalized music mix, playable by the **DeezerSDK**                                                                                                                                                                                                                                                                                                                                                                                                       |
| [InfiniteTrackListDeezerPlayable](-infinite-track-list-deezer-playable/index.md)            | [androidJvm]<br/>data class [InfiniteTrackListDeezerPlayable](-infinite-track-list-deezer-playable/index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val initialTracks: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](-track-deezer-playable/index.md)&gt;?, val batchProvider: [DeezerInfiniteTrackListBatchProvider](-deezer-infinite-track-list-batch-provider/index.md)) : [DeezerPlayable](-deezer-playable/index.md)<br/>Representation of a content of type _infinite track list_ playable by the **_Deezer SDK_** |
| [PlaylistDeezerPlayable](-playlist-deezer-playable/index.md)                                | [androidJvm]<br/>data class [PlaylistDeezerPlayable](-playlist-deezer-playable/index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [DeezerPlayable](-deezer-playable/index.md)<br/>Representation of playlist of tracks playable by the **DeezerSDK**                                                                                                                                                                                                                                                                                                                                         |
| [SingleDeezerPlayable](-single-deezer-playable/index.md)                                    | [androidJvm]<br/>open class [SingleDeezerPlayable](-single-deezer-playable/index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val mediaId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null) : [DeezerPlayable](-deezer-playable/index.md)<br/>A representation of a content that can be played by the **_Deezer SDK_**                                                                                                                                                                                                                                |
| [SmartTrackListDeezerPlayable](-smart-track-list-deezer-playable/index.md)                  | [androidJvm]<br/>data class [SmartTrackListDeezerPlayable](-smart-track-list-deezer-playable/index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [DeezerPlayable](-deezer-playable/index.md)<br/>Representation of a content of type _smart track list_ playable by the **_Deezer SDK_**                                                                                                                                                                                                                                                                                                      |
| [TrackDeezerDownloadable](-track-deezer-downloadable/index.md)                              | [androidJvm]<br/>data class [TrackDeezerDownloadable](-track-deezer-downloadable/index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val mediaId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) : [DeezerDownloadable](-deezer-downloadable/index.md)<br/>Representation of a content of type _track_ downloadable by the **_DeezerSDK_**                                                                                                                                                                                                                   |
| [TrackDeezerPlayable](-track-deezer-playable/index.md)                                      | [androidJvm]<br/>data class [TrackDeezerPlayable](-track-deezer-playable/index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), var mediaId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)? = null, val playingContext: [DeezerPlayingContext](../com.deezer.sdk.player.model.context/-deezer-playing-context/index.md)) : [SingleDeezerPlayable](-single-deezer-playable/index.md)<br/>Representation of a content of type _track_ playable by the **_Deezer SDK_**                                                                                            |
| [TrackListDeezerPlayable](-track-list-deezer-playable/index.md)                             | [androidJvm]<br/>data class [TrackListDeezerPlayable](-track-list-deezer-playable/index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val tracks: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](-track-deezer-playable/index.md)&gt;) : [DeezerPlayable](-deezer-playable/index.md)<br/>Representation of a content of type _track list_ playable by the **_Deezer SDK_**                                                                                                                                                   |

## Properties

| Name                                       | Summary                                                                                                                                                                                                                                   |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CURRENT_USER](-c-u-r-r-e-n-t_-u-s-e-r.md) | [androidJvm]<br/>const val [CURRENT_USER](-c-u-r-r-e-n-t_-u-s-e-r.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)<br/>Representation of the favorite tracks of a user playable by the **DeezerSDK** |