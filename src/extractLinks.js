
const extractLinks = text => {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  
  const links = [];
  let temp = 0 

  while((temp = regex.exec(text)) !== null) {
    links.push({ [temp[1]]: temp[2] })
  }
  
  return links.length > 0 ? links : 'there is no links'
}

module.exports = extractLinks