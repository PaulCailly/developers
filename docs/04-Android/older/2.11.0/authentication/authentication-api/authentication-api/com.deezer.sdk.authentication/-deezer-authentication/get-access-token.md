//[authentication-api](../../../index.md)/[com.deezer.sdk.authentication](../index.md)/[DeezerAuthentication](index.md)/[getAccessToken](get-access-token.md)

# getAccessToken

[androidJvm]\
abstract fun [getAccessToken](get-access-token.md)(accessTokenCallback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)&gt;): [DeezerTask](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-task/index.md)

Get a valid access token granting access to ***Deezer API***

#### Return

a [DeezerTask](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-task/index.md) to cancel the access token retrieval process before completion

## See also

androidJvm

| | |
|---|---|
| [com.deezer.sdk.authentication.DeezerAuthentication](authenticate.md) |  |

## Parameters

androidJvm

| | |
|---|---|
| accessTokenCallback | Callback returning a valid access token or a [DeezerAuthenticationExpiredException](../../com.deezer.sdk.authentication.exception/-deezer-authentication-expired-exception/index.md) if access token could not be renewed because of expired authorization |
