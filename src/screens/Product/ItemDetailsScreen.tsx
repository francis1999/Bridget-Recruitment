import {useNavigation} from '@react-navigation/native';
import SafePageContainer from '../../components/containers/SafePageContainer';
import theme, {Box, Text} from '../../lib/theme';
import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/types';
import {BackButtonIcon} from '../../assets/images/backButton';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {formatAmount} from '../../lib/helpers/functions';

type ScreenNavProps = NativeStackScreenProps<
  HomeStackParamList,
  'ItemDetailsScreen'
>;

const ItemDetailsScreen = ({route}: ScreenNavProps) => {
  const {data} = route.params;
  const navigation = useNavigation();

  console.log('data', data);
  return (
    <SafePageContainer>
      <Box px="5.5">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.goBack();
          }}>
          <BackButtonIcon color={theme.colors.primary} />
        </TouchableOpacity>
      </Box>

      <ScrollView>
        <Box px="5.5" mt="4">
          <Box
            justifyContent="center"
            alignItems="center"
            borderWidth={2}
            borderRadius="xl"
            py="5"
            borderColor="gray">
            <Image
              resizeMethod="resize"
              resizeMode="contain"
              source={{uri: data?.image}}
              width={moderateScale(170)}
              height={verticalScale(170)}
            />
          </Box>

          <Box gap="2" mt="5">
            <Box>
              <Text
                color="primary"
                variant="xl"
                fontWeight={'bold'}
                textTransform="capitalize">
                {data.title}
              </Text>
            </Box>

            <Box>
              <Text
                color="textDark"
                variant="xl"
                fontWeight={'bold'}
                textTransform="capitalize">
                {data.category}
              </Text>
            </Box>

            <Box>
              <Text color="gray">{data.description}</Text>
            </Box>

            <Box>
              <Text
                style={{
                  color: '#FD903E',
                }}
                fontWeight={'bold'}
                variant="2xl">
                {formatAmount(data.price)}
              </Text>
            </Box>

            <Box
              justifyContent="center"
              alignContent="center"
             >
              <Text color="gray" fontWeight={'bold'} variant="md">
                Rating {data.rating.rate}/5 ⭐️
              </Text>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </SafePageContainer>
  );
};

export default ItemDetailsScreen;
