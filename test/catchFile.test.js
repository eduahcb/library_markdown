const catchFile = require('../src/catchFile')


describe('cathFile', () => {

  test('should return the content', async () => {
    const content = await catchFile('test/files/text.md')
    expect(content).toBe('# This is a test')
  })

  test('should return a error', async() => {
    let errorMessage = ''

    try {
      await catchFile('')

    } catch (error) {
      errorMessage = error.message
    }
    
    expect(errorMessage).toMatch('ENOENT there is no file in the path')

	})
})