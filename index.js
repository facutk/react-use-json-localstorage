import useLocalStorage from 'react-use-localstorage';

const EMPTY_JSON = {};

const useJsonLocalStorage = (key, initialValue = EMPTY_JSON) => {
  const [item, setItem] = useLocalStorage(key, JSON.stringify(initialValue));
  
  const setJsonItem = (jsonItem = EMPTY_JSON) => setItem(JSON.stringify(jsonItem));

  const parsedItem = JSON.parse(item);

  return [parsedItem, setJsonItem];
};

export default useJsonLocalStorage;

