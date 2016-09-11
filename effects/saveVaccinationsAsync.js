import { AsyncStorage } from 'react-native';
import { ADD_VACCINATION } from '../constants/actions';
import addVaccinationSuccess from '../actions/addVaccinationSuccess';
import addVaccinationFailure from '../actions/addVaccinationFailure';
import { KEY } from '../constants/storage';
import vaccinationsSelector from '../selectors/vaccinations';

/*
 * Retrieves the vaccinations from the Redux store to save them in the presitent storage.
 */
export default async function saveVaccinationsAsync({getState, dispatch}) {
  try {
    const vaccinations = vaccinationsSelector(getState());
    await AsyncStorage.setItem(KEY, JSON.stringify(vaccinations.toJS()))
    dispatch(addVaccinationSuccess());
  } catch(error) {
    dispatch(addVaccinationFailure());
  }
}
