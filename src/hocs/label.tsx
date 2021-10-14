// just practicing

import React from 'react';

interface IProps {
  label: string | JSX.Element;
}

export const label = <T extends object>(
  WrappedComponent: React.FC<T>
): React.FC<T & IProps> => (props: IProps) => {
  return (
    <>
      {props.label}
      <WrappedComponent {...props as T} />
    </>
  );
};
