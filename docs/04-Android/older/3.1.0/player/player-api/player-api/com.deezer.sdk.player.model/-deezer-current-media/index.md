//[player-api](../../../index.md)/[com.deezer.sdk.player.model](../index.md)/[DeezerCurrentMedia](index.md)

# DeezerCurrentMedia

[androidJvm]\
data class [DeezerCurrentMedia](index.md)(val index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), val playable: [TrackDeezerPlayable](../-track-deezer-playable/index.md)?)

Model describing current media content from the queue of the **_Deezer Player_**

## Constructors

|                                                |                                                                                                                                                                                                                              |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DeezerCurrentMedia](-deezer-current-media.md) | [androidJvm]<br/>fun [DeezerCurrentMedia](-deezer-current-media.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), playable: [TrackDeezerPlayable](../-track-deezer-playable/index.md)?) |

## Types

| Name                             | Summary                                                  |
| -------------------------------- | -------------------------------------------------------- |
| [Companion](-companion/index.md) | [androidJvm]<br/>object [Companion](-companion/index.md) |

## Properties

| Name                    | Summary                                                                                                                                                                                                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index](--index--.md)   | [androidJvm]<br/>val [index](--index--.md): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br/>Index in the queue of current media content. If no current media available, the value is equal to [NO_MEDIA](-companion/-n-o_-m-e-d-i-a.md). |
| [playable](playable.md) | [androidJvm]<br/>val [playable](playable.md): [TrackDeezerPlayable](../-track-deezer-playable/index.md)?<br/>The current media content if any, null otherwise                                                                                                           |
