<script setup>
    import QuizHeader from './QuizHeader.vue';
    import QuizQuestion from './QuizQuestion.vue';
    import QuizFooter from './QuizFooter.vue';
    defineProps({ quiz: Object });
</script>

<template>
    <QuizHeader/>
    <QuizQuestion/>
    <QuizFooter :quiz="quiz" />
</template>