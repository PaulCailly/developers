//[player-api](../../../index.md)/[com.deezer.sdk.player.api](../index.md)/[DeezerPlayerAction](index.md)

# DeezerPlayerAction

[androidJvm]\
interface [DeezerPlayerAction](index.md)

Interface offering controls over playback of media represented by a [DeezerPlayable](../../com.deezer.sdk.player.model/-deezer-playable/index.md) being currently played by **_Deezer SDK_**

## Functions

| Name                    | Summary                                                                                                                                                                                                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [goTo](go-to.md)        | [androidJvm]<br/>abstract fun [goTo](go-to.md)(@[IntRange](https://developer.android.com/reference/kotlin/androidx/annotation/IntRange.html)(from = 0)index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))<br/>Go directly to a media content from its [index](go-to.md) in the queue |
| [next](next.md)         | [androidJvm]<br/>abstract fun [next](next.md)()<br/>Go to next content                                                                                                                                                                                                                                              |
| [pause](pause.md)       | [androidJvm]<br/>abstract fun [pause](pause.md)()<br/>Pause current current content                                                                                                                                                                                                                                 |
| [play](play.md)         | [androidJvm]<br/>abstract fun [play](play.md)()<br/>Play/resume current content                                                                                                                                                                                                                                     |
| [previous](previous.md) | [androidJvm]<br/>abstract fun [previous](previous.md)()<br/>Go to previous content                                                                                                                                                                                                                                  |
| [seek](seek.md)         | [androidJvm]<br/>abstract fun [seek](seek.md)(positionInSeconds: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html))<br/>Seek the current content                                                                                                                                     |

## Properties

| Name                                          | Summary                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [playbackSpeed](playback-speed.md)            | [androidJvm]<br/>abstract var [playbackSpeed](playback-speed.md): [Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html)<br/>Multiplier applied to playback speed of media files.                                                                                                                                                                             |
| [playbackSpeedRange](playback-speed-range.md) | [androidJvm]<br/>abstract val [playbackSpeedRange](playback-speed-range.md): [ClosedFloatingPointRange](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-closed-floating-point-range/index.html)&lt;[Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html)&gt;<br/>Range of allowed values for multiplier applied to playback speed of media files |
| [volume](volume.md)                           | [androidJvm]<br/>abstract var [volume](volume.md): [Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html)<br/>Volume of the playback expressed as the fraction of the system media volume.                                                                                                                                                                    |

## Inheritors

| Name                                       |
| ------------------------------------------ |
| [DeezerPlayer](../-deezer-player/index.md) |
