// const app = require('./app')

// app.listen(process.env.APP_PORT || 8080, () => {
//   console.log(`API service is running on port "${process.env.APP_PORT || 8080}"!`);
// })

const fs = require('node:fs');
fs.readFile('./file.xml', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const { XMLParser } = require("fast-xml-parser");

    const parser = new XMLParser();
    let jObj = parser.parse(data);
    const retorno = jObj.rss.channel.item.map(item => {
      const itemId = item.guid.match(/\/([0-9]{5,6})-/)
      return {
        "title": item.title.replace(/(?:'|")/g, '`').replace(/(?:\r\n|\r|\n)/g, ' '),
        "url": item.guid,
        "id": (itemId && itemId.length> 0) ? itemId[1] : Math.floor(Math.random() * 999999),
        "description": item.description.replace(/(?:'|")/g, '`').replace(/(?:\r\n|\r|\n)/g, ' '),
        "publishedAt": item.pubDate,
        "image": {
          "title": item.media_title,
          "url": item.media_url
        }
      }
    })

    console.log(JSON.stringify(retorno))
});
