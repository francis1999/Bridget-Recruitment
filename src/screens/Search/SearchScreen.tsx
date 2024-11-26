import {FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';

import {SearchIcon} from '../../assets/images/search';
import AddCartCard from '../../components/card/AddCartCard';
import CategoryCard from '../../components/card/CategoryCard';
import SafePageContainer from '../../components/containers/SafePageContainer';
import Input from '../../components/inputs/Input';

import {Box, Text} from '../../lib/theme';
import React, {useCallback, useEffect, useState} from 'react';
import FlexBox from '../../components/containers/FlexBox';
import {moderateScale} from 'react-native-size-matters';
import {mockCategoryOptions} from '../../lib/mock';
import {useApiGet} from '../../api/apiConfig';
import {
  getCategories,
  getOneCategory,
  getProducts,
  IProduct,
} from '../../api/mainApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
const SearchScreen = () => {
  const [searchParams, setSearchParams] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const [showFilter, setShowFilter] = useState(false);
  const [filterParam, setFilteredParam] = useState<string>('');
  const navigation = useNavigation();

  const {data, isLoading, refetch, isRefetching} = useApiGet(
    ['categories'],
    getCategories,
    {
      enabled: true,
      refetchOnWindowFocus: true,
      retry: 1,
    },
  );

  const updatedCategoryOptions = mockCategoryOptions.map((option, index) => ({
    ...option,
    name: data?.[index] || option.name,
  }));

  const {
    data: productData,
    isLoading: productLoading,
    refetch: productRefresh,
    isRefetching: productRefreshing,
  } = useApiGet(['products'], getProducts, {
    enabled: true,
    refetchOnWindowFocus: true,
    retry: 1,
  });

  const {
    data: sortData,
    // isLoading: sortLoading,
    // refetch: sortRefresh,
    // isRefetching: sortRefreshing,
  } = useApiGet(['products', filterParam], () => getOneCategory(filterParam), {
    enabled: !!filterParam,
    refetchOnWindowFocus: true,
    retry: 1,
  });

  useEffect(() => {
    const loadSearchHistory = async () => {
      try {
        const storedSearchTerms = await AsyncStorage.getItem('searchHistory');
        if (storedSearchTerms) {
          setSearchParams(JSON.parse(storedSearchTerms));
        }
      } catch (error) {
        console.error('Failed to load search history', error);
      }
    };
    loadSearchHistory();
  }, []);

  const clearSearch = () => {
    setSearchParams([]);
    AsyncStorage.removeItem('searchHistory');
    setFilteredParam('');
  };

  const saveSearchHistory = async (terms: string[]) => {
    try {
      await AsyncStorage.setItem('searchHistory', JSON.stringify(terms));
    } catch (error) {
      console.error('Failed to save search history', error);
    }
  };

  const filterFunc = (param: string) => {
    console.log(param);
    setFilteredParam(param);
    setShowFilter(!showFilter);
  };

  const searchFunc = useCallback(
    (param: string) => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout); // Clear the previous timeout
      }

      const newTimeout = setTimeout(() => {
        console.log('param', param);

        // Filter productData by title
        const filtered = productData?.filter(item =>
          item.title.toLowerCase().includes(param.toLowerCase()),
        );

        if (filtered) {
          setFilteredData(filtered);
        } else {
          setFilteredData([]);
        }

        // Update search history and store locally
        if (param && !searchParams.includes(param)) {
          const updatedSearchParams = [...searchParams, param];
          setSearchParams(updatedSearchParams);
          saveSearchHistory(updatedSearchParams); // Save to AsyncStorage
        }
      }, 300); // Debounce delay: 300ms

      setDebounceTimeout(newTimeout); // Save the new timeout
    },
    [debounceTimeout, productData, searchParams],
  );

  return (
    <SafePageContainer>
      <Box px="5.5">
        <FlexBox alignItems="center" justifyContent="space-between" mb="2">
          <Box width={'75%'}>
            <Input
              label=""
              placeholder="search"
              onChange={e => {
                searchFunc(e);
              }}
              icon={
                <Box>
                  <SearchIcon width={20} height={20} color={'#FF882E5E'} />
                </Box>
              }
            />
          </Box>

          <TouchableOpacity
            onPress={() => {
              setShowFilter(!showFilter);
            }}
            activeOpacity={0.7}
            style={{
              position: 'relative',
              top: 15,
            }}>
            <Image
              source={require('../../assets/images/filterIcon.png')}
              style={{
                width: moderateScale(90),
                height: moderateScale(90),
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
        </FlexBox>

        <FlexBox
          alignItems="center"
          justifyContent="space-between"
          width={'95%'}>
          <Box>
            <Text color="textDark" variant="xl" fontWeight={'black'}>
              Search History
            </Text>
          </Box>
          {searchParams.length > 0 ||
            (filterParam !== '' && (
              <Box>
                <TouchableOpacity activeOpacity={0.7} onPress={clearSearch}>
                  <Text color="textSecondary" variant="md">
                    clear
                  </Text>
                </TouchableOpacity>
              </Box>
            ))}
        </FlexBox>

        {searchParams.length > 0 && (
          <Box>
            <FlatList
              columnWrapperStyle={{
                // justifyContent: 'space-between',
                gap: moderateScale(30),
                marginTop: 20,
                flex: 1,
              }}
              numColumns={4}
              data={searchParams}
              renderItem={({item}) => (
                <Box>
                  <Text variant="sm" style={{color: '#8688897A'}}>
                    {item}
                  </Text>
                </Box>
              )}
            />
          </Box>
        )}
      </Box>

      <Box flex={1} >
        <ScrollView>
          {showFilter && (
            <FlatList
              data={updatedCategoryOptions}
              nestedScrollEnabled
              numColumns={2}
              refreshing={isRefetching || isLoading}
              onRefresh={refetch}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                // paddingHorizontal: Platform.OS === "ios" ? 10 : 0,
                marginTop: 20,
                flex: 1,
                marginHorizontal: 10
              }}
              ListEmptyComponent={
                <Box justifyContent="center" my="10">
                  <Text textAlign="center" variant="xl" color="primary">
                    No Categories at the moment
                  </Text>
                </Box>
              }
              renderItem={({item}) => (
                <CategoryCard
                  action={() => filterFunc(item.name)}
                  color={item.color}
                  icon={item.icon}
                  name={item.name}
                />
              )}
            />
          )}

          <Box>
            <FlatList
              // data={productData}
              // data={filteredData.length > 0 ? filteredData : productData}
              data={
                sortData && sortData.length > 0
                  ? sortData // Use sorted data if available
                  : filteredData.length > 0
                  ? filteredData
                  : productData
              }
              nestedScrollEnabled
              numColumns={2}
              refreshing={productRefreshing || productLoading}
              onRefresh={productRefresh}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                // paddingHorizontal: Platform.OS === "ios" ? 10 : 0,
                marginTop: 20,
                flex: 1,
                marginBottom: 10,
                marginHorizontal: 10
              }}
              ListEmptyComponent={
                <Box justifyContent="center" my="10">
                  <Text textAlign="center" variant="xl" color="primary">
                    No Products at the moment
                  </Text>
                </Box>
              }
              renderItem={({item}) => (
                <AddCartCard
                  action={() => {
                    navigation.navigate('HomeNavigator', {
                      screen: 'ItemDetailsScreen',
                      params: {data: item},
                    });
                  }}
                  icon={item.image}
                  name={item.title}
                  price={item.price}
                  category={item.category}
                />
              )}
            />
          </Box>
        </ScrollView>
      </Box>
    </SafePageContainer>
  );
};

export default SearchScreen;
