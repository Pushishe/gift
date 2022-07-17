import React, { Component } from 'react'
import classes from './Encryption.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import './style.css'

export default class Encryption extends Component {

  componentDidMount() {
    const table = document.querySelector('table')
    const tv = document.querySelectorAll('td')
    const th = document.querySelectorAll('th')
    const list = [
      'one', 'two',
      'three', 'four',
      'five', 'six',
      'seven', 'eight',
      'nine', 'ten',
      'eleven', 'twelve',
      'thirteen'
    ]

    let selected = []
    let tvCloud = []
    let tvCloudContain = []
    let thCloud = []
    let thCloudContain = []


    table.addEventListener('click', (event) => {
      for (let num of list) {
        if (event.target.classList.contains(num)) {
          for (let k = 0; k < tv.length; k++) {
            if (tv[k].classList.contains(num)) {
              if (tv[k].classList.contains('activeE')) {
                tv[k].classList.remove('activeE')
                tvCloudContain.splice(0, tvCloudContain.length)
                tvCloud.splice(0, tvCloud.length)
                thCloudContain.splice(0, thCloudContain.length)
                thCloud.splice(0, thCloud.length)
                selected.splice(0, selected.length)
              } else {
                tv[k].classList.add('activeE')
              }
            }
          }
          for (let i = 0; i < th.length; i++) {
            if (th[i].classList.contains(num)) {
              if (th[i].classList.contains('activeE')) {
                th[i].classList.remove('activeE')
                tvCloudContain.splice(0, tvCloudContain.length)
                tvCloud.splice(0, tvCloud.length)
                thCloudContain.splice(0, thCloudContain.length)
                thCloud.splice(0, thCloud.length)
                selected.splice(0, selected.length)
              } else {
                th[i].classList.add('activeE')
              }
            } 
          }
        }
        Array.from(table.childNodes[1].children).forEach(row => {
          Array.from(row.children).forEach(cell => {
            if (cell.classList.contains('activeE') && cell.classList.contains(num)) {
              selected.push(cell.classList[0])
            }
          })
        })
        selected.filter((number, index) => {
          if (selected.indexOf(number) !== index) {
            selected.splice(index, selected.length)
          }
        })
        if (selected.length == 2) {
          if (selected[0] != selected[1]) {
            for (let num of selected) {
              th.forEach(row => {
                if (row.classList.contains(num)) {
                  thCloud.push(row)
                  thCloudContain.push(row.innerText)
                }
              })
              tv.forEach(cell => {
                if (cell.classList.contains(num)) {
                  tvCloud.push(cell)
                  tvCloudContain.push(cell.innerText)
                }
              })
            }
            thCloud[0].innerText = thCloudContain[1]
            thCloud[0].classList.remove('activeE')
            thCloud[1].innerText = thCloudContain[0]
            thCloud[1].classList.remove('activeE')
            for (let n = 0; n < tvCloudContain.length; n++) {
              tvCloud[n].innerText = tvCloudContain[n+21]
              tvCloud[n].classList.remove('activeE')
            }
            for (let x = 21; x < tvCloudContain.length; x++) {
              tvCloud[x].innerText = tvCloudContain[x-21]
              tvCloud[x].classList.remove('activeE')
            }
            tvCloudContain.splice(0, tvCloudContain.length)
            tvCloud.splice(0, tvCloud.length)
            thCloudContain.splice(0, thCloudContain.length)
            thCloud.splice(0, thCloud.length)
            selected.splice(0, selected.length)
          }
        }
      }
    })
  }

  render() {
    return (
      <div className={classes.Encryption}>
        <div className={classes.EncryptionWrapper}>
          <div>
            <h1 
            style={{
              color: 'black',
              fontWeight: 'lighter'
            }}>
              Расшифруй
            </h1>
          </div>
          <div className={"table"}>
            <table>
              <thead>
                <tr>
                  <th className={"one"}>1</th>
                  <th className={"two"}>2</th>
                  <th className={"three"}>3</th>
                  <th className={"four"}>4</th>
                  <th className={"five"}>5</th>
                  <th className={"six"}>6</th>
                  <th className={"seven"}>7</th>
                  <th className={"eight"}>8</th>
                  <th className={"nine"}>9</th>
                  <th className={"ten"}>10</th>
                  <th className={"eleven"}>11</th>
                  <th className={"twelve"}>12</th>
                  <th className={"thirteen"}>13</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={"one"}>Д</td>
                  <td className={"two"}>Ь</td>
                  <td className={"three"}>Л</td>
                  <td className={"four"}>Е</td>
                  <td className={"five"}>З</td>
                  <td className={"six"}>Т</td>
                  <td className={"seven"}>Е</td>
                  <td className={"eight"}>Е</td>
                  <td className={"nine"}>С</td>
                  <td className={"ten"}>Ж</td>
                  <td className={"eleven"}>У</td>
                  <td className={"twelve"}>Д</td>
                  <td className={"thirteen"}>Б</td>
                </tr>
                <tr>
                  <td className={"one"}>П</td>
                  <td className={"two"}>В</td>
                  <td className={"three"}>Л</td>
                  <td className={"four"}>О</td>
                  <td className={"five"}>А</td>
                  <td className={"six"}>С</td>
                  <td className={"seven"}>Ь</td>
                  <td className={"eight"}>Е</td>
                  <td className={"nine"}>Т</td>
                  <td className={"ten"}>Д</td>
                  <td className={"eleven"}>Я</td>
                  <td className={"twelve"}>Т</td>
                  <td className={"thirteen"}>О</td>
                </tr>
                <tr>
                  <td className={"one"}>А</td>
                  <td className={"two"}>И</td>
                  <td className={"three"}>В</td>
                  <td className={"four"}>Д</td>
                  <td className={"five"}>Н</td>
                  <td className={"six"}>Е</td>
                  <td className={"seven"}>Я</td>
                  <td className={"eight"}>Я</td>
                  <td className={"nine"}>Ц</td>
                  <td className={"ten"}>Т</td>
                  <td className={"eleven"}>Р</td>
                  <td className={"twelve"}>Я</td>
                  <td className={"thirteen"}>Ф</td>
                </tr>
                <tr>
                  <td className={"one"}>Л</td>
                  <td className={"two"}>Л</td>
                  <td className={"three"}>Н</td>
                  <td className={"four"}>О</td>
                  <td className={"five"}>Ь</td>
                  <td className={"six"}>Ж</td>
                  <td className={"seven"}>О</td>
                  <td className={"eight"}>О</td>
                  <td className={"nine"}>Д</td>
                  <td className={"ten"}>С</td>
                  <td className={"eleven"}>С</td>
                  <td className={"twelve"}>Н</td>
                  <td className={"thirteen"}>Я</td>
                </tr>
                <tr>
                  <td className={"one"}>В</td>
                  <td className={"two"}>О</td>
                  <td className={"three"}>С</td>
                  <td className={"four"}>Л</td>
                  <td className={"five"}>Т</td>
                  <td className={"six"}>Ю</td>
                  <td className={"seven"}>Я</td>
                  <td className={"eight"}>Ю</td>
                  <td className={"nine"}>Д</td>
                  <td className={"ten"}>Д</td>
                  <td className={"eleven"}>А</td>
                  <td className={"twelve"}>И</td>
                  <td className={"thirteen"}>Б</td>
                </tr>
                <tr>
                  <td className={"one"}>Н</td>
                  <td className={"two"}>Н</td>
                  <td className={"three"}>О</td>
                  <td className={"four"}>О</td>
                  <td className={"five"}>А</td>
                  <td className={"six"}>Г</td>
                  <td className={"seven"}>Щ</td>
                  <td className={"eight"}>С</td>
                  <td className={"nine"}>Ё</td>
                  <td className={"ten"}>Л</td>
                  <td className={"eleven"}>М</td>
                  <td className={"twelve"}>Е</td>
                  <td className={"thirteen"}>Е</td>
                </tr>
                <tr>
                  <td className={"one"}>Г</td>
                  <td className={"two"}>К</td>
                  <td className={"three"}>О</td>
                  <td className={"four"}>И</td>
                  <td className={"five"}>О</td>
                  <td className={"six"}>П</td>
                  <td className={"seven"}>И</td>
                  <td className={"eight"}>Й</td>
                  <td className={"nine"}>З</td>
                  <td className={"ten"}>М</td>
                  <td className={"eleven"}>И</td>
                  <td className={"twelve"}>В</td>
                  <td className={"thirteen"}>Н</td>
                </tr>
                <tr>
                  <td className={"one"}>С</td>
                  <td className={"two"}>Н</td>
                  <td className={"three"}>С</td>
                  <td className={"four"}>Л</td>
                  <td className={"five"}>А</td>
                  <td className={"six"}>И</td>
                  <td className={"seven"}>М</td>
                  <td className={"eight"}>М</td>
                  <td className={"nine"}>Е</td>
                  <td className={"ten"}>О</td>
                  <td className={"eleven"}>Е</td>
                  <td className={"twelve"}>Й</td>
                  <td className={"thirteen"}>Я</td>
                </tr>
                <tr>
                  <td className={"one"}>О</td>
                  <td className={"two"}>С</td>
                  <td className={"three"}>О</td>
                  <td className={"four"}>М</td>
                  <td className={"five"}>Ж</td>
                  <td className={"six"}>Н</td>
                  <td className={"seven"}>Ш</td>
                  <td className={"eight"}>С</td>
                  <td className={"nine"}>Ь</td>
                  <td className={"ten"}>Т</td>
                  <td className={"eleven"}>Р</td>
                  <td className={"twelve"}>Е</td>
                  <td className={"thirteen"}>К</td>
                </tr>
                <tr>
                  <td className={"one"}>М</td>
                  <td className={"two"}>С</td>
                  <td className={"three"}>Х</td>
                  <td className={"four"}>О</td>
                  <td className={"five"}>Ь</td>
                  <td className={"six"}>И</td>
                  <td className={"seven"}>Ч</td>
                  <td className={"eight"}>Д</td>
                  <td className={"nine"}>И</td>
                  <td className={"ten"}>О</td>
                  <td className={"eleven"}>У</td>
                  <td className={"twelve"}>К</td>
                  <td className={"thirteen"}>Л</td>
                </tr>
                <tr>
                  <td className={"one"}>Л</td>
                  <td className={"two"}>Е</td>
                  <td className={"three"}>Н</td>
                  <td className={"four"}>Е</td>
                  <td className={"five"}>Б</td>
                  <td className={"six"}>Й</td>
                  <td className={"seven"}>О</td>
                  <td className={"eight"}>Е</td>
                  <td className={"nine"}>Д</td>
                  <td className={"ten"}>П</td>
                  <td className={"eleven"}>Е</td>
                  <td className={"twelve"}>Р</td>
                  <td className={"thirteen"}>Т</td>
                </tr>
                <tr>
                  <td className={"one"}>Ж</td>
                  <td className={"two"}>Д</td>
                  <td className={"three"}>А</td>
                  <td className={"four"}>И</td>
                  <td className={"five"}>Р</td>
                  <td className={"six"}>Т</td>
                  <td className={"seven"}>Н</td>
                  <td className={"eight"}>В</td>
                  <td className={"nine"}>А</td>
                  <td className={"ten"}>Т</td>
                  <td className={"eleven"}>Е</td>
                  <td className={"twelve"}>И</td>
                  <td className={"thirteen"}>Л</td>
                </tr>
                <tr>
                  <td className={"one"}>А</td>
                  <td className={"two"}>М</td>
                  <td className={"three"}>О</td>
                  <td className={"four"}>И</td>
                  <td className={"five"}>Е</td>
                  <td className={"six"}>Д</td>
                  <td className={"seven"}>Р</td>
                  <td className={"eight"}>Б</td>
                  <td className={"nine"}>Е</td>
                  <td className={"ten"}>Р</td>
                  <td className={"eleven"}>Н</td>
                  <td className={"twelve"}>В</td>
                  <td className={"thirteen"}>Е</td>
                </tr>
                <tr>
                  <td className={"one"}>К</td>
                  <td className={"two"}>Е</td>
                  <td className={"three"}>С</td>
                  <td className={"four"}>Ч</td>
                  <td className={"five"}>О</td>
                  <td className={"six"}>И</td>
                  <td className={"seven"}>Е</td>
                  <td className={"eight"}>Л</td>
                  <td className={"nine"}>Т</td>
                  <td className={"ten"}>У</td>
                  <td className={"eleven"}>Ь</td>
                  <td className={"twelve"}>Д</td>
                  <td className={"thirteen"}>Л</td>
                </tr>
                <tr>
                  <td className={"one"}>Р</td>
                  <td className={"two"}>Д</td>
                  <td className={"three"}>Е</td>
                  <td className={"four"}>О</td>
                  <td className={"five"}>М</td>
                  <td className={"six"}>Д</td>
                  <td className={"seven"}>И</td>
                  <td className={"eight"}>Т</td>
                  <td className={"nine"}>Х</td>
                  <td className={"ten"}>Е</td>
                  <td className={"eleven"}>Б</td>
                  <td className={"twelve"}>О</td>
                  <td className={"thirteen"}>О</td>
                </tr>
                <tr>
                  <td className={"one"}>И</td>
                  <td className={"two"}>Е</td>
                  <td className={"three"}>Д</td>
                  <td className={"four"}>Н</td>
                  <td className={"five"}>Л</td>
                  <td className={"six"}>А</td>
                  <td className={"seven"}>Й</td>
                  <td className={"eight"}>Л</td>
                  <td className={"nine"}>Н</td>
                  <td className={"ten"}>Е</td>
                  <td className={"eleven"}>Р</td>
                  <td className={"twelve"}>Е</td>
                  <td className={"thirteen"}>П</td>
                </tr>
                <tr>
                  <td className={"one"}>В</td>
                  <td className={"two"}>У</td>
                  <td className={"three"}>Т</td>
                  <td className={"four"}>Л</td>
                  <td className={"five"}>Ж</td>
                  <td className={"six"}>Е</td>
                  <td className={"seven"}>Л</td>
                  <td className={"eight"}>В</td>
                  <td className={"nine"}>А</td>
                  <td className={"ten"}>О</td>
                  <td className={"eleven"}>О</td>
                  <td className={"twelve"}>А</td>
                  <td className={"thirteen"}>Д</td>
                </tr>
                <tr>
                  <td className={"one"}>С</td>
                  <td className={"two"}>И</td>
                  <td className={"three"}>И</td>
                  <td className={"four"}>В</td>
                  <td className={"five"}>Р</td>
                  <td className={"six"}>О</td>
                  <td className={"seven"}>В</td>
                  <td className={"eight"}>М</td>
                  <td className={"nine"}>Ш</td>
                  <td className={"ten"}>О</td>
                  <td className={"eleven"}>Ь</td>
                  <td className={"twelve"}>И</td>
                  <td className={"thirteen"}>С</td>
                </tr>
                <tr>
                  <td className={"one"}>П</td>
                  <td className={"two"}>О</td>
                  <td className={"three"}>Х</td>
                  <td className={"four"}>О</td>
                  <td className={"five"}>Б</td>
                  <td className={"six"}>Д</td>
                  <td className={"seven"}>И</td>
                  <td className={"eight"}>В</td>
                  <td className={"nine"}>К</td>
                  <td className={"ten"}>А</td>
                  <td className={"eleven"}>Я</td>
                  <td className={"twelve"}>Л</td>
                  <td className={"thirteen"}>М</td>
                </tr>
                <tr>
                  <td className={"one"}>У</td>
                  <td className={"two"}>У</td>
                  <td className={"three"}>О</td>
                  <td className={"four"}>И</td>
                  <td className={"five"}>Т</td>
                  <td className={"six"}>П</td>
                  <td className={"seven"}>Л</td>
                  <td className={"eight"}>К</td>
                  <td className={"nine"}>С</td>
                  <td className={"ten"}>И</td>
                  <td className={"eleven"}>К</td>
                  <td className={"twelve"}>И</td>
                  <td className={"thirteen"}>М</td>
                </tr>
                <tr>
                  <td className={"one"}>Р</td>
                  <td className={"two"}>О</td>
                  <td className={"three"}>Е</td>
                  <td className={"four"}>О</td>
                  <td className={"five"}>Н</td>
                  <td className={"six"}>Т</td>
                  <td className={"seven"}>Л</td>
                  <td className={"eight"}>Л</td>
                  <td className={"nine"}>Н</td>
                  <td className={"ten"}>Я</td>
                  <td className={"eleven"}>Е</td>
                  <td className={"twelve"}>У</td>
                  <td className={"thirteen"}>М</td>
                </tr>
              </tbody>
            </table>
          </div>
            <div className={classes.Button}>
              <Link to='/'>
                <Button
                  type='success'
                >
                  Вернуться домой
                </Button>
              </Link>
            </div>
          </div>
        </div>
    )
  }
}
