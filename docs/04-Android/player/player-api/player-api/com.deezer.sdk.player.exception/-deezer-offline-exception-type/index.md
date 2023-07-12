//[player-api](../../../index.md)/[com.deezer.sdk.player.exception](../index.md)/[DeezerOfflineExceptionType](index.md)

# DeezerOfflineExceptionType

[androidJvm]\
enum [DeezerOfflineExceptionType](index.md) : [Enum](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-enum/index.html)&lt;[DeezerOfflineExceptionType](index.md)&gt;

Actual type of offline synchronization exception

## Entries

|                                                                                            |                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [UNEXPECTED_ERROR](-u-n-e-x-p-e-c-t-e-d_-e-r-r-o-r/index.md)                               | [androidJvm]<br/>[UNEXPECTED_ERROR](-u-n-e-x-p-e-c-t-e-d_-e-r-r-o-r/index.md)()<br/>The error cannot be typed to a known type. Likely to occur during preliminary steps of download process involving fetching of data about the media |
| [NOT_ENOUGH_SPACE_DISK_ERROR](-n-o-t_-e-n-o-u-g-h_-s-p-a-c-e_-d-i-s-k_-e-r-r-o-r/index.md) | [androidJvm]<br/>[NOT_ENOUGH_SPACE_DISK_ERROR](-n-o-t_-e-n-o-u-g-h_-s-p-a-c-e_-d-i-s-k_-e-r-r-o-r/index.md)()<br/>Download of media file could not start because the disk did not have enough free space (with a security margin)      |
| [IO_ERROR](-i-o_-e-r-r-o-r/index.md)                                                       | [androidJvm]<br/>[IO_ERROR](-i-o_-e-r-r-o-r/index.md)()<br/>An error occurred during writing of downloaded media file to the disk                                                                                                      |

## Properties

| Name                                                                                                                              | Summary                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](../../com.deezer.sdk.player.model.context/-deezer-context-type/-f-l-o-w/index.md#-372974862%2FProperties%2F-1037426161)    | [androidJvm]<br/>val [name](../../com.deezer.sdk.player.model.context/-deezer-context-type/-f-l-o-w/index.md#-372974862%2FProperties%2F-1037426161): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [ordinal](../../com.deezer.sdk.player.model.context/-deezer-context-type/-f-l-o-w/index.md#-739389684%2FProperties%2F-1037426161) | [androidJvm]<br/>val [ordinal](../../com.deezer.sdk.player.model.context/-deezer-context-type/-f-l-o-w/index.md#-739389684%2FProperties%2F-1037426161): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)    |
