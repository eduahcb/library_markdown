jest.mock('../src/checkStatus')

const validatedLinks = require('../src/validatedLinks')
const checkStatus = require('../src/checkStatus')


const linksMock = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('validatedLinks', () => {

  test('should return a array of validated links', async () => {    
    checkStatus.mockImplementation(() => [200])
    
    const links = await validatedLinks(linksMock)


    expect(links).toStrictEqual([{
       FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
       status: 200
    }])
  })

  test('should return a error', async () => {
    checkStatus.mockImplementation( () => {
      throw new Error('this is a error')
    })
    let errorMessage = ''

    try {
      await validatedLinks(linksMock)

    } catch (error) {
      errorMessage = error.message
    }

    expect(errorMessage).toBe('this is a error')

  })
})