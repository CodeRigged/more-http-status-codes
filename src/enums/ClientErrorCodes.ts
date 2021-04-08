/**
 * Enum for client error HTTP response status codes.
 *
 * See {@link https://tools.ietf.org/html/rfc7231 rfc 7231},
 * {@link https://tools.ietf.org/html/rfc7232 rfc 7232},
 * {@link https://tools.ietf.org/html/rfc7233 rfc 7233},
 * {@link https://tools.ietf.org/html/rfc7235 rfc 7235},
 * {@link https://tools.ietf.org/html/rfc7540 rfc 7540},
 * {@link https://tools.ietf.org/html/rfc6585 rfc 6585},
 * {@link https://tools.ietf.org/html/rfc7725 rfc 7725} or
 * {@link https://tools.ietf.org/html/rfc8470 rfc 8470} for more information.
 *
 * @readonly
 * @enum {number} 4xx client error – the request contains bad syntax or cannot be fulfilled.
 */
enum ClientErrorCodes {
    /**
     * @description The HyperText Transfer Protocol (HTTP) 400 Bad Request response status code indicates
     * that the server cannot or will not process the request due to something that is perceived to be a
     * client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
     * routing).
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.1 Further reading...}
     */
    BAD_REQUEST = 400,
    /**
     * @description The HTTP 401 Unauthorized client error status response code indicates that the request
     * has not been applied because it lacks valid authentication credentials for the target resource.
     *
     * This status is sent with a WWW-Authenticate header that contains information on how to authorize
     * correctly.
     *
     * This status is similar to 403, but in this case, authentication is possible.
     *
     * {@link https://tools.ietf.org/html/rfc7235#section-3.1 Further reading...}
     */
    UNAUTHORIZED = 401,
    /**
     * @experimental Check the Browser compatibility table carefully before using this in production.
     *
     * @description The HTTP 402 Payment Required is a nonstandard client error status response code that
     * is reserved for future use.
     *
     * Sometimes, this code indicates that the request can not be processed until the client makes a
     * payment. Originally it was created to enable digital cash or (micro) payment systems and would
     * indicate that the requested content is not available until the client makes a payment. However,
     * no standard use convention exists and different entities use it in different contexts.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.2 Further reading...}
     */
    PAYMENT_REQUIRED = 402,
    /**
     * @description The HTTP 403 Forbidden client error status response code indicates that the server
     * understood the request but refuses to authorize it.
     *
     * This status is similar to 401, but in this case, re-authenticating will make no difference.
     * The access is permanently forbidden and tied to the application logic, such as insufficient rights
     * to a resource.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.3 Further reading...}
     */
    FORBIDDEN = 403,
    /**
     * @description The HTTP 404 Not Found client error response code indicates that the server can't find
     * the requested resource. Links that lead to a 404 page are often called broken or dead links and can
     * be subject to link rot.
     *
     * A 404 status code does not indicate whether the resource is temporarily or permanently missing.
     * But if a resource is permanently removed, a 410 (Gone) should be used instead of a 404 status.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.4 Further reading...}
     */
    NOT_FOUND = 404,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 405 Method Not Allowed response status code
     * indicates that the request method is known by the server but is not supported by the target resource.
     *
     * The server MUST generate an Allow header field in a 405 response containing a list of the target
     * resource's currently supported methods.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.5 Further reading...}
     */
    METHOD_NOT_ALLOWED = 405,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 406 Not Acceptable client error response code
     * indicates that the server cannot produce a response matching the list of acceptable values defined
     * in the request's proactive content negotiation headers, and that the server is unwilling to supply a
     * default representation.
     *
     * Proactive content negotiation headers include:
     *
     * - Accept
     * - Accept-Charset
     * - Accept-Encoding
     * - Accept-Language
     *
     * In practice, this error is very rarely used. Instead of responding using this error code,
     * which would be cryptic for the end user and difficult to fix, servers ignore the relevant header
     * and serve an actual page to the user. It is assumed that even if the user won't be completely happy,
     * they will prefer this to an error code.
     *
     * If a server returns such an error status, the body of the message should contain the list of the
     * available representations of the resources, allowing the user to choose among them.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.6 Further reading...}
     */
    NOT_ACCEPTABLE = 406,
    /**
     * @description The HTTP 407 Proxy Authentication Required client error status response code indicates
     * that the request has not been applied because it lacks valid authentication credentials for a proxy
     * server that is between the browser and the server that can access the requested resource.
     *
     * This status is sent with a Proxy-Authenticate header that contains information on how to authorize
     * correctly.
     *
     * {@link https://tools.ietf.org/html/rfc7235#section-3.2 Further reading...}
     */
    PROXY_AUTHENTICATION_REQUIRED = 407,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 408 Request Timeout response status code means
     * that the server would like to shut down this unused connection. It is sent on an idle connection by
     * some servers, even without any previous request by the client.
     *
     * A server should send the "close" Connection header field in the response, since 408 implies that the
     * server has decided to close the connection rather than continue waiting.
     *
     * This response is used much more since some browsers, like Chrome, Firefox 27+, and IE9, use HTTP
     * pre-connection mechanisms to speed up surfing.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.7 Further reading...}
     */
    REQUEST_TIMEOUT = 408,
    /**
     * @description The HTTP 409 Conflict response status code indicates a request conflict with current state
     * of the target resource.
     *
     * Conflicts are most likely to occur in response to a PUT request. For example, you may get a 409 response
     * when uploading a file which is older than the one already on the server resulting in a version control
     * conflict.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.8 Further reading...}
     */
    CONFLICT = 409,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 410 Gone client error response code indicates that
     * access to the target resource is no longer available at the origin server and that this condition
     * is likely to be permanent.
     *
     * If you don't know whether this condition is temporary or permanent, a 404 status code should be used
     * instead.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.9 Further reading...}
     */
    GONE = 410,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 411 Length Required client error response code
     * indicates that the server refuses to accept the request without a defined Content-Length header.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.10 Further reading...}
     */
    LENGTH_REQUIRED = 411,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 412 Precondition Failed client error response code
     * indicates that access to the target resource has been denied. This happens with conditional requests on
     * methods other than GET or HEAD when the condition defined by the If-Unmodified-Since or If-None-Match
     * headers is not fulfilled. In that case, the request, usually an upload or a modification of a resource,
     * cannot be made and this error response is sent back.
     *
     * {@link https://tools.ietf.org/html/rfc7232#section-4.2 Further reading...}
     */
    PRECONDITION_FAILED = 412,
    /**
     * @description The HTTP 413 Payload Too Large response status code indicates that the request entity is
     * larger than limits defined by server; the server might close the connection or return a Retry-After
     * header field.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.11 Further reading...}
     */
    PAYLOAD_TOO_LARGE = 413,
    /**
     * @description The HTTP 414 URI Too Long response status code indicates that the URI requested by
     * the client is longer than the server is willing to interpret.
     * There are a few rare conditions when this might occur:
     * - when a client has improperly converted a POST request to a GET request with long query information,
     * - when the client has descended into a loop of redirection (for example, a redirected URI prefix that
     * points to a suffix of itself),
     * - or when the server is under attack by a client attempting to exploit potential security holes.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.12 Further reading...}
     */
    URI_TOO_LONG = 414,
    /**
     * @description The HTTP 415 Unsupported Media Type client error response code indicates that the server
     * refuses to accept the request because the payload format is in an unsupported format.
     *
     * The format problem might be due to the request's indicated Content-Type or Content-Encoding, or as a
     * result of inspecting the data directly.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.13 Further reading...}
     */
    UNSUPPORTED_MEDIA_TYPE = 415,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 416 Range Not Satisfiable error response code
     * indicates that a server cannot serve the requested ranges. The most likely reason is that the document
     * doesn't contain such ranges, or that the Range header value, though syntactically correct, doesn't make
     * sense.
     *
     * The 416 response message contains a Content-Range indicating an unsatisfied range (that is a '*')
     * followed by a '/' and the current length of the resource. E.g. Content-Range: bytes 12777
     *
     * Faced with this error, browsers usually either abort the operation (for example, a download will be
     * considered as non-resumable) or ask for the whole document again.
     *
     * {@link https://tools.ietf.org/html/rfc7233#section-4.4 Further reading...}
     */
    RANGE_NOT_SATISFIABLE = 416,
    /**
     * @description The HTTP 417 Expectation Failed client error response code indicates that the expectation
     * given in the request's Expect header could not be met.
     *
     * See the Expect header for more details.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.14 Further reading...}
     */
    EXPECTATION_FAILED = 417,
    /**
     * #TeaTime
     *
     * @description The HTTP 418 I'm a teapot client error response code indicates that the server refuses
     * to brew coffee because it is, permanently, a teapot. A combined coffee/tea pot that is temporarily out
     * of coffee should instead return 503. This error is a reference to Hyper Text Coffee Pot Control Protocol
     * defined in April Fools' jokes in 1998 and 2014.
     *
     * Some websites use this response for requests they do not wish to handle, such as automated queries.
     *
     * See {@link https://tools.ietf.org/html/rfc2324#section-2.3.2 rfc 2324} or
     * {@link https://tools.ietf.org/html/rfc7168#section-2.3.3 rfc 7168} for futher reading...
     */
    IM_A_TEAPOT = 418,
    /**
     * @description The request was directed at a server that is not able to produce a response
     *
     * e.g. connection reuse.
     *
     * {@link https://tools.ietf.org/html/rfc7540#section-9.1.2 Further reading...}
     */
    MISDIRECTED_REQUEST = 421,
    /**
     * @experimental Check the Browser compatibility table carefully before using this in production.
     *
     * @description The HyperText Transfer Protocol (HTTP) 425 Too Early response status code indicates that
     * the server is unwilling to risk processing a request that might be replayed, which creates the potential
     * for a replay attack.
     *
     * {@link https://tools.ietf.org/html/rfc8470#section-5.2 Further reading...}
     */
    TOO_EARLY = 425,
    /**
     * @description The HTTP 426 Upgrade Required client error response code indicates that the server refuses
     * to perform the request using the current protocol but might be willing to do so after the client upgrades
     * to a different protocol.
     *
     * The server sends an Upgrade header with this response to indicate the required protocol(s).
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.5.15 Further reading...}
     */
    UPGRADE_REQUIRED = 426,
    /**
     * @description The HTTP 428 Precondition Required response status code indicates that the server requires
     * the request to be conditional.
     *
     * Typically, this means that a required precondition header, such as If-Match, is missing.
     *
     * When a precondition header is not matching the server side state, the response should be 412
     * Precondition Failed.
     *
     * {@link https://tools.ietf.org/html/rfc6585#section-3 Further reading...}
     */
    PRECONDITION_REQUIRED = 428,
    /**
     * @description The HTTP 429 Too Many Requests response status code indicates the user has sent too many
     * requests in a given amount of time ("rate limiting").
     *
     * A Retry-After header might be included to this response indicating how long to wait before making a new
     * request.
     *
     * {@link https://tools.ietf.org/html/rfc6585#section-4 Further reading...}
     */
    TOO_MANY_REQUESTS = 429,
    /**
     * @description The HTTP 431 Request Header Fields Too Large response status code indicates that
     * the server refuses to process the request because the request’s HTTP headers are too long.
     * The request may be resubmitted after reducing the size of the request headers.
     *
     * 431 can be used when the total size of request headers is too large, or when a single header
     * field is too large. To help those running into this error, indicate which of the two is the
     * problem in the response body — ideally, also include which headers are too large. This lets users
     * attempt to fix the problem, such as by clearing their cookies.
     *
     * Servers will often produce this status if:
     * - The Referer URL is too long
     * - There are too many Cookies sent in the request
     *
     * {@link https://tools.ietf.org/html/rfc6585#section-5 Further reading...}
     */
    REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 451 Unavailable For Legal Reasons client error
     * response code indicates that the user requested a resource that is not available due to legal reasons,
     * such as a web page for which a legal action has been issued.
     *
     * {@link https://tools.ietf.org/html/rfc7725#section-3 Further reading...}
     */
    UNAVAILABLE_FOR_LEGAL_REASONS = 451,
}

export default ClientErrorCodes;
