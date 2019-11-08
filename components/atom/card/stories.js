import React from 'react';
import {storiesOf} from '@storybook/react';

import Card from './CustomCard';

storiesOf('Card', module)
  .add('default', () => (
    <Card>
      지우지 마세연
    </Card>
  ))
  .add('ask', () => (
    <Card className="ask">
      지우지 말아주세연
    </Card>
  ))