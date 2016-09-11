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
  try {
    let result = await AsyncStorage.getItem(KEY);
    let vaccinations = result ? fromJS(JSON.parse(result)) : OrderedMap();
    dispatch(fetchVaccinationsSuccess(vaccinations));
  } catch(e) {
    dispatch(fetchVaccinationsFailure());
  }
}
