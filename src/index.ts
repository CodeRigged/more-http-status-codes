import InformationalCodes from './enums/InformationalCodes';
import SuccessfulCodes from './enums/SuccessfulCodes';
import RedirectionCodes from './enums/RedirectionCodes';
import ClientErrorCodes from './enums/ClientErrorCodes';
import ServerErrorCodes from './enums/ServerErrorCodes';
import WebDAVCodes from './enums/WebDAVCodes';
import { STATUS_CODES } from 'http';

/**
 * @type documented HTTP response status codes
 */
type OfficialHttpStatusCodes = typeof InformationalCodes &
    typeof SuccessfulCodes &
    typeof RedirectionCodes &
    typeof ClientErrorCodes &
    typeof ServerErrorCodes &
    typeof WebDAVCodes;

/**
 * @description Object which contains all official HTTP response status codes.
 *
 * @readonly Object is immutable
 *
 * {@link https://github.com/CodeRigged/more-http-status-codes Further reading...}
 */
const HttpStatusCodes: OfficialHttpStatusCodes = {
    ...WebDAVCodes,
    ...InformationalCodes,
    ...SuccessfulCodes,
    ...RedirectionCodes,
    ...ClientErrorCodes,
    ...ServerErrorCodes,
} as const;

/** Keys of supported HTTP response status codes by node */
const supportedByNodeStatusCodes = Object.keys(STATUS_CODES);

/** Keys of documented HTTP response status codes by this module */
const httpStatusCodes = Object.keys(HttpStatusCodes) as (keyof typeof HttpStatusCodes)[];

/**
 * @description Function which checks {@link https://nodejs.org/api/http.html#http_http_status_codes nodes}
 * collection of all the standard HTTP response status codes and compares it to the ones defined
 * in this module.
 *
 * @param supported if false, this function will return all unsupported codes by node
 * @returns array of strings
 */
const listSupportedCodesByNode = (supported = true): string[] => {
    const codes = httpStatusCodes
        .filter((key) => isNaN(HttpStatusCodes[key]))
        .reduce(
            (acc, key) => {
                if (supportedByNodeStatusCodes.includes(key)) {
                    acc.supported.push(key);
                } else {
                    acc.unsupported.push(key);
                }
                return acc;
            },
            { supported: [] as string[], unsupported: [] as string[] },
        );

    if (supported) {
        const supportedCodes = codes.supported;
        console.log(supportedCodes);

        return supportedCodes;
    } else {
        const unsupportedCodes = codes.unsupported;
        console.log(unsupportedCodes);

        return unsupportedCodes;
    }
};

// utility functions
export { listSupportedCodesByNode };

// categorized HTTP response status codes
export { InformationalCodes, WebDAVCodes, SuccessfulCodes, RedirectionCodes, ClientErrorCodes, ServerErrorCodes };

// default object contains all status codes
export default HttpStatusCodes;
