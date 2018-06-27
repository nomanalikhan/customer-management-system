import React from 'react';

export const withJs = WrappedComponent => ({immutables, ...wrappedComponentProps}) => {
  const propsJS = immutables.toJS();

  return <WrappedComponent {...propsJS} {...wrappedComponentProps} />
}
