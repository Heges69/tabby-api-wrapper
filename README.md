
## Installation

Current stable version: `1.0`

```
$ npm i tabby-api-wrapper
```

## Usage

```js
const TABBYAPI = require('tabby-api-wrapper')
const api = new TABBYAPI('Token')

var image = api.clyde('Hello world') // returns buffer
```

*Example:*
```js
const TABBYAPI = require('tabby-api-wrapper')
const api = new TABBYAPI('Token')
const client = new Discord.Client();

client.on('message', async (message) => {
    let args = message.content.toLowerCase().split(' ');
    if(args[0] == 'clyde'){
        let buffer = await api.clyde(args.slice(1).join(' '))
        let attachment = new Discord.MessageAttachment(buffer, 'clyde.png');
        message.channel.send(attachment);
    }
})
```