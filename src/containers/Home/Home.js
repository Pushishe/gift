import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import Timer from './Timer/Timer';
import Clock from './clock.png'

export default class Home extends Component {

  state = {
    href: '',
    activeSlideIndex: 0
  }


  componentDidMount() {
    const buttonNext = document.querySelector('.next-screen')
    const buttonPrev = document.querySelector('.prev-screen')
    const buttonSelect = document.querySelector('.select')
    const screens = document.querySelectorAll('.screen')
    const dots = document.querySelectorAll('.dot')
    const screensCount = document.querySelectorAll('.screen').length
    
    let activeSlideIndex = 0

    if (activeSlideIndex === 0) {
      buttonPrev.classList.add('disabled')
    }

    buttonNext.addEventListener('click', (event) => {
      changeSlideN()
      if(event) {
        this.state.activeSlideIndex++
      }
    })

    buttonPrev.addEventListener('click', (event) => {
      changeSlideP()
      if(event) {
        this.state.activeSlideIndex--
      }
    })

    buttonSelect.addEventListener('click', () => {
      this.selectSlide()
    })

    function changeSlideN() {
      screens[activeSlideIndex].classList.remove('active')
      dots[activeSlideIndex].classList.remove('active')
      activeSlideIndex++
      if (activeSlideIndex > 0) {
        buttonPrev.classList.remove('disabled')
      }
      if (activeSlideIndex === screensCount) {
        activeSlideIndex = 0
        buttonNext.innerHTML = 'Следующее'
        buttonSelect.classList.remove('disabled')
      }
      if(activeSlideIndex === screensCount-1) {
        buttonNext.classList.add('disabled')
        buttonSelect.classList.add('disabled')
      }
      screens[activeSlideIndex].classList.add('active')
      dots[activeSlideIndex].classList.add('active')
    }

    function changeSlideP() {
      screens[activeSlideIndex].classList.remove('active')
      dots[activeSlideIndex].classList.remove('active')
      activeSlideIndex--
      if(activeSlideIndex === 0) {
        buttonPrev.classList.add('disabled')
      }
      if(activeSlideIndex === screensCount-2) {
        buttonNext.innerHTML = 'Следующее'
        buttonNext.classList.remove('disabled')
        buttonSelect.classList.remove('disabled')
      }
      screens[activeSlideIndex].classList.add('active')
      dots[activeSlideIndex].classList.add('active')
    }
  }
  
  selectSlide() {
    if (this.state.activeSlideIndex % 4 === 0) {
      this.setState({
        href: '/quiz'
      })
    } else if (this.state.activeSlideIndex % 4 === 1) {
      this.setState({
        href: '/puzzle'
      })
    } else {
      this.setState({
        href: '/learning'
      })
    }
}

  render() {
    return (
    <div className={'walkthrough show reveal'}>
      <div className={"walkthrough-pagination"}>
        <span className={"dot active"}></span>
        <span className={"dot"}></span>
        <span className={"dot"}></span>
        <span className={"dot"}></span>
      </div>
      <div className={"walkthrough-body"}>
        <ul className={"screens animate"}>
          <li className={"screen active"}>
            <div className={"media logo"}>
              <img className={"logo"} src={"https://s3.amazonaws.com/jebbles-codepen/icon.png"} alt={'Куб'}/>
            </div>
            <h3>
              Задание №1
              <br/>
              Тест
            </h3>
            <p>На эти вопросы сможешь ответить только ты, но, возможно, не с первого раза. Интеллектуальные
                способности никакую роль в этом задании играть не будут, в отличие от двух других.
            </p>
          </li>
          <li className={"screen"}>
            <div className={"media books"}>
              <img className={"icon"} src={"https://s3.amazonaws.com/jebbles-codepen/book_icon_1.png"} alt={'Книга 1'}/>
              <img className={"icon"} src={"https://s3.amazonaws.com/jebbles-codepen/book_icon_2.png"} alt={'Книга 2'}/>
              <img className={"icon"} src={"https://s3.amazonaws.com/jebbles-codepen/book_icon_3.png"} alt={'Книга 3'}/>
            </div>
            <h3>
              Задание №2
              <br/>
              Загадка Джиндоша
            </h3>
            <p>Вот здесь уже придётся подумать. Но плюс-минус за часик управишься, только не пренебрегай 
              записями на листочке.</p>
          </li>
          <li className={"screen"}>
            <div className={"media bars"}>
              <img className={"icon"} src={"https://s3.amazonaws.com/jebbles-codepen/bar_icon_axis.png"} alt={'Координаты'}/>
              <img className={"icon"} src={"https://s3.amazonaws.com/jebbles-codepen/bar_icon_3.png"} alt={'Полоса 1'}/>
              <img className={"icon"} src={"https://s3.amazonaws.com/jebbles-codepen/bar_icon_2.png"} alt={'Полоса 2'}/>
              <img className={"icon"} src={"https://s3.amazonaws.com/jebbles-codepen/bar_icon_1.png"} alt={'Полоса 3'}/>
            </div>
            <h3>
              Задание №3
              <br/>
              Вертикальная перестановка
            </h3>
            <p>Самое сложное из всех заданий. Думаю, что посидишь на нем достаточное количество времени
                , чтобы всё бросить и перейти к грубому методу по обрыву цепи кусачками.
            </p>
          </li>
          <li className={"screen"}>
            <div className={"media files"}>
              <img className={"icon"} src={Clock} alt={'Часы'} />
            </div>
            <h3>
              Осталось времени
              <br/>
              до получения комбинации
            </h3>
              <Timer />
          </li>
        </ul>
        
      </div>
      <div className={"walkthrough-footer"}>
        <button className={"button prev-screen"}>Предыдущее</button>
        <button className={"button next-screen"}>Следующее</button>
      </div>
      <Link
        to={this.state.href}
      >
        <div className={"footer"}>
          <button className={"select"}>Выбрать</button>
        </div>
      </Link>
    </div>
    )
  }
}
