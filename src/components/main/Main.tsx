import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, SafeAreaView} from 'react-native';
import {useGetBrandsQuery, useGetCarsQuery} from '../../redux/api';
import {SelectTypeBrand} from './type.main';
import {Loader} from '../../UIKit/loader/Loader';
import {HeaderComponent} from '../header/HaderComponent';
import {SettingsModal} from '../modals/settings/SettingsModal';
import {CarsCard} from '../cards/cars/CarsCard';
import {CarModel} from '../../redux/api/type.api';
import {exactModels} from '../../helper/utils';
import Toast from 'react-native-toast-message';
import {MoreInfoModal} from '../modals/moreInfo/MoreInfoModal';

const Main = () => {
  const [selectBrand, setSelectBrand] = useState<SelectTypeBrand | {}>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [settingsModalVisible, setSettingsModalVisible] =
    useState<boolean>(false);
  const [moreInfoModalVisible, setMoreInfoModalVisible] =
    useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [sectionNum, setSectionNum] = useState<number>(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [data, setData] = useState([]);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const {
    data: cars,
    refetch: refetchCars,
    isLoading: isLoadingCars,
  } = useGetCarsQuery(selectBrand);

  const {data: brands, isLoading: isLoadingBrands} = useGetBrandsQuery(null);

  const fetchData = () => {
    refetchCars();
  };

  const startTimer = () => {
    Toast.show({
      type: 'success',
      text1: 'Данные обновлены',
    });

    setTimer(setInterval(() => fetchData(), 30000));
  };

  const stopTimer = () => {
    if (timer !== null) {
      clearTimeout(timer);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    stopTimer();

    refetchCars().then(() => {
      setRefreshing(false);
      startTimer();
    });
  };

  useEffect(() => {
    setLoading(isLoadingCars || isLoadingBrands);
  }, [isLoadingCars, isLoadingBrands]);

  useEffect(() => {
    if (Object.keys(selectBrand).length === 0) {
      const generalData = exactModels(cars);

      setData(generalData);
    } else {
      if (!cars) return;
      setData(cars.models);
    }
  }, [cars, sectionNum, selectBrand]);

  const ListHeaderComponent = ({selectBrand, setSettingsModalVisible}) => (
    <HeaderComponent
      selectBrand={selectBrand}
      setSettingsModalVisible={setSettingsModalVisible}
    />
  );

  const renderItem = ({item}: {item: CarModel}) => {
    return (
      <CarsCard
        key={item.id}
        {...item}
        sectionNum={sectionNum}
        setSelectedId={setSelectedId}
        setMoreInfoModalVisible={setMoreInfoModalVisible}
      />
    );
  };

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <SafeAreaView>
      {!!loading && <Loader />}
      {!loading && (
        <FlatList
          key={sectionNum}
          keyExtractor={item => `${item.id}`}
          numColumns={sectionNum}
          style={{height: '100%'}}
          data={data}
          renderItem={renderItem}
          ListHeaderComponent={() => (
            <ListHeaderComponent
              selectBrand={selectBrand}
              setSettingsModalVisible={setSettingsModalVisible}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
      <SettingsModal
        modalVisible={settingsModalVisible}
        setModalVisible={setSettingsModalVisible}
        brands={brands}
        selectBrand={selectBrand}
        setSelectBrand={setSelectBrand}
        setSectionNum={setSectionNum}
        sectionNum={sectionNum}
      />
      <MoreInfoModal
        modalVisible={moreInfoModalVisible}
        setModalVisible={setMoreInfoModalVisible}
        selectedId={selectedId}
      />
    </SafeAreaView>
  );
};

export default React.memo(Main);
