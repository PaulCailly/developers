//[player-api](../../../index.md)/[com.deezer.sdk.player.api](../index.md)/[DeezerQueueList](index.md)/[add](add.md)

# add

[androidJvm]\
abstract fun [add](add.md)(playable: [DeezerPlayable](../../com.deezer.sdk.player.model/-deezer-playable/index.md), @[IntRange](https://developer.android.com/reference/kotlin/androidx/annotation/IntRange.html)(from = 0)index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null)

Add to the current queue.

## Parameters

androidJvm

| | |
|---|---|
| playable | Playable content to add to the queue |
| index | Optional, index where to add the [playable](add.md). If null, equal or above to queue size, added to the end of the queue. |
