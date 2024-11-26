import SafePageContainer from '../../components/containers/SafePageContainer';
import {Box, Text} from '../../lib/theme';
import React from 'react';

const ProfileScreen = () => {
  return (
    <SafePageContainer>
      <Box px="5.5" flex={1} justifyContent="center">
        <Text color="primary" variant="2xl" textAlign="center">
          This is Profile Page
        </Text>
      </Box>
    </SafePageContainer>
  );
};

export default ProfileScreen;
