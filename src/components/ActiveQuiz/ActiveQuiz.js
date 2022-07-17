import React from 'react';
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnswersList/AnswersList';
import VideoJS from '../UI/Video/VideoJS';
import VideoJump from '../../components/UI/Video/VideoJump.mp4'
import VideoMusic from '../../components/UI/Video/VideoMusic.mp4'
import AudioJS from '../UI/Audio/AudioJS';
import Audio from '../UI/Audio/Audio.mp3'

const ActiveQuiz = (props) => {
  if (props.answerNumber === 3) {
    return (
      <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
          <span>
            <strong>{ props.answerNumber }.</strong>&nbsp;
            {props.question}
          </span>
  
          <small>{ props.answerNumber }/{props.quizLength}</small>
        </p>

        <VideoJS 
          videoSrc = {VideoJump} 
        />

        <AnswersList
          state={props.state}
          answers={props.answers}
          onAnswerClick={props.onAnswerClick}
        />
      </div>
    );
  } else if (props.answerNumber === 5) {
      return (
        <div className={classes.ActiveQuiz}>
          <p className={classes.Question}>
            <span>
              <strong>{ props.answerNumber }.</strong>&nbsp;
              {props.question}
            </span>
    
            <small>{ props.answerNumber }/{props.quizLength}</small>
          </p>
          <AudioJS 
            audio = {Audio} 
          />
          <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
          />
        </div>
      );
    } else if (props.answerNumber === 6) {
      return (
        <div className={classes.ActiveQuiz}>
          <p className={classes.Question}>
            <span>
              <strong>{ props.answerNumber }.</strong>&nbsp;
              {props.question}
            </span>
    
            <small>{ props.answerNumber }/{props.quizLength}</small>
          </p>
  
          <VideoJS 
            videoSrc = {VideoMusic} 
          />
  
          <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
          />
        </div>
      );
    } 
    
    
    else {
        return (
          <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
              <span>
                <strong>{ props.answerNumber }.</strong>&nbsp;
                {props.question}
              </span>

              <small>{ props.answerNumber }/{props.quizLength}</small>
            </p>

            <AnswersList
              state={props.state}
              answers={props.answers}
              onAnswerClick={props.onAnswerClick}
            />
          </div>
        );
      }
}

export default ActiveQuiz;
