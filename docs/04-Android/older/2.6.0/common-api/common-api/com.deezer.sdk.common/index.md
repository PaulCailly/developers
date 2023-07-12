//[common-api](../../index.md)/[com.deezer.sdk.common](index.md)

# Package com.deezer.sdk.common

## Types

| Name                                        | Summary                                                                                                                                                    |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DeezerCallback](-deezer-callback/index.md) | [androidJvm]<br/>interface [DeezerCallback](-deezer-callback/index.md)&lt;[T](-deezer-callback/index.md)&gt;<br/>Base interface for Deezer action callback |
| [DeezerTask](-deezer-task/index.md)         | [androidJvm]<br/>interface [DeezerTask](-deezer-task/index.md)<br/>An asynchronous task launched by the **_Deezer SDK_**                                   |

## Functions

| Name                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deezerCallback](deezer-callback.md) | [androidJvm]<br/>fun &lt;[T](deezer-callback.md)&gt; [deezerCallback](deezer-callback.md)(onSuccess: ([T](deezer-callback.md)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)? = null, onFailure: ([Exception](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)? = null): [DeezerCallback](-deezer-callback/index.md)&lt;[T](deezer-callback.md)&gt;<br/>Shortcut to create a [DeezerCallback](-deezer-callback/index.md) for individual actions [onSuccess](deezer-callback.md) and/or [onFailure](deezer-callback.md) |
