import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper, Text } from './Loading.module';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Text> Loading </Text>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#A1D6E2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};
