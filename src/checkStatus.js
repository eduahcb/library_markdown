const axios = require('axios')


const checkStatus = async (arrayUrls) => {

  try {
    const statusArray = await Promise
      .all(
        arrayUrls
        .map( async url => {
          const result = await axios.get(url)

          return result.status
        })
      )
    
    return statusArray
  } catch (error) {
    throw new Error(error.message)
  }
}


module.exports = checkStatus