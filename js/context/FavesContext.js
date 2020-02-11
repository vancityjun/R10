import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getFave, deleteFave, addFave} from '../config/model';

export const FavesContext = React.createContext();

const FavesProvider = ({children}) => {
  const [favesId, setFavesId] = useState([]);
  const addFaveToState = id => {
    addFave(id).then(() => setInitialFaves());
    // console.log(favesId);
  };

  const setInitialFaves = async () => {
    // console.log('BANANAAAAAAAAAA');
    setFavesId(await getFave());
  };

  const removeFaveToState = id => {
    deleteFave(id).then(() => setInitialFaves());
    // console.log(favesId);
  };
  useEffect(() => {
    setInitialFaves();
  }, []);
  const isFave = itemId => {
    return favesId.some(id => id === itemId);
  };
  return (
    <FavesContext.Provider
      value={{removeFaveToState, addFaveToState, favesId, isFave}}>
      {children}
    </FavesContext.Provider>
  );
};
export default FavesProvider;
