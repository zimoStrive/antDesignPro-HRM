// 定义接口
interface CacheUtil {
  setItem<T>(key: string, value: T): void;
  getItem<T>(key: string): T | null;
  removeItem(key: string): void;
  clear(): void;
}

// 实现接口
export const cacheUtil: CacheUtil = {
  setItem: <T>(key: string, value: T): void => {
    try {
      const serializedValue = JSON.stringify(value);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error setting item to localStorage', error);
    }
  },

  getItem: <T>(key: string): T | null => {
    try {
      const serializedValue = window.localStorage.getItem(key);
      if (!serializedValue) {
        return null;
      }

      // 使用类型断言，确保 JSON.parse 返回的是 T 类型
      return JSON.parse(serializedValue) as T;
    } catch (error) {
      console.error('Error getting item from localStorage', error);
      return null;
    }
  },

  removeItem: (key: string): void => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from localStorage', error);
    }
  },

  clear: (): void => {
    try {
      window.localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage', error);
    }
  },
};
