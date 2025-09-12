<script setup>
    import QuizFooterLInks from './QuizFooterLInks.vue';
    defineProps({
        quiz: Object
    });
</script>

<template>
    <footer>
        <h4>Quiz Footer</h4>

        <QuizFooterLInks :quiz="quiz" />
    </footer>
</template>