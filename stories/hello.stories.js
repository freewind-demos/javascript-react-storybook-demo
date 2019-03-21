import React from 'react';
import {storiesOf} from '@storybook/react';
import Hello from '../hello.jsx';

storiesOf('Hello', module)
  .add('just hello', () => <Hello/>);
