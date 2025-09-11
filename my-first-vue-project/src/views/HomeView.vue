<script setup>
  
  import { useFlash } from '@/composables/useFlash';
  import { ref, watch } from 'vue';
  import { useStorage } from '@/composables/useStorage';

  let { flash } =  useFlash();

  let food = useStorage('food', 'tacos');
  let age = useStorage('age', 10);

  let obj = useStorage('obj', {one: 'one'});

  setTimeout(()=>{
    obj.value.one = 'CHANGED;'
  }, 3000)

</script>


<!-- template é a parte visual -->
<template>
  <main>
    <p>
      What is your favorite food? <input type="text" v-model="food" >
    </p>

    <p>
      How old are you? <input type="text" v-model="age" >
    </p>

    <p>
      <button @click="flash('Tests', 'It Works')"> Click me </button>
    </p>


  </main>
</template>
