//[authentication-api](../../../index.md)/[com.deezer.sdk.authentication](../index.md)/[DeezerAuthenticationListener](index.md)/[authenticationNeeded](authentication-needed.md)

# authenticationNeeded

[androidJvm]\
open fun [authenticationNeeded](authentication-needed.md)()

Event notification indicating that ***Deezer SDK*** will not be able to retrieve a valid access token granting access to ***Deezer API*** anymore.

This method gets called by ***Deezer SDK*** after a fatal error during an attempt to retrieve a valid access token on behalf of client application.

Once this method is triggered, any further call to ***Deezer API*** will fail until a new authentication is performed by client application by calling [DeezerAuthentication.authenticate](../-deezer-authentication/authenticate.md) with one of available methods
