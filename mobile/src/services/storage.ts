import LegacyStorage from '@react-native-community/async-storage-backend-legacy';
import AsyncStorageFactory from '@react-native-community/async-storage';

export type AppStorage = {
  favouriteMoods: string;
};

const legacyStorage = new LegacyStorage();

const storage = AsyncStorageFactory.create<AppStorage>(legacyStorage, {});

export default storage;

// todo: move to utils
export const getMoodByName = (
  item: Media,
  store: StoreProviderState,
): Mood | undefined | null => {
  if (!store.moods) {
    return null;
  }

  return store.moods.find(s => s.name === item.moodName);
};
