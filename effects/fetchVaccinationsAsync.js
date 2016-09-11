import { AsyncStorage } from 'react-native';
import { fromJS, OrderedMap } from 'immutable';
import { FETCH_VACCINATIONS } from '../constants/actions';
import fetchVaccinationsSuccess from '../actions/fetchVaccinationsSuccess';
import fetchVaccinationsFailure from '../actions/fetchVaccinationsFailure';
import { KEY } from '../constants/storage';

/**
 * Retrieves the vaccinations from the presistent storage.
 */
export default async function fetchVaccinationsAsync({dispatch}) {
  let result;

  try {
    result = await AsyncStorage.getItem(KEY);
  } catch(e) {
    dispatch(fetchVaccinationsFailure());
  }

  if (result === null) {
    dispatch(fetchVaccinationsSuccess(OrderedMap()));
  } else {
    let vaccinations = fromJS(JSON.parse(result));
    dispatch(fetchVaccinationsSuccess(vaccinations));
  }
}
