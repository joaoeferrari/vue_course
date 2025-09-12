<script setup>
defineProps({
    modelValue: String
});

const emit = defineEmits(['update:modelValue']);

function onTabPress(e) {
    const textarea = e.target;

    const val = textarea.value;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // Atualiza o valor do textarea para incluir a tabulação
    textarea.value = val.substring(0, start) + "\t" + val.substring(end);

    // Reposiciona o cursor após a tabulação inserida
    textarea.selectionStart = textarea.selectionEnd = start + 1;

    // Emite o evento de update para que o v-model no componente pai funcione
    // com a tecla Tab também.
    emit('update:modelValue', textarea.value);
}
</script>

<template>
    <textarea
        :value="modelValue"
        @keydown.tab.prevent="onTabPress"
        @input="emit('update:modelValue', $event.target.value)"
    ></textarea>
</template>