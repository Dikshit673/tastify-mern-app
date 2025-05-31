import { AppDispatch, AppState } from '@/redux/store';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();

export const useShallowAppSelector = <TSelected>(
  selector: (state: AppState) => TSelected
): TSelected => {
  return useAppSelector(selector, shallowEqual);
};
