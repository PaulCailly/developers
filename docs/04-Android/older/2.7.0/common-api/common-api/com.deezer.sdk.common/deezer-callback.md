//[common-api](../../index.md)/[com.deezer.sdk.common](index.md)/[deezerCallback](deezer-callback.md)

# deezerCallback

[androidJvm]\
fun &lt;[T](deezer-callback.md)&gt; [deezerCallback](deezer-callback.md)(onSuccess: ([T](deezer-callback.md)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)? = null, onFailure: ([Exception](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html)) -&gt; [Unit](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)? = null): [DeezerCallback](-deezer-callback/index.md)&lt;[T](deezer-callback.md)&gt;

Shortcut to create a [DeezerCallback](-deezer-callback/index.md) for individual actions [onSuccess](deezer-callback.md) and/or [onFailure](deezer-callback.md)

## Parameters

androidJvm

| | |
|---|---|
| onSuccess | Optional, callback called on success |
| onFailure | Optional, callback called on failure |
