require("dotenv").config()
const fs = require("fs")

const { createClient } = require("contentful")

const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_STAGING_TOKEN,
    host: "preview.contentful.com",
    resolveLinks: true
})

let cache = null;

async function getData() {
    if (cache === null) {
        cache = await client.getEntries({ content_type: "alex" })
    }

    return cache
}

getData().then(res => {
    fs.writeFileSync("src/blog/data.json", JSON.stringify(res))
})