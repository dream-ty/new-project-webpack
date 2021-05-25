import _ from 'lodash'
import './test.css'
import imgC from './static/img/1.jpeg'
function component() {
    let element = document.createElement('div')
    element.innerHTML= _.join(['hello', 'webpack'], ' ~ ')
    element.classList.add('hello')
    let imgCom = new Image()
    imgCom.src = imgC
    element.appendChild(imgCom)
    return element
}
console.time('时间：')
document.body.appendChild(component())

console.timeEnd('时间：')