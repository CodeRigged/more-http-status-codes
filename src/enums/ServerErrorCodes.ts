/**
 * Enum for server error HTTP response status codes.
 *
 * See {@link https://tools.ietf.org/html/rfc7231 RFC 7231},
 * {@link https://tools.ietf.org/html/rfc2295 RFC 2295}
 * {@link https://tools.ietf.org/html/rfc2774 RFC 2774}
 * for more information.
 *
 * @readonly
 * @enum {number} 5xx server error – the server failed to fulfil an apparently valid request.
 */
enum ServerErrorCodes {
    /**
     * @description The HyperText Transfer Protocol (HTTP) 500 Internal Server Error server error response
     * code indicates that the server encountered an unexpected condition that prevented it from fulfilling
     * the request.
     *
     * This error response is a generic "catch-all" response. Usually, this indicates the server cannot find
     * a better 5xx error code to response. Sometimes, server administrators log error responses like the
     * 500 status code with more details about the request to prevent the error from happening again in the
     * future.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.6.1 Futher reading...}
     */
    INTERNAL_SERVER_ERROR = 500,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 501 Not Implemented server error response code
     * means that the server does not support the functionality required to fulfill the request.
     *
     * This status can also send a Retry-After header, telling the requester when to check back to see
     * if the functionality is supported by then.
     *
     * 501 is the appropriate response when the server does not recognize the request method and is
     * incapable of supporting it for any resource. The only methods that servers are required to support
     * (and therefore that must not return 501) are GET and HEAD.
     *
     * If the server does recognize the method, but intentionally does not support it, the appropriate
     * response is 405 Method Not Allowed.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.6.2 Further reading...}
     */
    NOT_IMPLEMENTED = 501,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 502 Bad Gateway server error response code
     * indicates that the server, while acting as a gateway or proxy, received an invalid response from
     * the upstream server.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.6.3 Further reading...}
     */
    BAD_GATEWAY = 502,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 503 Service Unavailable server error response
     * code indicates that the server is not ready to handle the request.
     *
     * Common causes are a server that is down for maintenance or that is overloaded. This response should
     * be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the
     * estimated time for the recovery of the service.
     *
     * Caching-related headers that are sent along with this response should be taken care of, as a 503
     * status is often a temporary condition and responses shouldn't usually be cached.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.6.4 Further reading...}
     */
    SERVICE_UNAVAILABLE = 503,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 504 Gateway Timeout server error response code
     * indicates that the server, while acting as a gateway or proxy, did not get a response in time from
     * the upstream server that it needed in order to complete the request.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.6.5 Further reading...}
     */
    GATEWAY_TIMEOUT = 504,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 505 HTTP Version Not Supported response status
     * code indicates that the HTTP version used in the request is not supported by the server.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.6.6 Further reading...}
     */
    HTTP_VERSION_NOT_SUPPORTED = 505,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 506 Variant Also Negotiates response status code
     * may be given in the context of Transparent Content Negotiation. This protocol enables
     * a client to retrieve the best variant of a given resource, where the server supports multiple variants.
     *
     * The Variant Also Negotiates status code indicates an internal server configuration error in which the
     * chosen variant is itself configured to engage in content negotiation, so is not a proper negotiation
     * endpoint.
     *
     * {@link https://tools.ietf.org/html/rfc2295#section-8.1 Further reading...}
     */
    VARIANT_ALSO_NEGOTIATES = 506,
    /**
     * @description The HyperText Transfer Protocol (HTTP)  510 Not Extended response status code is sent in
     * the context of the HTTP Extension Framework.
     *
     * In that specification a client may send a request that contains an extension declaration, that describes
     * the extension to be used. If the server receives such a request, but any described extensions are not
     * supported for the request, then the server responds with the 510 status code.
     *
     * {@link https://tools.ietf.org/html/rfc2774#section-7 Further reading...}
     */
    NOT_EXTENDED = 510,
    /**
     * @description The HTTP 511 Network Authentication Required response status code indicates that the client
     * needs to authenticate to gain network access.
     *
     * This status is not generated by origin servers, but by intercepting proxies that control access to the
     * network.
     *
     * Network operators sometimes require some authentication, acceptance of terms, or other user interaction
     * before granting access (for example in an internet café or at an airport). They often identify clients
     * who have not done so using their Media Access Control (MAC) addresses.
     *
     * {@link Further reading...}
     */
    NETWORK_AUTHENTICATION_REQUIRED = 511,
}

export default ServerErrorCodes;
