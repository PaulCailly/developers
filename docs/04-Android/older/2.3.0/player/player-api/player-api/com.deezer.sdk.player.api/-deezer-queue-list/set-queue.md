//[player-api](../../../index.md)/[com.deezer.sdk.player.api](../index.md)/[DeezerQueueList](index.md)/[setQueue](set-queue.md)

# setQueue

[androidJvm]\
abstract fun [setQueue](set-queue.md)(playable: [DeezerPlayable](../../com.deezer.sdk.player.model/-deezer-playable/index.md), @[IntRange](https://developer.android.com/reference/kotlin/androidx/annotation/IntRange.html)(from = 0)index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null)

Set the current queue, and replace the previous one if any.

## Parameters

androidJvm

| | |
|---|---|
| playable | Playable content |
| index | Optional, index at which the playback of the [playable](set-queue.md) should begin. If null, equal or above to queue size, playback will start from index 0 |
