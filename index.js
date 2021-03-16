/*
    This project is open-source
    Primarly made for https://tabbybot.eu
    Discord: Hegy#6666
*/
const superagent = require('superagent');
class wrapper {
    /**
     * @param {String} token you API access token
     */
    constructor(token) {
        this._token = token;
        this._url = 'https://www.tabbyapi.tk'
    }

    /**
     * @param {String} avatar avatar url to manipulate
     * @returns {Buffer}
     */
    /*
    affect = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/affect`).send({ avatar, token: this._token })).body.message)
    }*/


    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    beautiful = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/beautiful`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    blur = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/blur`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    circle = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/circle`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} text 
     * @returns {Buffer} 
     */
    clyde = async (message) => {
        return Buffer.from((await superagent(`${this._url}/api/clyde`).send({ message, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    deepfry = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/deepfry`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    delete = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/delete`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    dither = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/dither`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    gay = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/gay`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    grayscale = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/grayscale`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    hitler = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/hitler`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    jail = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/jail`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    jokeoverhead = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/jokeoverhead`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    pixelate = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/pixelate`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} text 
     * @returns {Buffer} 
     */
    qr = async (message) => {
        return Buffer.from((await superagent(`${this._url}/api/qr`).send({ message, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    rip = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/rip`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @param {Number} angle
     * @returns {Buffer} 
     */
    rotate = async (avatar, angle) => {
        return Buffer.from((await superagent(`${this._url}/api/rotate`).send({ avatar, angle, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    sepia = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/sepia`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    shit = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/shit`).send({ avatar, token: this._token })).body.message)
    }

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    trash = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/trash`).send({ avatar, token: this._token })).body.message)
    }

    
    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    /*
    triggered = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/triggered`).send({ avatar, token: this._token })).body.message)
    }*/

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    wanted = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/wanted`).send({ avatar, token: this._token })).body.message)
    }
    

    /**
     * @param {String} avatar 
     * @returns {Buffer} 
     */
    wasted = async (avatar) => {
        return Buffer.from((await superagent(`${this._url}/api/wasted`).send({ avatar, token: this._token })).body.message)
    }


}
module.exports = wrapper;