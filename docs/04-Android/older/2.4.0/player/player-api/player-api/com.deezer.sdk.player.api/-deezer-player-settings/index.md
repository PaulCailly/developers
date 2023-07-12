//[player-api](../../../index.md)/[com.deezer.sdk.player.api](../index.md)/[DeezerPlayerSettings](index.md)

# DeezerPlayerSettings

[androidJvm]\
interface [DeezerPlayerSettings](index.md)

Public interface to set and get **_Deezer SDK Player_** settings. These settings are persisted through the sessions.

## Functions

| Name                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [updateMediaCacheSizeLimit](update-media-cache-size-limit.md) | [androidJvm]<br/>abstract fun [updateMediaCacheSizeLimit](update-media-cache-size-limit.md)(@[IntRange](https://developer.android.com/reference/kotlin/androidx/annotation/IntRange.html)(from = 0)cacheSizeInBytes: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)<br/>Update the maximum cache size allocated to the **_Deezer Player_** to store media files. |

## Properties

| Name                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [currentMediaCacheSizeLimitInBytes](current-media-cache-size-limit-in-bytes.md) | [androidJvm]<br/>abstract val [currentMediaCacheSizeLimitInBytes](current-media-cache-size-limit-in-bytes.md): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)<br/>Maximum cache size allocated to the **_Deezer Player_** to store media files. The size is expressed in Bytes and will always be contained in [mediaCacheSizeLimitRangeInBytes](media-cache-size-limit-range-in-bytes.md). |
| [mediaCacheSizeLimitRangeInBytes](media-cache-size-limit-range-in-bytes.md)     | [androidJvm]<br/>abstract val [mediaCacheSizeLimitRangeInBytes](media-cache-size-limit-range-in-bytes.md): [LongRange](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html)<br/>Range of allowed maximum cache size allocated to the **_Deezer Player_** to store media files. The size is expressed in Bytes.                                                                              |
