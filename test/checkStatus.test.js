jest.mock('axios')

const checkStatus = require('../src/checkStatus')
const axios = require('axios')

const linksUrlsMock = ['http://test.com.br']



describe('checkStatus', () => {
  test('should return array of http status', async () => {
    axios.get.mockResolvedValue({ status: 200 })
    
    const statusLinks = await checkStatus(linksUrlsMock)

    expect(statusLinks).toStrictEqual([200])
  })

  test('should return a throw error',  async() => {
    axios.get.mockRejectedValue({ message: 'this is a error' })
    let errorMessage = ''

    try {
      await checkStatus(linksUrlsMock)      
    } catch (error) {
      errorMessage = error.message    
    }


    expect(errorMessage).toBe('this is a error')
  })
})