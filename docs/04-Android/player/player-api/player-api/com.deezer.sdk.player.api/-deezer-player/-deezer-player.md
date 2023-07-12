//[player-api](../../../index.md)/[com.deezer.sdk.player.api](../index.md)/[DeezerPlayer](index.md)

# DeezerPlayer

[androidJvm]\
interface [DeezerPlayer](index.md) : [DeezerPlayerAction](../-deezer-player-action/index.md), [DeezerPlayerInfo](../-deezer-player-info/index.md)

Public interface to manage player into the **_Deezer SDK_**

## Functions

| Name                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getBufferedPosition](../-deezer-player-info/get-buffered-position.md)                               | [androidJvm]<br/>abstract fun [getBufferedPosition](../-deezer-player-info/get-buffered-position.md)(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br/>Get position until when the media content is buffered                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [getCurrentPosition](../-deezer-player-info/get-current-position.md)                                 | [androidJvm]<br/>abstract fun [getCurrentPosition](../-deezer-player-info/get-current-position.md)(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br/>Current position in the current media content                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [getDuration](../-deezer-player-info/get-duration.md)                                                | [androidJvm]<br/>abstract fun [getDuration](../-deezer-player-info/get-duration.md)(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br/>Duration of the current media content                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [getPlaybackState](../-deezer-player-info/get-playback-state.md)                                     | [androidJvm]<br/>abstract fun [getPlaybackState](../-deezer-player-info/get-playback-state.md)(): [DeezerPlaybackState](../../com.deezer.sdk.player.model/-deezer-playback-state/index.md)<br/>Current playback state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [goTo](../-deezer-player-action/go-to.md)                                                            | [androidJvm]<br/>abstract fun [goTo](../-deezer-player-action/go-to.md)(@[IntRange](https://developer.android.com/reference/kotlin/androidx/annotation/IntRange.html)(from = 0)index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), @[FloatRange](https://developer.android.com/reference/kotlin/androidx/annotation/FloatRange.html)(from = 0.0)startPositionInSeconds: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html) = 0.0)<br/>Go directly to a media content from its [index](../-deezer-player-action/go-to.md) in the queue and start its playback at offset position [startPositionInSeconds](../-deezer-player-action/go-to.md) |
| [next](../-deezer-player-action/next.md)                                                             | [androidJvm]<br/>abstract fun [next](../-deezer-player-action/next.md)()<br/>Go to next content                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [pause](../-deezer-player-action/pause.md)                                                           | [androidJvm]<br/>abstract fun [pause](../-deezer-player-action/pause.md)()<br/>Pause current current content                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [play](../-deezer-player-action/play.md)                                                             | [androidJvm]<br/>abstract fun [play](../-deezer-player-action/play.md)()<br/>Play/resume current content                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [previous](../-deezer-player-action/previous.md)                                                     | [androidJvm]<br/>abstract fun [previous](../-deezer-player-action/previous.md)()<br/>Go to previous content                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [seek](../-deezer-player-action/seek.md)                                                             | [androidJvm]<br/>abstract fun [seek](../-deezer-player-action/seek.md)(positionInSeconds: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html))<br/>Seek the current content                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [subscribeOnCurrentMediaChanged](../-deezer-player-info/subscribe-on-current-media-changed.md)       | [androidJvm]<br/>abstract fun [subscribeOnCurrentMediaChanged](../-deezer-player-info/subscribe-on-current-media-changed.md)(callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[DeezerCurrentMedia](../../com.deezer.sdk.player.model/-deezer-current-media/index.md)&gt;)<br/>Subscribe to change of the current [DeezerPlayable](../../com.deezer.sdk.player.model/-deezer-playable/index.md)                                                                                                                                                                                                                                        |
| [subscribeOnPlaybackProgress](../-deezer-player-info/subscribe-on-playback-progress.md)              | [androidJvm]<br/>abstract fun [subscribeOnPlaybackProgress](../-deezer-player-info/subscribe-on-playback-progress.md)(callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[DeezerPlayerProgress](../../com.deezer.sdk.player.model/-deezer-player-progress/index.md)&gt;)<br/>Subscribe to playback progress                                                                                                                                                                                                                                                                                                                             |
| [subscribeOnPlaybackStateChanged](../-deezer-player-info/subscribe-on-playback-state-changed.md)     | [androidJvm]<br/>abstract fun [subscribeOnPlaybackStateChanged](../-deezer-player-info/subscribe-on-playback-state-changed.md)(callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[DeezerPlaybackState](../../com.deezer.sdk.player.model/-deezer-playback-state/index.md)&gt;)<br/>Subscribe to changes on the [DeezerPlaybackState](../../com.deezer.sdk.player.model/-deezer-playback-state/index.md)                                                                                                                                                                                                                                |
| [subscribeOnPlayerError](../-deezer-player-info/subscribe-on-player-error.md)                        | [androidJvm]<br/>abstract fun [subscribeOnPlayerError](../-deezer-player-info/subscribe-on-player-error.md)(callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[DeezerPlayerExceptionContext](../../com.deezer.sdk.player.exception/-deezer-player-exception-context/index.md)&gt;)<br/>Subscribe to errors happening in the **_Deezer Player_**                                                                                                                                                                                                                                                                                        |
| [subscribeOnPlayerLimitation](../-deezer-player-info/subscribe-on-player-limitation.md)              | [androidJvm]<br/>abstract fun [subscribeOnPlayerLimitation](../-deezer-player-info/subscribe-on-player-limitation.md)(listener: [DeezerPlayerLimitationListener](../-deezer-player-limitation-listener/index.md))<br/>Subscribe to player playback limitation events                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [unsubscribeOnCurrentMediaChanged](../-deezer-player-info/unsubscribe-on-current-media-changed.md)   | [androidJvm]<br/>abstract fun [unsubscribeOnCurrentMediaChanged](../-deezer-player-info/unsubscribe-on-current-media-changed.md)(callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[DeezerCurrentMedia](../../com.deezer.sdk.player.model/-deezer-current-media/index.md)&gt;)<br/>Unsubscribe to change of the Current [DeezerPlayable](../../com.deezer.sdk.player.model/-deezer-playable/index.md)                                                                                                                                                                                                                                  |
| [unsubscribeOnPlaybackProgress](../-deezer-player-info/unsubscribe-on-playback-progress.md)          | [androidJvm]<br/>abstract fun [unsubscribeOnPlaybackProgress](../-deezer-player-info/unsubscribe-on-playback-progress.md)(callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[DeezerPlayerProgress](../../com.deezer.sdk.player.model/-deezer-player-progress/index.md)&gt;)<br/>Unsubscribe to playback progress                                                                                                                                                                                                                                                                                                                       |
| [unsubscribeOnPlaybackStateChanged](../-deezer-player-info/unsubscribe-on-playback-state-changed.md) | [androidJvm]<br/>abstract fun [unsubscribeOnPlaybackStateChanged](../-deezer-player-info/unsubscribe-on-playback-state-changed.md)(callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[DeezerPlaybackState](../../com.deezer.sdk.player.model/-deezer-playback-state/index.md)&gt;)<br/>Unsubscribe to changes on the [DeezerPlaybackState](../../com.deezer.sdk.player.model/-deezer-playback-state/index.md)                                                                                                                                                                                                                          |
| [unsubscribeOnPlayerError](../-deezer-player-info/unsubscribe-on-player-error.md)                    | [androidJvm]<br/>abstract fun [unsubscribeOnPlayerError](../-deezer-player-info/unsubscribe-on-player-error.md)(callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[DeezerPlayerExceptionContext](../../com.deezer.sdk.player.exception/-deezer-player-exception-context/index.md)&gt;)<br/>Unsubscribe to errors happening in the **_Deezer Player_**                                                                                                                                                                                                                                                                                  |
| [unsubscribeOnPlayerLimitation](../-deezer-player-info/unsubscribe-on-player-limitation.md)          | [androidJvm]<br/>abstract fun [unsubscribeOnPlayerLimitation](../-deezer-player-info/unsubscribe-on-player-limitation.md)(listener: [DeezerPlayerLimitationListener](../-deezer-player-limitation-listener/index.md))<br/>Unsubscribe to player playback limitation events                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Properties

| Name                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [offlineService](offline-service.md)                                   | [androidJvm]<br/>abstract val [offlineService](offline-service.md): [DeezerOfflineService](../-deezer-offline-service/index.md)                                                                                                                                                                                                                                                                                |
| [playbackSpeed](../-deezer-player-action/playback-speed.md)            | [androidJvm]<br/>abstract var [playbackSpeed](../-deezer-player-action/playback-speed.md): [Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html)<br/>Multiplier applied to playback speed of media files.                                                                                                                                                                             |
| [playbackSpeedRange](../-deezer-player-action/playback-speed-range.md) | [androidJvm]<br/>abstract val [playbackSpeedRange](../-deezer-player-action/playback-speed-range.md): [ClosedFloatingPointRange](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-closed-floating-point-range/index.html)&lt;[Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html)&gt;<br/>Range of allowed values for multiplier applied to playback speed of media files |
| [queueList](queue-list.md)                                             | [androidJvm]<br/>abstract val [queueList](queue-list.md): [DeezerQueueList](../-deezer-queue-list/index.md)                                                                                                                                                                                                                                                                                                    |
| [settings](settings.md)                                                | [androidJvm]<br/>abstract val [settings](settings.md): [DeezerPlayerSettings](../-deezer-player-settings/index.md)                                                                                                                                                                                                                                                                                             |
| [volume](../-deezer-player-action/volume.md)                           | [androidJvm]<br/>abstract var [volume](../-deezer-player-action/volume.md): [Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html)<br/>Volume of the playback expressed as the fraction of the system media volume.                                                                                                                                                                    |