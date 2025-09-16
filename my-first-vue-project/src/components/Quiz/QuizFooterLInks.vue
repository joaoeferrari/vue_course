<script setup >
    import { state } from '@/stores/quizStore';

</script>

<template>
    <div>
        <h5>
            {{ state.name }}

            <button @click="state.name = 'A New Quiz Name'" >Change Quiz name</button>
        </h5>

        <ul>
            <li><a href="#">Get a job</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>

    </div>

</template>