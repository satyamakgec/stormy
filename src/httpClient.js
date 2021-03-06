const axios = require('axios');
var CONSTANTS = require('./const')

function registerCLI(uuid, publicKey){
    var URL = CONSTANTS.SERVER_URL + '/' + 'key/' + uuid
    // console.log('The public key is', publicKey)
    // console.log('Making a request to the URL', URL)
    return axios({
        method: 'post',
        url: URL,
        data: {
          publicKey: publicKey
        }
    })
    // return axios.get(URL)
}

function wakeUpTheServer(){
    var URL = CONSTANTS.SERVER_URL + '/wakeup'
    return axios({
        method: 'Get',
        url: URL
    })
}

function executingCommand(uuid, command, status){
    var URL = CONSTANTS.SERVER_URL  + '/' + 'command'
    return axios({
        method: 'post',
        url: URL,
        data: {
            uuid: uuid,
            command: command,
            status: status
        }
    })
}

module.exports = {
    registerCLI,
    executingCommand
}
