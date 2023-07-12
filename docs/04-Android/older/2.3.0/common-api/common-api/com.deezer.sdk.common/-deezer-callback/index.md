//[common-api](../../../index.md)/[com.deezer.sdk.common](../index.md)/[DeezerCallback](index.md)

# DeezerCallback

[androidJvm]\
interface [DeezerCallback](index.md)&lt;[T](index.md)&gt;

Base interface for Deezer action callback

## Parameters

androidJvm

|     |                             |
| --- | --------------------------- |
| T   | Type of the callback result |

## Functions

| Name                       | Summary                                                                                                                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [onFailure](on-failure.md) | [androidJvm]<br/>abstract fun [onFailure](on-failure.md)(exception: [Exception](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html))<br/>The action has failed |
| [onSuccess](on-success.md) | [androidJvm]<br/>abstract fun [onSuccess](on-success.md)(result: [T](index.md))<br/>The action is successful                                                                          |
