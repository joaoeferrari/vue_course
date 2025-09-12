<script setup>
  import TabableTextArea from '@/components/TabableTexteArea.vue';

  import { ref } from "vue";

  let comment = ref('test value');

  setTimeout(()=>{
    comment.value = 'it works!';
  }, 2000)

</script>


<template>
  <main>
    <form>
      <TabableTextArea v-model="comment" style="width: 100%; height: 300px;" />
    </form>
  </main>
</template>
