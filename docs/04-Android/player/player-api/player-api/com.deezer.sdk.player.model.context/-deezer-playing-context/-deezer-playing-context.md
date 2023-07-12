//[player-api](../../../index.md)/[com.deezer.sdk.player.model.context](../index.md)/[DeezerPlayingContext](index.md)

# DeezerPlayingContext

[androidJvm]\
data class [DeezerPlayingContext](index.md)(val contextType: [DeezerContextType](../-deezer-context-type/index.md), val containerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))

Describes the origin (aka the context) from where a playable content is picked up at the time it is enqueued in the player

## Parameters

androidJvm

|             |                                                         |
| ----------- | ------------------------------------------------------- |
| contextType | Type of the context in which the content will be played |
| containerId | Id of the container holding the content                 |

## Constructors

|                                                    |                                                                                                                                                                                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [DeezerPlayingContext](-deezer-playing-context.md) | [androidJvm]<br/>fun [DeezerPlayingContext](-deezer-playing-context.md)(contextType: [DeezerContextType](../-deezer-context-type/index.md), containerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)) |

## Properties

| Name                           | Summary                                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| [containerId](container-id.md) | [androidJvm]<br/>val [containerId](container-id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [contextType](context-type.md) | [androidJvm]<br/>val [contextType](context-type.md): [DeezerContextType](../-deezer-context-type/index.md)                            |
