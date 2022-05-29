// eslint-disable-next-line no-unused-vars
import React from 'react'
import { storiesOf } from '@storybook/react'
// eslint-disable-next-line no-unused-vars
import { Input } from '../components'

const stories = storiesOf('App test', module)

stories.add('App', () => {
  return (<Input />)
})
