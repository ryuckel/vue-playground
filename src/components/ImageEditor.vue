<template>
  <div class="imageEditorApp">
    <tui-image-editor ref="tuiImageEditor" :include-ui="useDefaultUI" :options="options"></tui-image-editor>
  </div>
</template>

<script>
import { ImageEditor } from "@toast-ui/vue-image-editor";
// To use the basic UI, the svg files for the icons is required.
import "tui-image-editor/dist/svg/icon-a.svg";
import "tui-image-editor/dist/svg/icon-b.svg";
import "tui-image-editor/dist/svg/icon-c.svg";
import "tui-image-editor/dist/svg/icon-d.svg";

// Load Style Code
import "tui-image-editor/dist/tui-image-editor.css";
import "file-saver";
export default {
  name: "ImageEditor",
  components: {
    "tui-image-editor": ImageEditor
  },
  props: {},
  data() {
    return {
      useDefaultUI: true,
      options: {
        // for tui-image-editor component's "options" prop
        cssMaxWidth: 700,
        cssMaxHeight: 500
      }
    };
  }
};
</script>
