/**
 * Enum for WebDAV HTTP response status codes.
 *
 * See {@link https://tools.ietf.org/html/rfc2518 RFC 2518} or
 * {@link https://tools.ietf.org/html/rfc5842 RFC 5842} for more information.
 *
 * @readonly
 * @enum {number} xxx – the request may be from any category.
 *
 * e.g. 102 – Processing
 */
enum WebDAVCodes {
    /**
     * @webdav @description A WebDAV request may contain many sub-requests involving file operations,
     * requiring a long time to complete the request. This code indicates that the server has received
     * and is processing the request, but no response is available yet. This prevents the client from
     * timing out and assuming the request was lost.
     *
     * {@link https://tools.ietf.org/html/rfc2518#section-10.1 Further reading...}
     */
    PROCESSING = 102,
    /**
     * @webdav @description The message body that follows is by default an XML message and can contain
     * a number of separate response codes, depending on how many sub-requests were made.
     *
     * {@link https://tools.ietf.org/html/rfc2518#section-10.2  Further reading...}
     */
    MULTI_STATUS = 207,
    /**
     * @description The members of a DAV binding have already been enumerated in a preceding part of
     * the (multistatus) response, and are not being included again.
     *
     * {@link https://tools.ietf.org/html/rfc5842#section-7.1 Further reading...}
     */
    ALREADY_REPORTED = 208,
    /**
     * @description The request was well-formed but was unable to be followed due to semantic errors.
     *
     * {@link https://tools.ietf.org/html/rfc4918#section-11.2 Further reading...}
     */
    UNPROCESSABLE_ENTITY = 422,
    /**
     * @description The resource that is being accessed is locked.
     *
     * {@link https://tools.ietf.org/html/rfc4918#section-11.3 Further reading...}
     */ LOCKED = 423,
    /**
     * @description The request failed because it depended on another request and that request failed.
     *
     * e.g. a PROPPATCH.
     *
     * {@link https://tools.ietf.org/html/rfc4918#section-11.4 Further reading...}
     */
    FAILED_DEPENDENCY = 424,

    /**
     * @description The server is unable to store the representation needed to complete the request.
     *
     * {@link https://tools.ietf.org/html/rfc4918#section-11.5 Further reading...}
     */
    INSUFFICIENT_STORAGE = 507,
    /**
     * @description The server detected an infinite loop while processing the request
     * (sent instead of 208 Already Reported).
     *
     * {@link https://tools.ietf.org/html/rfc5842#section-7.2 Further reading...}
     */
    LOOP_DETECTED = 508,
}

export default WebDAVCodes;
