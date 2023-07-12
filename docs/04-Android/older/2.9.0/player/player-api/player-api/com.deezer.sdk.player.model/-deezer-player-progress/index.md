//[player-api](../../../index.md)/[com.deezer.sdk.player.model](../index.md)/[DeezerPlayerProgress](index.md)

# DeezerPlayerProgress

[androidJvm]\
data class [DeezerPlayerProgress](index.md)(position: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), duration: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), bufferingPosition: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html))

Playback progress of the current track

## Parameters

androidJvm

|                   |                                      |
| ----------------- | ------------------------------------ |
| position          | Position of the playback in seconds  |
| duration          | Duration of the track in seconds     |
| bufferingPosition | Position of the buffering in seconds |

## Constructors

|                                                    |                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DeezerPlayerProgress](-deezer-player-progress.md) | [androidJvm]<br/>fun [DeezerPlayerProgress](-deezer-player-progress.md)(position: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), duration: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html), bufferingPosition: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)) |

## Properties

| Name                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [bufferingPosition](buffering-position.md)                | [androidJvm]<br/>val [bufferingPosition](buffering-position.md): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)                                                                                                                                                                                                                        |
| [bufferingPositionPercent](buffering-position-percent.md) | [androidJvm]<br/>val [bufferingPositionPercent](buffering-position-percent.md): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br/>Position of the buffering expressed as a percentage of the track duration. This value goes from 0 to 1 and is computed from [bufferingPosition](buffering-position.md) and [duration](duration.md). |
| [duration](duration.md)                                   | [androidJvm]<br/>val [duration](duration.md): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)                                                                                                                                                                                                                                           |
| [position](position.md)                                   | [androidJvm]<br/>val [position](position.md): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)                                                                                                                                                                                                                                           |
| [positionPercent](position-percent.md)                    | [androidJvm]<br/>val [positionPercent](position-percent.md): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br/>Position of the playback expressed as a percentage of the track duration. This value goes from 0 to 1 and is computed from [position](position.md) and [duration](duration.md).                                        |
