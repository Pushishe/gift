import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import Button from '../../components/UI/Button/Button'
import { Link } from 'react-router-dom'

export default class Quiz extends Component {
  state = {
    results: {}, // {[id]: success error}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // { [id]: 'success' 'error' }
    quiz: [
      {
        question: 'Самое опасное и пугающее насекомое?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          {text: 'Муравей-пуля', id: 1},
          {text: 'Пчела', id: 2},
          {text: 'Комар-туберкулёзник', id: 3},
          {text: 'Гусеница', id: 4}
        ]
      },
      {
        question: 'Источник вечной ненависти?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: 'Агрессивный водитель', id: 1},
          {text: 'Общественный транспорт в 7:00 утра', id: 2},
          {text: 'Агрессивный водитель общественного транспорта', id: 3},
          {text: 'Что-то ещё', id: 4}
        ]
      },
      {
        question: 'Иллюстрация ...',
        rightAnswerId: 1,
        id: 3,
        answers: [
          {text: 'Твоего прыжка, хах :)', id: 1},
          {text: 'Прыжка после того, как поел', id: 2},
          {text: 'Прыжка после того, как не поел', id: 3},
          {text: 'Прыжка будущего джедая, не познавшего тайну силы', id: 4}
        ]
      },
      {
        question: 'Ты купила очки?',
        rightAnswerId: 3,
        id: 4,
        answers: [
          {text: 'Да', id: 1},
          {text: 'Нет', id: 2},
          {text: 'Да, поэтому, если мы встретимся, я буду в них', id: 3},
          {text: '...', id: 4}
        ]
      },
      {
        question: 'Что это?',
        rightAnswerId: 1,
        id: 5,
        answers: [
          {text: 'Опыт', id: 1},
          {text: 'Переживание', id: 1},
          {text: 'Испытание', id: 1},
          {text: 'Приключение', id: 1}
        ]
      },
      {
        question: 'Кто это?',
        rightAnswerId: 4,
        id: 6,
        answers: [
          {text: 'хз', id: 1},
          {text: 'Какая-то девушка', id: 2},
          {text: 'Вор-домушник, пока тебя нет дома', id: 3},
          {text: 'Исполнитель, которого Влад может слушать вечно', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId ) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }
      this.setState({
        answerState: {[answerId]: 'success'},
        results
      }) 

    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      })
    }

    
    const timeout = window.setTimeout(() => {
      if (this.isQuizFinished()) {
        this.setState({
          isFinished: true
        })
      } else {
        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
          answerState: null
        })
      }
      window.clearTimeout(timeout)
    }, 1000)
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  codeHandler = () => {
    alert('2')
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1 style={{
                fontWeight: 'lighter'
              }} >Ответь правильно на все вопросы</h1>

          {
            this.state.isFinished
              ? 
                <FinishedQuiz
                  results={this.state.results}
                  quiz={this.state.quiz}
                  onRetry={this.retryHandler}
                  onCode={this.codeHandler}
                />
              : 
              <ActiveQuiz 
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }
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
