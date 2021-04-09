/**
 * Enum for successful HTTP response status codes.
 *
 * See {@link https://tools.ietf.org/html/rfc3229 RFC 3229},
 * {@link https://tools.ietf.org/html/rfc7231 RFC 7231} or
 * {@link https://tools.ietf.org/html/rfc7233 RFC 7233} for more information.
 *
 * @readonly
 * @enum {number} 2xx successful – the request was successfully received, understood, and accepted.
 */
enum SuccessfulCodes {
    /**
     *  @description The HTTP 200 OK success status response code indicates that the request has succeeded.
     *  A 200 response is cacheable by default.
     *
     *  The meaning of a success depends on the HTTP request method:
     *
     *  - GET: The resource has been fetched and is transmitted in the message body.
     *  - HEAD: The entity headers are included in the response without any message body
     *  - POST: The resource describing the result of the action is transmitted in the message body
     *  - TRACE: The message body contains the request message as received by the server.
     *
     *  The successful result of a PUT or a DELETE is often not a 200 OK but a 204 No Content
     *  (or a 201 Created when the resource is uploaded for the first time).
     *
     *  {@link https://tools.ietf.org/html/rfc7231#section-6.3.1 Further reading...}
     */
    OK = 200,
    /**
     *   @description The HTTP 201 Created success status response code indicates that the request
     *   has succeeded and has led to the creation of a resource. The new resource is effectively
     *   created before this response is sent back and the new resource is returned in the body of
     *   the message, its location being either the URL of the request, or the content of the Location
     *   header.
     *
     *   The common use case of this status code is as the result of a POST request.
     *
     *  {@link https://tools.ietf.org/html/rfc7231#section-6.3.2 Further reading...}
     */
    CREATED = 201,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 202 Accepted response status code indicates
     * that the request has been accepted for processing, but the processing has not been completed;
     * in fact, processing may not have started yet. The request might or might not eventually be acted
     * upon, as it might be disallowed when processing actually takes place.
     *
     * 202 is non-committal, meaning that there is no way for the HTTP to later send an asynchronous
     * response indicating the outcome of processing the request. It is intended for cases where another
     * process or server handles the request, or for batch processing.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.3.3 Further reading...}
     */
    ACCEPTED = 202,
    /**
     * @description The HTTP 203 Non-Authoritative Information response status indicates that the request
     * was successful but the enclosed payload has been modified by a transforming proxy from that of the
     * origin server's 200 (OK) response.
     *
     * The 203 response is similar to the value 214, meaning Transformation Applied, of the Warning header
     * code, which has the additional advantage of being applicable to responses with any status code.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.3.4 Further reading...}
     */
    NON_AUTHORITATIVE_INFORMATION = 203,
    /**
     * @description The HTTP 204 No Content success status response code indicates that a request has succeeded,
     * but that the client doesn't need to navigate away from its current page.
     *
     * This might be used, for example, when implementing "save and continue editing" functionality for a
     * wiki site. In this case a PUT request would be used to save the page, and the 204 No Content response
     * would be sent to indicate that the editor should not be replaced by some other page.
     *
     * A 204 response is cacheable by default (an ETag header is included in such a response).
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.3.5 Further reading...}
     */
    NO_CONTENT = 204,
    /**
     * @description The HTTP 205 Reset Content response status tells the client to reset the document view,
     * so for example to clear the content of a form, reset a canvas state, or to refresh the UI.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.3.6 Further reading...}
     */
    RESET_CONTENT = 205,
    /**
     * @description The HTTP 206 Partial Content success status response code indicates that the request
     * has succeeded and has the body contains the requested ranges of data, as described in the Range
     * header of the request.
     *
     * If there is only one range, the Content-Type of the whole response is set to the type of the document,
     * and a Content-Range is provided.
     *
     * If several ranges are sent back, the Content-Type is set to multipart/byteranges and each fragment
     * covers one range, with Content-Range and Content-Type describing it.
     *
     * {@link https://tools.ietf.org/html/rfc7233#section-4.1 Further reading...}
     */
    PARTIAL_CONTENT = 206,

    /**
     * @description The server has fulfilled a request for the resource, and the response is a
     * representation of the result of one or more instance-manipulations applied to the current instance.
     *
     * {@link https://tools.ietf.org/html/rfc3229#section-10.4.1 Further reading...}
     */
    IM_USED = 226,
}

export default SuccessfulCodes;
