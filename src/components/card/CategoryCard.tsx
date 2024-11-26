import {Image, TouchableOpacity} from 'react-native';
import {Box, Text} from '../../lib/theme';
import React from 'react';
import {moderateScale, verticalScale} from 'react-native-size-matters';
const CategoryCard = ({
  icon,
  name,
  color,
  action,
}: {
  icon: any;
  name: string;
  color: string;
  action?: ()=> void
}) => {
  return (
    <TouchableOpacity
    onPress={action}
      style={{
        backgroundColor: `${color}40`,
        borderColor: color,
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
        alignItems="center"
        flexDirection="column"
        flex={1}>
        <Box>
          <Image
            source={icon}
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
            variant="xl"
            fontWeight={'bold'}
            textTransform="capitalize"
            textAlign="center">
            {name}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default CategoryCard;
