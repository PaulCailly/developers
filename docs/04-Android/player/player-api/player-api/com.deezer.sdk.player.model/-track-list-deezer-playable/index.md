//[player-api](../../../index.md)/[com.deezer.sdk.player.model](../index.md)/[TrackListDeezerPlayable](index.md)

# TrackListDeezerPlayable

[androidJvm]\
data class [TrackListDeezerPlayable](index.md)(val id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), val tracks: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](../-track-deezer-playable/index.md)&gt;) : [DeezerPlayable](../-deezer-playable/index.md)

Representation of a content of type _track list_ playable by the **_Deezer SDK_**

## Parameters

androidJvm

|        |                                                                                            |
| ------ | ------------------------------------------------------------------------------------------ |
| id     | see [DeezerPlayable.id](../-deezer-playable/id.md)                                         |
| tracks | List of [TrackDeezerPlayable](../-track-deezer-playable/index.md) composing the track list |

## Constructors

|                                                           |                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TrackListDeezerPlayable](-track-list-deezer-playable.md) | [androidJvm]<br/>fun [TrackListDeezerPlayable](-track-list-deezer-playable.md)(id: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), tracks: [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](../-track-deezer-playable/index.md)&gt;) |

## Properties

| Name                | Summary                                                                                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](id.md)         | [androidJvm]<br/>open override val [id](id.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                                                                    |
| [tracks](tracks.md) | [androidJvm]<br/>val [tracks](tracks.md): [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](../-track-deezer-playable/index.md)&gt; |
