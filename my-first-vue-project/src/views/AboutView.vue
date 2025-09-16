<script setup>
  
  import { useFlash } from '@/composables/useFlash';
  import { counter } from '@/stores/counterStore';

  let { flash } =  useFlash();

</script>

<template>
  <div class="about">
    
    <h1>This is an about page</h1>
    <button @click="flash('Yay!','It  Works On The About Page!', 'info')" >Click Me</button>
    <p>
      About Page. The current count is {{ counter.count }}
    </p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
