import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button, {ButtonSize} from './CustomButton';

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>클릭</Button>)
  .add('default - small', () => (
    <Button
      size={ButtonSize.SMALL} onClick={action('clicked')}>
        작성하기
    </Button>
  ))
  .add('default - medium', () => (
    <Button
      size={ButtonSize.MEDIUM} onClick={action('clicked')}>
        작성하기
    </Button>
  ))
  .add('default - large', () => (
    <Button
      size={ButtonSize.LARGE} onClick={action('clicked')}>
        작성하기
    </Button>
  ))