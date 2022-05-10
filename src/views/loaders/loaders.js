import { Skeleton } from 'antd';
import React from 'react';

export const inputLoader = (width = 200) => {
  return <Skeleton.Input style={{ width }} active={true} size={'small'} />;
};