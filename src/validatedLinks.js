const checkStatus = require('./checkStatus')

const getArrayOfUrl = (arrayLinks) => {
  return arrayLinks.map( (link) => Object.values(link).join())
}

const validatedLinks = async (arrayLinks) => {
  const links = getArrayOfUrl(arrayLinks)

  const statusLinks = await checkStatus(links)

  return arrayLinks.map((object, index) => ({
    ...object,
    status: statusLinks[index]
  }))
}

module.exports = validatedLinks 
