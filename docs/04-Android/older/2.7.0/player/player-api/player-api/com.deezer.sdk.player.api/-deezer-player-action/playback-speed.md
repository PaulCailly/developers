//[player-api](../../../index.md)/[com.deezer.sdk.player.api](../index.md)/[DeezerPlayerAction](index.md)/[playbackSpeed](playback-speed.md)

# playbackSpeed

[androidJvm]\
abstract var [playbackSpeed](playback-speed.md): [Float](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-float/index.html)

Multiplier applied to playback speed of media files.

The value for standard playback speed is **1.0**. Any lower value will slow down playback of media files. Any higher value will speed up playback of media files.

If the multiplier value provided is not contained within allowed boundaries defined in [playbackSpeedRange](playback-speed-range.md), the value will be coerced to the closest limit.
