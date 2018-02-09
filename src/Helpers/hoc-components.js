import React from 'react';
import spinner from '../Style/assets/icons/spinner.svg';
import Loading from '../Components/Loading';
import Heading from '../Components/Heading';

// Renders the HOC only if the data have been fetched
export const withFetching = Component => ({ isFetching, ...otherProps }) => 
  isFetching
    ? <Loading icon={spinner}> <Heading level={4} size='h4'> Searching your books.. </Heading> </Loading>
    : <Component {...otherProps} />

export const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <EitherComponent />
    : <Component { ...props } />

// Renders the HOC only if the condition is truthy
export const withCondition = Component => ({ condition, ...otherProps }) =>
  condition ? null : <Component { ...otherProps } />
