import AsyncStorage from '@react-native-community/async-storage';

export const addFave = async id => {
  try {
    let existingIds = JSON.parse(await AsyncStorage.getItem('ids')) || [];
    existingIds.push(id);
    await AsyncStorage.setItem('ids', JSON.stringify(existingIds));
  } catch (e) {
    throw e;
  }
};

const arrayRemove = (arr, value) => {
  return arr.filter(ele => {
    return ele != value;
  });
};
export const deleteFave = async id => {
  try {
    let existingIds = JSON.parse(await AsyncStorage.getItem('ids')) || [];
    existingIds = arrayRemove(existingIds, id);
    return await AsyncStorage.setItem('ids', JSON.stringify(existingIds));
  } catch (e) {
    throw e;
  }
};

export const getFave = async () => {
  try {
    const values = JSON.parse(await AsyncStorage.getItem('ids'));
    return values;
  } catch (e) {
    throw e;
  }
  return true;
};
