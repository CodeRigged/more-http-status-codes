/**
 * Enum for redirection HTTP response status codes.
 *
 * See {@link https://tools.ietf.org/html/rfc7231 rfc 7231},
 * {@link https://tools.ietf.org/html/rfc7232 rfc 7232},
 * {@link https://tools.ietf.org/html/rfc7538 rfc 7538} or for more information.
 *
 * @readonly
 * @enum {number} 3xx redirection – further action needs to be taken in order to complete the request.
 */
enum RedirectionCodes {
    /**
     * @description The HTTP 300 Multiple Choices redirect status response code indicates that the request
     * has more than one possible responses. The user-agent or the user should choose one of them.
     * As there is no standardized way of choosing one of the responses, this response code is very rarely
     * used.
     *
     * If the server has a preferred choice, it should generate a Location header.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.4.1 Further reading...}
     */
    MULTIPLE_CHOICE = 300,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 301 Moved Permanently redirect status response
     * code indicates that the resource requested has been definitively moved to the URL given by
     * the Location headers. A browser redirects to this page and search engines update their links to the
     * resource (in 'SEO-speak', it is said that the 'link-juice' is sent to the new URL).
     *
     * Even if the specification requires the method (and the body) not to be altered when the redirection is
     * performed, not all user-agents align with it - you can still find this type of bugged software out
     * there. It is therefore recommended to use the 301 code only as a response for GET or HEAD methods and
     * to use the 308 Permanent Redirect for POST methods instead, as the method change is explicitly
     * prohibited with this status.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.4.2 Further reading...}
     */
    MOVED_PERMANENTLY = 301,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 302 Found redirect status response code
     * indicates that the resource requested has been temporarily moved to the URL given by the Location
     * header. A browser redirects to this page but search engines don't update their links to the resource
     * (in 'SEO-speak', it is said that the 'link-juice' is not sent to the new URL).
     *
     * Even if the specification requires the method (and the body) not to be altered when the redirection is
     * performed, not all user-agents conform here - you can still find this type of bugged software out there.
     * It is therefore recommended to set the 302 code only as a response for GET or HEAD methods and to use
     * 307 Temporary Redirect instead, as the method change is explicitly prohibited in that case.
     *
     * In the cases where you want the method used to be changed to GET, use 303 See Other instead.
     * This is useful when you want to give a response to a PUT method that is not the uploaded resource
     * but a confirmation message such as: 'you successfully uploaded XYZ'.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.4.3 Further reading...}
     */
    FOUND = 302,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 303 See Other redirect status response code
     * indicates that the redirects don't link to the newly uploaded resources, but to another page
     * (such as a confirmation page or an upload progress page). This response code is usually sent back
     * as a result of PUT or POST. The method used to display this redirected page is always GET.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.4.4 Further reading...}
     */
    SEE_OTHER = 303,
    /**
     * @description The HTTP 304 Not Modified client redirection response code indicates that there is no
     * need to retransmit the requested resources. It is an implicit redirection to a cached resource.
     * This happens when the request method is safe, like a GET or a HEAD request, or when the request
     * is conditional and uses a If-None-Match or a If-Modified-Since header.
     *
     * The equivalent 200 OK response would have included the headers Cache-Control, Content-Location,
     * Date, ETag, Expires, and Vary.
     *
     * {@link https://tools.ietf.org/html/rfc7232#section-4.1 Further reading...}
     */
    NOT_MODIFIED = 304,
    /**
     * @deprecated Not recommended to use.
     *
     * @description The requested resource is available only through a proxy, the address for
     * which is provided in the response. For security reasons, many HTTP clients
     * (such as Mozilla Firefox and Internet Explorer) do not obey this status code.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.4.5 Further reading...}
     */
    USE_PROXY = 305,
    /**
     * @description The requested resource is available only through a proxy, the address for
     * which is provided in the response. For security reasons, many HTTP clients
     * (such as Mozilla Firefox and Internet Explorer) do not obey this status code.
     *
     * {@link https://tools.ietf.org/html/rfc7231#section-6.4.7 Further reading...}
     */
    TEMPORARY_REDIRECT = 307,
    /**
     * @description
     *
     * {@link Further reading...}
     */
    PERMANENT_REDIRECT = 308,
    /**
     * @description The HyperText Transfer Protocol (HTTP) 308 Permanent Redirect redirect
     * status response code indicates that the resource requested has been definitively moved
     * to the URL given by the Location headers. A browser redirects to this page and search
     * engines update their links to the resource (in 'SEO-speak', it is said that the
     * 'link-juice' is sent to the new URL).
     *
     * The request method and the body will not be altered, whereas 301 may incorrectly sometimes
     * be changed to a GET method.
     *
     * {@link https://tools.ietf.org/html/rfc7538#section-3 Further reading...}
     */
}

export default RedirectionCodes;
