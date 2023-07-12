//[player-api](../../../index.md)/[com.deezer.sdk.player.exception](../index.md)/[DeezerQueueFetchingException](index.md)

# DeezerQueueFetchingException

[androidJvm]\
class [DeezerQueueFetchingException](index.md)(val playable: [DeezerPlayable](../../com.deezer.sdk.player.model/-deezer-playable/index.md)) : [DeezerQueueException](../-deezer-queue-exception/index.md)

Exception raised when the fetching of the content associated to the [playable](playable.md) has encountered an error in the **Deezer SDK Player**. Reason could be linked to the network, the parsing of the content etc.

**Please note that the case where the content is not found for a given id is raised via the** [**com.deezer.sdk.player.exception.DeezerQueueIdNotFoundException**](../-deezer-queue-id-not-found-exception/index.md)

## Parameters

androidJvm

|          |                                                                                                         |
| -------- | ------------------------------------------------------------------------------------------------------- |
| playable | [DeezerPlayable](../../com.deezer.sdk.player.model/-deezer-playable/index.md) whose fetching has failed |

## Constructors

|                                                                     |                                                                                                                                                                                   |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DeezerQueueFetchingException](-deezer-queue-fetching-exception.md) | [androidJvm]<br/>fun [DeezerQueueFetchingException](-deezer-queue-fetching-exception.md)(playable: [DeezerPlayable](../../com.deezer.sdk.player.model/-deezer-playable/index.md)) |

## Functions

| Name                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [addSuppressed](../-unsupported-deezer-playable-exception/index.md#282858770%2FFunctions%2F-1037426161)        | [androidJvm]<br/>fun [addSuppressed](../-unsupported-deezer-playable-exception/index.md#282858770%2FFunctions%2F-1037426161)(p0: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html))                                                                                                                                                                                                                                                                                                                                                        |
| [fillInStackTrace](../-unsupported-deezer-playable-exception/index.md#-1102069925%2FFunctions%2F-1037426161)   | [androidJvm]<br/>open fun [fillInStackTrace](../-unsupported-deezer-playable-exception/index.md#-1102069925%2FFunctions%2F-1037426161)(): [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)                                                                                                                                                                                                                                                                                                                                                |
| [getLocalizedMessage](../-unsupported-deezer-playable-exception/index.md#1043865560%2FFunctions%2F-1037426161) | [androidJvm]<br/>open fun [getLocalizedMessage](../-unsupported-deezer-playable-exception/index.md#1043865560%2FFunctions%2F-1037426161)(): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                                                                                                                                                                                                                                                                                                                                                    |
| [getStackTrace](../-unsupported-deezer-playable-exception/index.md#2050903719%2FFunctions%2F-1037426161)       | [androidJvm]<br/>open fun [getStackTrace](../-unsupported-deezer-playable-exception/index.md#2050903719%2FFunctions%2F-1037426161)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[StackTraceElement](https://developer.android.com/reference/kotlin/java/lang/StackTraceElement.html)&gt;                                                                                                                                                                                                                                                |
| [getSuppressed](../-unsupported-deezer-playable-exception/index.md#672492560%2FFunctions%2F-1037426161)        | [androidJvm]<br/>fun [getSuppressed](../-unsupported-deezer-playable-exception/index.md#672492560%2FFunctions%2F-1037426161)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)&gt;                                                                                                                                                                                                                                                                    |
| [initCause](../-unsupported-deezer-playable-exception/index.md#-418225042%2FFunctions%2F-1037426161)           | [androidJvm]<br/>open fun [initCause](../-unsupported-deezer-playable-exception/index.md#-418225042%2FFunctions%2F-1037426161)(p0: [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)): [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)                                                                                                                                                                                                                                                              |
| [printStackTrace](../-unsupported-deezer-playable-exception/index.md#-1769529168%2FFunctions%2F-1037426161)    | [androidJvm]<br/>open fun [printStackTrace](../-unsupported-deezer-playable-exception/index.md#-1769529168%2FFunctions%2F-1037426161)()<br/>open fun [printStackTrace](../-unsupported-deezer-playable-exception/index.md#1841853697%2FFunctions%2F-1037426161)(p0: [PrintStream](https://developer.android.com/reference/kotlin/java/io/PrintStream.html))<br/>open fun [printStackTrace](../-unsupported-deezer-playable-exception/index.md#1175535278%2FFunctions%2F-1037426161)(p0: [PrintWriter](https://developer.android.com/reference/kotlin/java/io/PrintWriter.html)) |
| [setStackTrace](../-unsupported-deezer-playable-exception/index.md#2135801318%2FFunctions%2F-1037426161)       | [androidJvm]<br/>open fun [setStackTrace](../-unsupported-deezer-playable-exception/index.md#2135801318%2FFunctions%2F-1037426161)(p0: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[StackTraceElement](https://developer.android.com/reference/kotlin/java/lang/StackTraceElement.html)&gt;)                                                                                                                                                                                                                                              |

## Properties

| Name                                                                                              | Summary                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [cause](../-unsupported-deezer-playable-exception/index.md#-654012527%2FProperties%2F-1037426161) | [androidJvm]<br/>open val [cause](../-unsupported-deezer-playable-exception/index.md#-654012527%2FProperties%2F-1037426161): [Throwable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)? |
| [message](message.md)                                                                             | [androidJvm]<br/>open override val [message](message.md): [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)                                                                           |
| [playable](playable.md)                                                                           | [androidJvm]<br/>val [playable](playable.md): [DeezerPlayable](../../com.deezer.sdk.player.model/-deezer-playable/index.md)                                                                                          |