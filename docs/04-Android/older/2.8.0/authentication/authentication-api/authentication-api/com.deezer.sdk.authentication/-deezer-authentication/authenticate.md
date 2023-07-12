//[authentication-api](../../../index.md)/[com.deezer.sdk.authentication](../index.md)/[DeezerAuthentication](index.md)/[authenticate](authenticate.md)

# authenticate

[androidJvm]\
abstract fun [authenticate](authenticate.md)(authorizationToken: [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html), authenticationCallback: [DeezerCallback](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-callback/index.md)&lt;[Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)&gt;): [DeezerTask](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-task/index.md)

Authenticate towards ***Deezer API***

This method performs retrieval of an access token allowing usage of authenticated features from ***Deezer***. It has to be called whenever [getAccessToken](get-access-token.md) call fails with a [DeezerAuthenticationExpiredException](../../com.deezer.sdk.authentication.exception/-deezer-authentication-expired-exception/index.md) or before any call to ***Deezer SDK*** in case no authentication has ever been performed.

#### Return

a [DeezerTask](../../../../../common-api/common-api/com.deezer.sdk.common/-deezer-task/index.md) to cancel the authentication process before completion

## Parameters

androidJvm

| | |
|---|---|
| authorizationToken | the temporary token allowing to retrieve an access token for Deezer API |
| authenticationCallback | Callback on the authentication process, returning completion or an exception |
