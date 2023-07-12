//[authentication](../../../index.md)/[com.deezer.sdk](../index.md)/[DeezerSdk](index.md)

# DeezerSdk

[androidJvm]\
object [DeezerSdk](index.md)

The entry point of Deezer SDK. It holds common configuration and provides access to Deezer APIs.

In case no specific configuration is required, components of type **com.deezer.sdk.init.${MODULE}Initializer** will respectively handle the initialization of their Deezer SDK's module adequately with the values provided in the client app's _deezer.json_ config file.

These Initializers are running within a [android.content.ContentProvider](https://developer.android.com/reference/kotlin/android/content/ContentProvider.html) provided by Jetpack's _startup_ library that is merged into the app's manifest by default when building with Gradle, and it runs automatically at app launch. **No additional lines of code are needed in this case.**

## Extensions

| Name                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [authentication](../../com.deezer.sdk.authentication/authentication.md) | [androidJvm]<br/>val [DeezerSdk](index.md).[authentication](../../com.deezer.sdk.authentication/authentication.md): [DeezerAuthentication](../../../../authentication/com.deezer.sdk.authentication/-deezer-authentication/index.md)<br/>Shared instance of [DeezerAuthentication](../../../../authentication/com.deezer.sdk.authentication/-deezer-authentication/index.md) |
