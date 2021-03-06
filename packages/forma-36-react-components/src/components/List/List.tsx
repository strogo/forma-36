import React from 'react';
import cn from 'classnames';

import styles from './List.css';

export interface ListProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
}

export function List({
  className,
  children,
  testId = 'cf-ui-list',
  ...otherProps
}: ListProps): React.ReactElement {
  const classNames = cn(styles['List'], className);

  return (
    <ul {...otherProps} className={classNames} data-test-id={testId}>
      {children}
    </ul>
  );
}

export default List;
