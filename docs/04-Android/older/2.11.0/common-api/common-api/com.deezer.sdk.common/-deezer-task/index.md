//[common-api](../../../index.md)/[com.deezer.sdk.common](../index.md)/[DeezerTask](index.md)

# DeezerTask

[androidJvm]\
interface [DeezerTask](index.md)

An asynchronous task launched by the **_Deezer SDK_**

It provides the possibility to [cancel](cancel.md) itself before completion.

**It is not intended to provide feedback on the completion of the task**. Public methods of **_Deezer SDK_** generally allow to provide a [DeezerCallback](../-deezer-callback/index.md) that is called asynchronously with the result of the action performed by the task

## Functions

| Name                | Summary                                                                 |
| ------------------- | ----------------------------------------------------------------------- |
| [cancel](cancel.md) | [androidJvm]<br/>abstract fun [cancel](cancel.md)()<br/>Cancel the task |
