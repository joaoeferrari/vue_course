
import { ref, watch } from "vue";

export function useStorage(key, defaultValue = null) {
  
    let storedVal = read();

  
    const data = ref(storedVal ? storedVal : defaultValue);

   
    watch(data, write, { deep: true });

    
    function read() {
        const storedVal = localStorage.getItem(key);
        if (storedVal) {
          
            try {
                return JSON.parse(storedVal);
            } catch (e) {
                console.error(`Error parsing JSON from localStorage key "${key}":`, e);
                localStorage.removeItem(key);
            }
        } 
        return null;
    }


    function write() {
        if (data.value === null || data.value === '') {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(data.value));
        }
    }
    
    
    return data;
}