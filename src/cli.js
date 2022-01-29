const chalk = require('chalk')
const catchFiles = require('./catchFile')
const extractLinks = require('./extractLinks')
const validatedLinks = require('./validatedLinks')

const path = process.argv.filter( arg => arg !== '--validated')[2]
const validLinks =process.argv.includes('--validated')

const processFile = async (filePath) => {
  const content = await catchFiles(filePath)
  const links = await extractLinks(content)

  if(validLinks) {
    thereIsLinks = Array.isArray(links)

    console.log(chalk.yellow('list of validated links'), thereIsLinks ? await validatedLinks(links) : links)
  }
  else {
    console.log(chalk.yellow('list of links'), links)
  }
}

processFile(path)