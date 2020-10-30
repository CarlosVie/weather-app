import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  compose,
  Dispatch
} from 'redux';
import { createStructuredSelector } from 'reselect';
import { LoadingState } from '../../../../utils/constants';
import { useInjectReducer } from '../../../../utils/injectReducer';
import { useInjectSaga } from '../../../../utils/injectSaga';
import HeaderBar from '../../../components/Header';
import PaperCard from '../../../components/PaperCard';
import CardsGrid from '../../../components/PaperGrid';
import ScrodList from '../../../components/ScrobGrid';
import { actionFetchForecast, actionFetchInitialCities, actionSearchCity } from '../redux/actions';
import {
  makeSelectForecast,
  makeSelectItems,
  makeSelectLastRouteAction, makeSelectSearchCity
} from './selectors';
import {
  HomeDispatchPops,
  HomePageState
} from './type';
import reducer from '../redux/reducer';
import saga from '../redux/saga';

function HomePage({
  history,
  fetchInitialData,
  items,
  routerAction,
  item,
  search,
  forecast,
  fetchForecast
}: HomePageState): JSX.Element {
  const key = 'weatherState';
  useInjectReducer({key: key, reducer: reducer});
  useInjectSaga({key: key, saga: saga});
  
  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);
  
  const handlerClick = (city: string) => {
    fetchForecast(city);
  }
  
  return (
    <div>
      <HeaderBar search={search}/>
      <CardsGrid items={items.items} select={handlerClick}/>
      {forecast.loading === LoadingState.STATE_READY
        ? <ScrodList forecast={forecast.item}/>
        : <></>
      }
    </div>
  );
}

// @ts-ignore
const mapStateToProps = createStructuredSelector({
  items: makeSelectItems(),
  routerAction: makeSelectLastRouteAction(),
  item: makeSelectSearchCity(),
  forecast: makeSelectForecast(),
});

function mapDispatchToProps(dispatch: Dispatch): HomeDispatchPops {
  return {
    fetchInitialData: () => dispatch(actionFetchInitialCities()),
    search: (city) => dispatch(actionSearchCity(city)),
    fetchForecast: (city) => dispatch(actionFetchForecast(city))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  memo,
  withConnect,
)(HomePage);