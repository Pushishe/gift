import React, { Component } from 'react'
import classes from './Learning.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import VideoJS from '../../components/UI/Video/VideoJS';
import VideoLearn from '../../components/UI/Video/VideoJump.mp4'

export default class Learning extends Component {
  render() {
    return (
      <div className={classes.Learning}>
        <div className={classes.LearningWrapper}>
          <div>
            <h1 
              style={{
                fontWeight: 'lighter'
              }}  
            >Обучение</h1>
          </div>

            <VideoJS 
            videoSrc = {VideoLearn} 
            />

          <div className={classes.Button}>
            <Link to='/encryption'>
              <Button
                type='primary'
              >
                Далее
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

