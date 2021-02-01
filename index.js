const lexint = require('lexicographic-integer')
const { Entry } = require('./messages')

exports.keyEncoding = {
  encode (date) {
    if (typeof date !== 'number') {
      date = date.getTime()
    }
    return Buffer.from(lexint.pack(date))
  },
  decode (buf) {
    return lexint.unpack(buf.toString('hex'), 'hex')
  }
}

exports.valueEncoding = Entry
