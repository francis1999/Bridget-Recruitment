import SafePageContainer from '../../components/containers/SafePageContainer';
import {Box, Text} from '../../lib/theme';
import React from 'react';

const DashBoardScreen = () => {
  return (
    <SafePageContainer>
      <Box px="5.5">
        <Text>This is Home Page</Text>
      </Box>
    </SafePageContainer>
  );
};

export default DashBoardScreen;
