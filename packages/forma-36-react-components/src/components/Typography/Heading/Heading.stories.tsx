import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Heading from './Heading';

storiesOf('Components/Typography/Heading', module)
  .addParameters({
    propTypes: Heading['__docgenInfo'],
    component: Heading,
  })
  .add('default', () => (
    <Heading
      className={text('className', '')}
      element={select(
        'element',
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
        'h1',
      )}
    >
      {text('children', 'Heading')}
    </Heading>
  ));
