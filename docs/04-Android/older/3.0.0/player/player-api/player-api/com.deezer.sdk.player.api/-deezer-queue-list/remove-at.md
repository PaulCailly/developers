//[player-api](../../../index.md)/[com.deezer.sdk.player.api](../index.md)/[DeezerQueueList](index.md)/[removeAt](remove-at.md)

# removeAt

[androidJvm]\
abstract fun [removeAt](remove-at.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)&lt;[TrackDeezerPlayable](../../com.deezer.sdk.player.model/-track-deezer-playable/index.md)&gt;&gt;? = null)

Remove **Asynchronously** a [TrackDeezerPlayable](../../com.deezer.sdk.player.model/-track-deezer-playable/index.md) at the specified [index](remove-at.md) from the queue

**Disclaimer:** Please for consistency purpose, when using this method, do not use methods setQueue(playable, index), add(playable, index) and removeAt(index) but their respective asynchronous version

## Parameters

androidJvm

| | |
|---|---|
| callback | Optional, callback on the removal. Returns new queue on success, or a specific [com.deezer.sdk.player.exception.DeezerQueueException](../../com.deezer.sdk.player.exception/-deezer-queue-exception/index.md) in case of failure or cancellation |
