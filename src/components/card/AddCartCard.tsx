import {Image, TouchableOpacity} from 'react-native';
import theme, {Box, Text} from '../../lib/theme';
import React from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {formatAmount} from '../../lib/helpers/functions';
const AddCartCard = ({
  icon,
  name,
  price,
  category,
  action,
}: {
  icon: any;
  name: string;
  price: number;
  category: string;
  action: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={action}
      style={{
        backgroundColor: theme.colors.mainBackground,
        borderColor: '#E2E2E2',
        borderWidth: 1,
        borderRadius: moderateScale(18),
        height: verticalScale(170),
        width: moderateScale(150),
        paddingHorizontal: 10,
        paddingVertical: moderateScale(15),
        marginHorizontal: 10,
      }}>
      <Box
        justifyContent="space-between"
        // alignItems="center"
        flexDirection="column"
        flex={1}>
        <Box alignItems="center">
          <Image
            source={{uri: icon ?? null}}
            resizeMethod="resize"
            resizeMode="contain"
            style={{
              width: moderateScale(130),
              height: verticalScale(80),
            }}
          />
        </Box>

        <Box justifyContent="flex-end">
          <Text
            color="textDark"
            variant="base"
            fontWeight={'bold'}
            textTransform="capitalize"
            numberOfLines={1}
            lineBreakMode="tail">
            {name}
          </Text>
          <Text
            style={{
              color: '#7C7C7C',
            }}
            variant="sm"
            fontWeight={'bold'}
            textTransform="capitalize"
            numberOfLines={1}
            lineBreakMode="tail">
            {category}
          </Text>
          <Text
            style={{
              color: '#FD903E',
            }}
            variant="base"
            fontWeight={'bold'}
            textTransform="capitalize">
            {formatAmount(price || 0)}
          </Text>
        </Box>
      </Box>
      <Box position="absolute" alignSelf="flex-end" bottom={-10}>
        <TouchableOpacity activeOpacity={0.7}>
          <Box
            backgroundColor="textGreen"
            borderRadius="lg"
            height={verticalScale(30)}
            justifyContent="center"
            width={moderateScale(30)}>
            <Text
              color="white"
              textAlign="center"
              variant="2xl"
              fontWeight={'bold'}>
              +
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </TouchableOpacity>
  );
};

export default AddCartCard;
