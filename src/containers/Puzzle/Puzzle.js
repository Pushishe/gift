import React, { Component } from 'react'
import classes from './Puzzle.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import './quest.css'

export default class Puzzle extends Component {

  componentDidMount() {
    let names = ['Мадам Нациу', 'Баронесса Финч', 'Доктор Марколла', 'Леди Уинслоу', 'Графиня Конти']
let colors = ['красное', 'зелёное', 'пурпурное', 'синее', 'белое']
let country = ['Фрейпорт', 'Морли', 'Бейлтон', 'Серконос', 'Дануолл']
let drink = ['виски', 'коктейль', 'ром', 'сидр', 'абсент']
let treas = ['Перстень', 'Бриллиант', 'Орден', 'Портсигар', 'Кулон с птицей']

let counter = 0;

let span1 = document.getElementsByClassName('1')
let span2 = document.getElementsByClassName('2')
let span3 = document.getElementsByClassName('3')
let span4 = document.getElementsByClassName('4')
let span5 = document.getElementsByClassName('5')

let button_test = document.querySelector('.test')
let button_solve = document.querySelector('.solve')

let name1 = document.querySelector('select[name="name1"]')
let name2 = document.querySelector('select[name="name2"]')
let name3 = document.querySelector('select[name="name3"]')
let name4 = document.querySelector('select[name="name4"]')
let name5 = document.querySelector('select[name="name5"]')

let treas1 = document.querySelector('select[name="treas1"]')
let treas2 = document.querySelector('select[name="treas2"]')
let treas3 = document.querySelector('select[name="treas3"]')
let treas4 = document.querySelector('select[name="treas4"]')
let treas5 = document.querySelector('select[name="treas5"]')

let vseSpan1 = Array.from(span1)
let vseSpan2 = Array.from(span2)
let vseSpan3 = Array.from(span3)
let vseSpan4 = Array.from(span4)
let vseSpan5 = Array.from(span5)

Array.prototype.rand = function() {
  let value =  this[Math.floor(Math.random() * this.length)]
  let index = this.indexOf(value)
  this.splice(index, 1)
  return value
}

class Person {
  constructor(names, colors, country, drink, treas) {
    this.names = names;
    this.colors = colors;
    this.country = country;
    this.drink = drink;
    this.treas = treas;
  }
}

let first = new Person (names.rand(), colors.rand(), country.rand(), drink.rand(), treas.rand())
let second = new Person (names.rand(), colors.rand(), country.rand(), drink.rand(), treas.rand())
let third = new Person (names.rand(), colors.rand(), country.rand(), drink.rand(), treas.rand())
let fourth = new Person (names.rand(), colors.rand(), country.rand(), drink.rand(), treas.rand())
let fifth = new Person (names.rand(), colors.rand(), country.rand(), drink.rand(), treas.rand())

vseSpan1[0].textContent = `${first.names}`
vseSpan1[1].textContent = `${first.country}`
vseSpan1[2].textContent = `${first.colors}`
vseSpan1[3].textContent = `${first.country}`
vseSpan1[4].textContent = `${first.treas}`
vseSpan1[5].textContent = `${first.drink}`
vseSpan1[6].textContent = `${first.treas}`

vseSpan2[0].textContent = `${second.colors}`
vseSpan2[1].textContent = `${second.treas}`
vseSpan2[2].textContent = `${second.country}`
vseSpan2[3].textContent = `${second.names}`
vseSpan2[4].textContent = `${second.drink}`
vseSpan2[5].textContent = `${second.treas}`

vseSpan3[0].textContent = `${third.names}`
vseSpan3[1].textContent = `${third.colors}`
vseSpan3[2].textContent = `${third.country}`
vseSpan3[3].textContent = `${third.treas}`
vseSpan3[4].textContent = `${third.drink}`
vseSpan3[5].textContent = `${third.treas}`

vseSpan4[0].textContent = `${fourth.colors}`
vseSpan4[1].textContent = `${fourth.colors}`
vseSpan4[2].textContent = `${fourth.drink}`
vseSpan4[3].textContent = `${fourth.names}`
vseSpan4[4].textContent = `${fourth.country}`
vseSpan4[5].textContent = `${fourth.treas}`

vseSpan5[0].textContent = `${fifth.colors}`
vseSpan5[1].textContent = `${fifth.names}`
vseSpan5[2].textContent = `${fifth.treas}`
vseSpan5[3].textContent = `${fifth.country}`
vseSpan5[4].textContent = `${fifth.drink}`

// console.log(first)
// console.log(second)
// console.log(third)
// console.log(fourth)
// console.log(fifth)

function isTrue() {
  if (name1.value == first.names && name2.value == second.names && name3.value == third.names && name4.value == fourth.names && name5.value == fifth.names) {
    if (treas1.value == first.treas && treas2.value == second.treas && treas3.value == third.treas && treas4.value == fourth.treas && treas5.value == fifth.treas) {
      alert('Верно! Ещё одна цифра: 1. Если что, цифры я даю не по порядку комбинации.')
      return true
    }
  } else {
    alert('Неверно!')
    return false
  }
}

function solve() {
  alert(`${first.names} - ${first.treas}
${second.names} - ${second.treas}
${third.names} - ${third.treas}
${fourth.names} - ${fourth.treas}
${fifth.names} - ${fifth.treas}
  `)
}

button_test.addEventListener('click', isTrue)
{/* <div className={"solve"}> 
              <button type={"submit"}>Ответ</button>
            </div>
button_solve.addEventListener('click', solve) */}

alert('При закрытии/перезагрузке вкладки с загадкой, все ее исходные данные изменятся и решать ее придется сначала. Не подглядывай! Я тебя предупредил.')
  }

  render() {
    return (
      <div className={classes.Puzzle}>
        <div className={classes.PuzzleWrapper}>
            <div className={'container'}>
              <h1 style={{
                fontWeight: 'lighter'
              }} >Реши загадку</h1>
                <p>На званом обеде были Леди Уинслоу, Доктор Марколла, Графиня Конти, Мадам Нациу и Баронесса Финч.</p>
                <p>Женщины сидели в ряд. Все они были одеты в разные цвета. Например, <span className={"3"}>доктор Маркелла</span> носила причудливое <span className={"3"}>пурпурное</span> панчо. <span className={"1"}>Мадам Нациу</span> левее всех, рядом с гостьей, одетой в <span className={"2"}>зелёное</span>.
              Дама, одетая в <span className={"4"}>синее</span> платье, сидела слева от гостьи, одетой в <span className={"5"}>белое</span>. Я помню <span className={"4"}>синее</span> платье, потому что его обладательница пролила на него <span className={"4"}>сидр</span>. Путешественница, недавно покинувшая <span className={"1"}>Фрейпорт</span>, была одета во всё <span className={"1"}>красное</span>. Когда одна гостья хвастливо демонстрировала <span className={"2"}>Бриллиант</span>, женщина, сидевшая рядом с ней, заметила: "Мой родной <span className={"1"}>Фрейпорт</span> славится такими безделушками".</p>
            <p>Тогда <span className={"5"}>графиня Конти</span> достала из сумочки свою фамильную драгоценность - <span className={"5"}>Кулон с птицей</span>. Дама, до того рассказывавшая, как красив в это время года её родной край, <span className={"3"}>Бейлтон</span>, с усмешкой заметила, 
              что её <span className={"3"}>Орден</span> - куда большая редкость. Другая дама начала демонстративно рассматривать свою реликвию - <span className={"1"}>Перстень</span>; сидевшая рядом с ней гостья (помнится её родина - <span className={"2"}>Морли</span>) чуть не
              выбила <span className={"1"}>виски</span> из рук своей соседки. Внезапно <span className={"2"}>баронесса Финч</span>, пившая исключительно <span className={"2"}>коктейль</span>, предложила тост. Дама, которой предстояло навестить <span className={"5"}>Дануолл</span> и которая весь вечер налегала на <span className={"5"}>абсент</span>, попыталась запрыгнуть на стол, но повалилась на гостью, сидевшую посередине, и та пролила <span className={"3"}>ром</span>. Затем <span className={"4"}>леди Уинслоу</span>, завладела всеобщим вниманием, рассказав про <span className={"4"}>Серконос</span> времен своей юности.</p>
              <p>Наутро под столом валялись 4 фамильные драгоценности: <span className={"2"}>Бриллиант</span>, <span className={"4"}>Портсигар</span>, <span className={"3"}>Орден</span> и <span className={"1"}>Перстень</span>.</p>
                <p>Но кому принадлежит каждая из них.</p>
                <div className={"form"}>
            <div className={"form_name"}>
              <select name={"name1"}>
                <option value={"Леди Уинслоу"}>Леди Уинслоу</option>
                <option value={"Доктор Марколла"}>Доктор Марколла</option>
                <option value={"Графиня Конти"}>Графиня Конти</option>
                <option value={"Мадам Нациу"}>Мадам Нациу</option>
                <option value={"Баронесса Финч"}>Баронесса Финч</option>
              </select>
              <select name={"name2"}>
                <option value={"Леди Уинслоу"}>Леди Уинслоу</option>
                <option value={"Доктор Марколла"}>Доктор Марколла</option>
                <option value={"Графиня Конти"}>Графиня Конти</option>
                <option value={"Мадам Нациу"}>Мадам Нациу</option>
                <option value={"Баронесса Финч"}>Баронесса Финч</option>
              </select>
              <select name={"name3"}>
                <option value={"Леди Уинслоу"}>Леди Уинслоу</option>
                <option value={"Доктор Марколла"}>Доктор Марколла</option>
                <option value={"Графиня Конти"}>Графиня Конти</option>
                <option value={"Мадам Нациу"}>Мадам Нациу</option>
                <option value={"Баронесса Финч"}>Баронесса Финч</option>
              </select>
              <select name={"name4"}>
                <option value={"Леди Уинслоу"}>Леди Уинслоу</option>
                <option value={"Доктор Марколла"}>Доктор Марколла</option>
                <option value={"Графиня Конти"}>Графиня Конти</option>
                <option value={"Мадам Нациу"}>Мадам Нациу</option>
                <option value={"Баронесса Финч"}>Баронесса Финч</option>
              </select>
              <select name={"name5"}>
                <option value={"Леди Уинслоу"}>Леди Уинслоу</option>
                <option value={"Доктор Марколла"}>Доктор Марколла</option>
                <option value={"Графиня Конти"}>Графиня Конти</option>
                <option value={"Мадам Нациу"}>Мадам Нациу</option>
                <option value={"Баронесса Финч"}>Баронесса Финч</option>
              </select>
            </div>
            <div className={"form_treas"}>
              <select name={"treas1"}>
                <option value={"Портсигар"}>Портсигар</option>
                <option value={"Бриллиант"}>Бриллиант</option>
                <option value={"Перстень"}>Перстень</option>
                <option value={"Кулон с птицей"}>Кулон с птицей</option>
                <option value={"Орден"}>Орден</option>
              </select>
              <select name={"treas2"}>
                <option value={"Портсигар"}>Портсигар</option>
                <option value={"Бриллиант"}>Бриллиант</option>
                <option value={"Перстень"}>Перстень</option>
                <option value={"Кулон с птицей"}>Кулон с птицей</option>
                <option value={"Орден"}>Орден</option>
              </select>
              <select name={"treas3"}>
                <option value={"Портсигар"}>Портсигар</option>
                <option value={"Бриллиант"}>Бриллиант</option>
                <option value={"Перстень"}>Перстень</option>
                <option value={"Кулон с птицей"}>Кулон с птицей</option>
                <option value={"Орден"}>Орден</option>
              </select>
              <select name={"treas4"}>
                <option value={"Портсигар"}>Портсигар</option>
                <option value={"Бриллиант"}>Бриллиант</option>
                <option value={"Перстень"}>Перстень</option>
                <option value={"Кулон с птицей"}>Кулон с птицей</option>
                <option value={"Орден"}>Орден</option>
              </select>
              <select name={"treas5"}>
                <option value={"Портсигар"}>Портсигар</option>
                <option value={"Бриллиант"}>Бриллиант</option>
                <option value={"Перстень"}>Перстень</option>
                <option value={"Кулон с птицей"}>Кулон с птицей</option>
                <option value={"Орден"}>Орден</option>
              </select>
            </div>
            <div 
            className={"test__"} 
            style={{
              marginTop: '10px',
              display: 'flex',
            }}>
              <button
              className={"test"}   
              style={{
                background: 'linear-gradient(90deg, #d13030 0%, #7969e6 100%)',
                textAlign: 'center',
                alignItems: 'center',
                height: '40px',
                border: '0',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                borderRadius: '0',
                color: 'white',
                flex: '1',
                fontSize: '14px',
                margin: '0',
                outline: '0',
                padding: '12px',
                cursor: 'pointer',
              }} 
              type={"submit"}
              >
                Проверить
              </button>
            </div>
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
      </div>
    )
  }
}
