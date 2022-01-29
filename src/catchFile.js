const fs = require('fs')
const chalk = require('chalk')

const catchFile = async (filePath) => {
  const encode = 'utf-8'
  
  try {
    const content = await fs.promises.readFile(filePath, encode)

    return content
  } catch (error) {
    throw new Error(chalk.red(error.code, 'there is no file in the path'))
  }
}


module.exports = catchFile