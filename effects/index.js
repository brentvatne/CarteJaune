import { FETCH_VACCINATIONS, ADD_VACCINATION } from '../constants/actions';
import saveVaccinationsAsync from './saveVaccinationsAsync';
import fetchVaccinationsAsync from './fetchVaccinationsAsync';

function genericErrorHandler({action, error}) {
  console.log({error, action});
}

export default [
  {action: FETCH_VACCINATIONS, effect: fetchVaccinationsAsync, error: genericErrorHandler},
  {action: ADD_VACCINATION, effect: saveVaccinationsAsync, error: genericErrorHandler},
];
