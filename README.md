# more-http-status-codes

Yet an other library which implements its own version of HTTP response status codes.

The difference lies in its implementation:

-   fully documented (JSDocs and typescript)
-   supports import of categorized range of codes
-   and links to the RFC specifications

Of course there are no dependencies.

## Installing and Usage

Using npm:

```bash
$ npm install more-http-status-codes
```

Using yarn:

```bash
$ yarn add more-http-status-codes
```

```js
import HTTPStatusCodes, { SuccessfulCodes, ClientErrorCodes } from 'more-http-status-codes';

...
res.sendStatus(HTTPStatusCodes.OK);
// or
const data = {...}
res.status(SuccessfulCodes.CREATED).json(data)
// or
try{
    ...
} catch(e){
    res.sendStatus(ClientErrorCodes.BAD_REQUEST);
}

```

## API

##### listSupportedCodesByNode = (supported = true): string[]

```js
import { listSupportedCodesByNode } from 'more-http-status-codes';

// will list and return unsupported codes
listSupportedCodesByNode(false);
```

## Sources

-   https://tools.ietf.org/rfc/index
-   https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
-   https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
