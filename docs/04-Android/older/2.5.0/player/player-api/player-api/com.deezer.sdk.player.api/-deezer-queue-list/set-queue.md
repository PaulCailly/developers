//[player-api](../../../index.md)/[com.deezer.sdk.player.api](../index.md)/[DeezerQueueList](index.md)/[setQueue](set-queue.md)

# setQueue

[androidJvm]\
~~abstract~~ ~~fun~~ [~~setQueue~~](set-queue.md)~~(~~~~playable~~~~:~~ [DeezerPlayable](../../com.deezer.sdk.player.model/-deezer-playable/index.md)~~,~~ @[IntRange](https://developer.android.com/reference/kotlin/androidx/annotation/IntRange.html)(from = 0)~~index~~~~:~~ [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? ~~=~~ ~~null~~~~)~~

Set **Synchronously** the current queue, and replace the previous one if any.

**Disclaimer:** Please for consistency purpose, when using this method, do not use methods setQueue(playable, callback, index), add(playable, callback, index) and removeAt(index, callback) but their respective synchronous version

## Parameters

androidJvm

| | |
|---|---|
| playable | Playable content |
| index | Optional, index at which the playback of the [playable](set-queue.md) should begin. If null, equal or above to queue size, playback will start from index 0 |

[androidJvm]\
abstract fun [setQueue](set-queue.md)(playable: [DeezerPlayable](../../com.deezer.sdk.player.model/-deezer-playable/index.md), callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](../../com.deezer.sdk.player.model/-track-deezer-playable/index.md)&gt;&gt;? = null, @[IntRange](https://developer.android.com/reference/kotlin/androidx/annotation/IntRange.html)(from = 0)index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)? = null)

Set **Asynchronously** the current queue, and replace the previous one if any.

**Disclaimer:** Please for consistency purpose, when using this method, do not use methods setQueue(playable, index), add(playable, index) and removeAt(index) but their respective asynchronous version

## Parameters

androidJvm

| | |
|---|---|
| playable | Playable content |
| callback | Optional, Callback on the set. Returns new queue on success, or a specific [com.deezer.sdk.player.exception.DeezerQueueException](../../com.deezer.sdk.player.exception/-deezer-queue-exception/index.md) in case of failure or cancellation |
| index | Optional, index at which the playback of the [playable](set-queue.md) should begin. If null, equal or above to queue size, playback will start from index 0 |
