import React from 'react';
import cn from 'classnames';

import styles from './Tag.css';

export type TagType =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'secondary'
  | 'muted';

export const tagType = [
  'primary',
  'positive',
  'negative',
  'warning',
  'muted',
  'secondary',
];

type Status = 'published' | 'draft' | 'archived' | 'changed' | 'deleted';

const statusTagTypeMap = {
  published: 'positive',
  draft: 'warning',
  archived: 'negative',
  changed: 'primary',
  deleted: 'negative',
};

export interface TagProps {
  tagType?: TagType;
  style?: React.CSSProperties;
  className?: string;
  testId?: string;
  children: React.ReactNode;
  entityStatusType?: Status;
}

export function Tag({
  className,
  children,
  tagType = 'primary' as TagType,
  entityStatusType,
  testId = 'cf-ui-tag',
  ...otherProps
}: TagProps): React.ReactElement {
  const classNames = cn(styles.Tag, className, {
    [styles[
      `Tag--${
        entityStatusType
          ? statusTagTypeMap[entityStatusType as Status]
          : tagType
      }`
    ]]: entityStatusType
      ? statusTagTypeMap[entityStatusType as Status]
      : tagType,
  });

  return (
    <div className={classNames} data-test-id={testId} {...otherProps}>
      {children}
    </div>
  );
}

export default Tag;
