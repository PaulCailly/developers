//[player-api](../../../index.md)/[com.deezer.sdk.player.api](../index.md)/[DeezerOfflineService](index.md)/[cancel](cancel.md)

# cancel

[androidJvm]\
abstract fun [cancel](cancel.md)(content: [DeezerDownloadable](../../com.deezer.sdk.player.model/-deezer-downloadable/index.md))

Register a content represented by a [DeezerDownloadable](../../com.deezer.sdk.player.model/-deezer-downloadable/index.md) for download cancellation, if download is currently being done or is pending. If the content is already downloaded, the content will be deleted from the local device. Cancellation or deletion will start asynchronously. Updates of synchronization status can be obtained by registering a [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md) to be called whenever the synchronization status changes.

## See also

androidJvm

| | |
|---|---|
| [com.deezer.sdk.player.api.DeezerOfflineService](subscribe-on-synchronization-status-changed.md) |  |

## Parameters

androidJvm

| | |
|---|---|
| content | description of the content for which the download must be cancelled |
