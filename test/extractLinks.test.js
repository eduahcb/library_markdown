const extractLinks = require('../src/extractLinks')

const textMock = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList)"

describe('extractLinks', () => {

  test('should return a array of links', () => {
    const text = extractLinks(textMock)

    expect(text).toStrictEqual([{
      FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }])
  })

  test('should return a message', () => {
    const text = extractLinks('')

    expect(text).toBe('there is no links')
  })
})