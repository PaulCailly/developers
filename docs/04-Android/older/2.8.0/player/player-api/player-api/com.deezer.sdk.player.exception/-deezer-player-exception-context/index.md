//[player-api](../../../index.md)/[com.deezer.sdk.player.exception](../index.md)/[DeezerPlayerExceptionContext](index.md)

# DeezerPlayerExceptionContext

[androidJvm]\
class [DeezerPlayerExceptionContext](index.md)(track: [TrackDeezerPlayable](../../com.deezer.sdk.player.model/-track-deezer-playable/index.md), index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), exception: [DeezerPlayerException](../-deezer-player-exception/index.md))

Context surrounding the throw of a [DeezerPlayerException](../-deezer-player-exception/index.md)

## Parameters

androidJvm

|           |                                                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| track     | the [TrackDeezerPlayable](../../com.deezer.sdk.player.model/-track-deezer-playable/index.md) for which the exception occurred |
| index     | Index of the [track](track.md) in the queue list when exception thrown                                                        |
| exception | Player exception thrown                                                                                                       |

## Constructors

|                                                                     |                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [DeezerPlayerExceptionContext](-deezer-player-exception-context.md) | [androidJvm]<br/>fun [DeezerPlayerExceptionContext](-deezer-player-exception-context.md)(track: [TrackDeezerPlayable](../../com.deezer.sdk.player.model/-track-deezer-playable/index.md), index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), exception: [DeezerPlayerException](../-deezer-player-exception/index.md)) |

## Properties

| Name                      | Summary                                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [exception](exception.md) | [androidJvm]<br/>val [exception](exception.md): [DeezerPlayerException](../-deezer-player-exception/index.md)                    |
| [index](--index--.md)     | [androidJvm]<br/>val [index](--index--.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)           |
| [track](track.md)         | [androidJvm]<br/>val [track](track.md): [TrackDeezerPlayable](../../com.deezer.sdk.player.model/-track-deezer-playable/index.md) |
