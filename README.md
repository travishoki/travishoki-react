## FTP Deploy
Create a file in the root called `ftpOptions.js`
```
module.exports = {
    host: 'xxx',
    user: 'xxx',
	password: 'xxx'
};
```
To deploy to production run `npm run build:prod`
