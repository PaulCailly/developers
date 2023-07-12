//[player-api](../../index.md)/[com.deezer.sdk.player.model.context](index.md)

# Package com.deezer.sdk.player.model.context

## Types

| Name                                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DeezerContextType](-deezer-context-type/index.md)       | [androidJvm]<br/>enum [DeezerContextType](-deezer-context-type/index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[DeezerContextType](-deezer-context-type/index.md)&gt; <br/>Represents the type of the origin (aka context) of a playable content                                                                                                |
| [DeezerPlayingContext](-deezer-playing-context/index.md) | [androidJvm]<br/>data class [DeezerPlayingContext](-deezer-playing-context/index.md)(val contextType: [DeezerContextType](-deezer-context-type/index.md), val containerId: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html))<br/>Describes the origin (aka the context) from where a playable content is picked up at the time it is enqueued in the player |

## Properties

| Name                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [UNDEFINED_DEEZER_PLAYING_CONTEXT](-u-n-d-e-f-i-n-e-d_-d-e-e-z-e-r_-p-l-a-y-i-n-g_-c-o-n-t-e-x-t.md) | [androidJvm]<br/>val [UNDEFINED_DEEZER_PLAYING_CONTEXT](-u-n-d-e-f-i-n-e-d_-d-e-e-z-e-r_-p-l-a-y-i-n-g_-c-o-n-t-e-x-t.md): [DeezerPlayingContext](-deezer-playing-context/index.md)<br/>Singleton to represent an undefined [DeezerPlayingContext](-deezer-playing-context/index.md). Its values are purely placeholders and should not be used in any circumstances. |