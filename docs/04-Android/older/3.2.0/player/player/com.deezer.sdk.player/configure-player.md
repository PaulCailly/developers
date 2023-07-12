//[player](../../index.md)/[com.deezer.sdk.player](index.md)/[configurePlayer](configure-player.md)

# configurePlayer

[androidJvm]\
fun [DeezerSdk](../../../authentication/authentication/com.deezer.sdk/-deezer-sdk/index.md).[configurePlayer](configure-player.md)(config: [DeezerPlayerConfiguration](../../../player/player-api/player-api/com.deezer.sdk.player.api/-deezer-player-configuration/index.md))

Configure the [player](player.md)

**For your configuration to be used, this method has to be called before beginning to use the** [**player**](player.md)**. Therefore this method has no effect once** [**player**](player.md) **is called**

**NB: If you use it inside an** [**androidx.startup.Initializer**](https://developer.android.com/reference/kotlin/androidx/startup/Initializer.html)**, please be sure to add** [**com.deezer.sdk.init.DeezerPlayerInitializer**](../com.deezer.sdk.init/-deezer-player-initializer/index.md) **into the dependency list**

## Parameters

androidJvm

| | |
|---|---|
| config | Configuration needed by the player |
