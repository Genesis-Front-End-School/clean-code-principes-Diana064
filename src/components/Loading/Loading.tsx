import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper, Text } from './Loading.module';

interface LoaderProps {
  height: string;
  width: string;
  radius: string;
  visible: boolean;
}

export const Loader: React.FC<LoaderProps> = ({
  height,
  width,
  radius,

  visible,
}) => {
  return (
    <LoaderWrapper>
      <Text> Loading </Text>
      <ThreeDots
        height={height}
        width={width}
        radius={radius}
        color="#A1D6E2"
        ariaLabel="three-dots-loading"
        visible={visible}
      />
    </LoaderWrapper>
  );
};
