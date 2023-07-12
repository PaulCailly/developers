//[authentication-api](../../../index.md)/[com.deezer.sdk.authentication](../index.md)/[DeezerAuthenticationListener](index.md)

# DeezerAuthenticationListener

[androidJvm]\
interface [DeezerAuthenticationListener](index.md)

Callback interface allowing to receive events / changes related to status of authentication towards **_Deezer API_**

## Functions

| Name                                                            | Summary                                                                                                                                                                                                                                                                      |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [authenticationNeeded](authentication-needed.md)                | [androidJvm]<br/>open fun [authenticationNeeded](authentication-needed.md)()<br/>Event notification indicating that **_Deezer SDK_** will not be able to retrieve a valid access token granting access to **_Deezer API_** anymore.                                          |
| [authenticationStatusChanged](authentication-status-changed.md) | [androidJvm]<br/>open fun [authenticationStatusChanged](authentication-status-changed.md)(isAuthenticated: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br/>Notification of a change in authentication status within **_Deezer SDK_** |
