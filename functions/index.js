const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')

const app = express()

const config = {
  dev: false,
  debug: true
}

const nuxt = new Nuxt(config)

let isReady = false
const readyPromise = nuxt
  .ready()
  .then(function () {
    isReady = true
  })
  .catch(function() {
    process.exit(1)
  })

async function handleRequest(req, res) {
  if (!isReady) {
    await readyPromise
  }
  res.set('Cache-Control', 'public, max-age=1, s-maxage=1')
  try {
    await nuxt.render(req, res)
  } catch (e) {
    console.error(e)
    res.send(e)
  }
}

app.get('*', handleRequest)
app.use(handleRequest)

exports.ssrapp = functions.https.onRequest(app)