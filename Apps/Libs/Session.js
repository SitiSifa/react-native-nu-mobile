import { AsyncStorage } from 'react-native'
import Storage from 'react-native-storage'

const storage = new Storage({
	size: 1000,
	storageBackend: AsyncStorage,
	defaultExpires: 7000 * 3600 * 24,
	enableCache: true,
})

export function setSession(key, data) {
  storage.save({
    key: key, // Note: Do not use underscore("_") in key!
    rawData: data,
    expires: 7000 * 3600 * 24
  })
}

export function getSession(key) {
  return storage.load({
    key: key,
    autoSync: false,
    syncInBackground: true,
  }).then(ret => ret).catch(err => {
    switch (err.name) {
      case 'NotFoundError':
        return false
      break;
      case 'ExpiredError':
        return false
      break;
    }
  })
}

export function removeSession(key) {
  storage.remove({
    key: key
  })
}