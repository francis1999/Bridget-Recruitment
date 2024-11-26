import {useFocusEffect} from '@react-navigation/native';
import {ReactNode, useEffect, useState} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../lib/theme';
interface SafePageContainerProps {
  children: ReactNode;
  headerBgColor?: string;
  statusTextColor?: 'dark-content' | 'light-content';
}

const SafePageContainer: React.FC<SafePageContainerProps> = ({
  children,
  headerBgColor,
  statusTextColor,
}) => {
  const theme = useTheme<Theme>();
  const [bgColor, setBgColor] = useState(headerBgColor);
  const backGround = theme.colors.mainBackground;

  useEffect(() => {
    if (headerBgColor) {
      setBgColor(headerBgColor);
    } else if (theme.colors.mainBackground) {
      setBgColor(theme.colors.mainBackground);
    } else {
      setBgColor(theme.colors.mainBackground);
    }
  }, [headerBgColor, theme.colors.mainBackground]);

  useFocusEffect(() => {
    StatusBar.setBarStyle(
      statusTextColor ? statusTextColor : 'dark-content',
      true,
    );
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(
        // @ts-expect-error
        headerBgColor || backGround || bgColor,
        true,
      );
    }
  });
  return (
    <SafeAreaProvider
      // edges={['top']}
      style={{
        flex: 1,
        backgroundColor: theme.colors.mainBackground,
      }}>
      {/* ======CHILDREN===== */}
      <CustomStatusBar
        barStyle={statusTextColor ? statusTextColor : 'dark-content'}
        backgroundColor={headerBgColor || backGround}
      />
      {children}
    </SafeAreaProvider>
  );
};

export default SafePageContainer;

const CustomStatusBar = ({
  backgroundColor,
  barStyle,
  //add more props StatusBar
  ...rest
}: {
  backgroundColor: string;
  barStyle: 'dark-content' | 'light-content';
  rest?: any;
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle || 'light-content'}
        translucent
        {...rest}
      />
    </View>
  );
};
