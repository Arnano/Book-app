import React from 'react';
import spinner from '../Style/assets/spinner.svg';
import Loading from '../Components/Loading';
import Heading from '../Components/Heading';

export const withFetching = Component => ({ isFetching, ...otherProps }) => 
  isFetching
    ? <Loading icon={spinner}> <Heading level={4} size='h4'> Searching your books.. </Heading> </Loading>
    : <Component {...otherProps} />
