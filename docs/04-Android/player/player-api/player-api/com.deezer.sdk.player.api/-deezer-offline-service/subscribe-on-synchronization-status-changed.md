//[player-api](../../../index.md)/[com.deezer.sdk.player.api](../index.md)/[DeezerOfflineService](index.md)/[subscribeOnSynchronizationStatusChanged](subscribe-on-synchronization-status-changed.md)

# subscribeOnSynchronizationStatusChanged

[androidJvm]\
abstract fun [subscribeOnSynchronizationStatusChanged](subscribe-on-synchronization-status-changed.md)(content: [DeezerDownloadable](../../com.deezer.sdk.player.model/-deezer-downloadable/index.md), callback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[DeezerOfflineState](../../com.deezer.sdk.player.model/-deezer-offline-state/index.md)&gt;)

Subscribe to changes of [DeezerOfflineState](../../com.deezer.sdk.player.model/-deezer-offline-state/index.md) for a given content represented by a [DeezerDownloadable](../../com.deezer.sdk.player.model/-deezer-downloadable/index.md)

**_Caution:_** Only one callback can be registered at a time for a given [DeezerDownloadable](../../com.deezer.sdk.player.model/-deezer-downloadable/index.md). Calling this method multiple times for the same [DeezerDownloadable](../../com.deezer.sdk.player.model/-deezer-downloadable/index.md) will overwrite any previously registered callback.

## See also

androidJvm

|                                                                                                    |     |
| -------------------------------------------------------------------------------------------------- | --- |
| [com.deezer.sdk.player.api.DeezerOfflineService](unsubscribe-on-synchronization-status-changed.md) |     |

## Parameters

androidJvm

|          |                                                                                                                                              |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| content  | description of the content for which Updates of synchronization status are expected                                                          |
| callback | Callback to subscribe<br/>**_Disclaimer:_** **To avoid unexpected garbage collection, please keep a reference on the callback on your side** |
