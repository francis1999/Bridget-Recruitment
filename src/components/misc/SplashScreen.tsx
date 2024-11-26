import {Image} from 'react-native';
import SafePageContainer from '../containers/SafePageContainer';
import React from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {Box} from '../../lib/theme';

const SplashScreen = () => {
  return (
    <SafePageContainer>
      <Box justifyContent="center" alignItems="center" flex={1}>
        <Image
          source={require('../../assets/images/bridge-logo.png')}
          width={moderateScale(300)}
          height={verticalScale(300)}
          resizeMethod="scale"
          // resizeMode="cover"
        />
      </Box>
    </SafePageContainer>
  );
};

export default SplashScreen;
