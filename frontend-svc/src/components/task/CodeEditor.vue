<template>
  <MonacoEditor
    :value="modelValue"
    :options="editorOptions"
    @editorDidMount="editorDidMount"
    language="python"
  />
</template>

<script>
import MonacoEditor from "vue-monaco-editor"

export default {
  data() {
    return {
      editor: null,
    }
  },

  components: {
    MonacoEditor,
  },

  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },

  methods: {
    editorDidMount(editor) {
      this.editor = editor

      editor.onDidChangeModelContent(() => {
        this.$emit("update:modelValue", editor.getValue())
      })
    },
  },
}
</script>

<style scoped>
.monaco-editor-container {
  height: 100%;
  display: flex;
}
</style>
