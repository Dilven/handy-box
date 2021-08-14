import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { createSavedContext, SavedItem } from './SavedProvider';

type Props = {
  children: React.ReactNode;
}

export const [
   SavedProvider, useSaved, useSavedActions
 ] = createSavedContext()

export const SavedPlacesProvider = ({ children }: Props) => {
  const [savedPlacesCookie] = useLocalStorage('savedPlaces', {});
  return (
    <SavedProvider initState={{ isOpen: false, items: savedPlacesCookie}}>{children}</SavedProvider>
  )
} 

export const useSavedPlaces = () => {
  const [,setLocalStorage] = useLocalStorage('savedPlaces', {});
  const state = useSaved();
  useEffect(() => {
    setLocalStorage(state.items)
  }, [state])
  return state;
}

export const useSavedPlacesActions = () => useSavedActions()