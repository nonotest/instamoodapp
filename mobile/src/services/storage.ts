import LegacyStorage from '@react-native-community/async-storage-backend-legacy';
import AsyncStorageFactory from '@react-native-community/async-storage';

export type AppStorage = {
  favouriteMoods: string;
};

const legacyStorage = new LegacyStorage();

const storage = AsyncStorageFactory.create<AppStorage>(legacyStorage, {});

export default storage;
