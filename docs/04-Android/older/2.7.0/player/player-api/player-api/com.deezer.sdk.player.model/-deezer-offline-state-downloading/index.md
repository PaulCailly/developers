//[player-api](../../../index.md)/[com.deezer.sdk.player.model](../index.md)/[DeezerOfflineStateDownloading](index.md)

# DeezerOfflineStateDownloading

[androidJvm]\
data class [DeezerOfflineStateDownloading](index.md)(@[FloatRange](https://developer.android.com/reference/kotlin/androidx/annotation/FloatRange.html)(from = 0.0, to = 1.0)progress: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)) : [DeezerOfflineState](../-deezer-offline-state/index.md)

State for offline synchronization indicating that a [TrackDeezerPlayable](../-track-deezer-playable/index.md) is currently being downloaded on local device

## Parameters

androidJvm

|          |                                                                     |
| -------- | ------------------------------------------------------------------- |
| progress | progression of the download expressed as percentage between 0 and 1 |

## Constructors

|                                                                       |                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DeezerOfflineStateDownloading](-deezer-offline-state-downloading.md) | [androidJvm]<br/>fun [DeezerOfflineStateDownloading](-deezer-offline-state-downloading.md)(@[FloatRange](https://developer.android.com/reference/kotlin/androidx/annotation/FloatRange.html)(from = 0.0, to = 1.0)progress: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)) |

## Properties

| Name                    | Summary                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [progress](progress.md) | [androidJvm]<br/>val [progress](progress.md): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html) |
