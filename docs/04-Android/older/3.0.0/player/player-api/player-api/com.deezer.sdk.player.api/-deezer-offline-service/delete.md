//[player-api](../../../index.md)/[com.deezer.sdk.player.api](../index.md)/[DeezerOfflineService](index.md)/[delete](delete.md)

# delete

[androidJvm]\
abstract fun [delete](delete.md)(content: [DeezerDownloadable](../../com.deezer.sdk.player.model/-deezer-downloadable/index.md))

Register a content represented by a [DeezerDownloadable](../../com.deezer.sdk.player.model/-deezer-downloadable/index.md) for deletion from local device. Deleting will start asynchronously. Updates of synchronization status can be obtained by registering a [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md) to be called whenever the synchronization status changes.

## See also

androidJvm

| | |
|---|---|
| [com.deezer.sdk.player.api.DeezerOfflineService](download.md) |  |

## Parameters

androidJvm

| | |
|---|---|
| content | description of the content to be deleted from local device |
