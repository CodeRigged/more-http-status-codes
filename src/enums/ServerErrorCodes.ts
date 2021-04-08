/**
 * Enum for server error HTTP response status codes.
 *
 * See {} for more information.
 *
 * @readonly
 * @enum {number} 5xx server error – the server failed to fulfil an apparently valid request.
 */
enum ServerErrorCodes {
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    VARIANT_ALSO_NEGOTIATES = 506,
    NOT_EXTENDED = 510,
    NETWORK_AUTHENTICATION_REQUIRED = 511,
}

export default ServerErrorCodes;
