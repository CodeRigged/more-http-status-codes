/**
 * Enum for informational HTTP response status codes.
 *
 * See {@link https://tools.ietf.org/html/rfc7231 RFC 7231}
 * or {@link https://tools.ietf.org/html/rfc8297 RFC 8297} for more information.
 *
 * @readonly
 * @enum {number} 1xx informational response – the request was received, continuing process.
 */
enum InformationalCodes {
    /**
     * @description The HTTP 100 Continue informational status response code indicates that everything
     * so far is OK and that the client should continue with the request or ignore it if it is already
     * finished.
     *
     * To have a server check the request's headers, a client must send Expect: 100-continue as a
     * header in its initial request and receive a 100 Continue status code in response before sending
     * the body.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.2.1 Further reading...}
     */
    CONTINUE = 100,
    /**
     * @description The HTTP 101 Switching Protocols response code indicates the protocol the server
     * is switching to as requested by a client which sent the message including the Upgrade request
     * header.
     *
     * The server includes in this response an Upgrade response header to indicate the protocol it
     * switched to.
     * The process is described in detail in the article Protocol upgrade mechanism.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.2.2 Further reading...}
     */
    SWITCHING_PROTOCAL = 101,
    /**
     * @description The HTTP 103 Early Hints information response status code is primarily intended
     *  to be used with the Link header to allow the user agent to start preloading resources while
     *  the server is still preparing a response.
     *
     * {@link https://tools.ietf.org/html/rfc8297#section-2 Further reading...}
     */
    EARLY_HINTS = 103,
}

export default InformationalCodes;
