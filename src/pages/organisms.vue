<template>
  <div>
    <vf-a-button @click="modal = true">Show Modal</vf-a-button>
    <vf-o-modal v-model="modal" btn-close small transition="fade-in">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec enim
      condimentum odio imperdiet posuere. Phasellus neque neque, varius ut
      imperdiet sit amet, rhoncus et orci. Mauris sollicitudin arcu mauris, sed
      ultricies est volutpat at. Nulla eu imperdiet lectus. Integer a augue
      imperdiet, lacinia justo non, ultricies urna. Praesent molestie quam a
      enim hendrerit, eget fringilla purus auctor. Etiam dignissim bibendum dui,
      et efficitur elit sodales id. Duis lacinia vulputate dictum. Cras et
      mauris quis erat blandit egestas ut rhoncus turpis. In hac habitasse
      platea dictumst. Aliquam porta gravida ligula non elementum. Nulla eget mi
      vestibulum, ullamcorper urna vitae, elementum ligula. Morbi non cursus
      eros. Fusce efficitur, quam eu consectetur suscipit, tortor massa egestas
      urna, et mattis diam eros non ligula. Mauris sit amet convallis eros, quis
      pharetra risus. Sed mollis, massa et lobortis egestas, ante tortor aliquam
      enim, ut sodales nisl quam sit amet nisi. Etiam congue purus metus, vel
      finibus sem fermentum vitae. Praesent quam diam, tincidunt id velit et,
      condimentum varius lorem. Aliquam erat volutpat. Nulla malesuada nec lacus
      vel porttitor.
    </vf-o-modal>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec enim
      condimentum odio imperdiet posuere. Phasellus neque neque, varius ut
      imperdiet sit amet, rhoncus et orci. Mauris sollicitudin arcu mauris, sed
      ultricies est volutpat at. Nulla eu imperdiet lectus. Integer a augue
      imperdiet, lacinia justo non, ultricies urna. Praesent molestie quam a
      enim hendrerit, eget fringilla purus auctor. Etiam dignissim bibendum dui,
      et efficitur elit sodales id. Duis lacinia vulputate dictum. Cras et
      mauris quis erat blandit egestas ut rhoncus turpis. In hac habitasse
      platea dictumst. Aliquam porta gravida ligula non elementum. Nulla eget mi
      vestibulum, ullamcorper urna vitae, elementum ligula. Morbi non cursus
      eros. Fusce efficitur, quam eu consectetur suscipit, tortor massa egestas
      urna, et mattis diam eros non ligula. Mauris sit amet convallis eros, quis
      pharetra risus. Sed mollis, massa et lobortis egestas, ante tortor aliquam
      enim, ut sodales nisl quam sit amet nisi. Etiam congue purus metus, vel
      finibus sem fermentum vitae. Praesent quam diam, tincidunt id velit et,
      condimentum varius lorem. Aliquam erat volutpat. Nulla malesuada nec lacus
      vel porttitor. Proin nec risus ipsum. Etiam scelerisque velit nec
      efficitur pharetra. Pellentesque non mi convallis, sollicitudin lorem
      consectetur, viverra erat. Proin consectetur, ipsum nec porta varius,
      augue est porta ipsum, vitae molestie ante justo in ipsum. In facilisis
      mattis odio a aliquam. Integer augue nisl, iaculis ullamcorper finibus at,
      pretium id augue. Cras ornare nunc in risus iaculis, tincidunt euismod
      nibh dapibus. Fusce eget lectus efficitur, porta urna in, aliquet nulla.
      Proin ac magna maximus, laoreet enim a, placerat ipsum. Donec condimentum
      elit at tellus bibendum, id bibendum ligula ullamcorper. Suspendisse nisi
      nunc, egestas at volutpat vel, aliquam vitae felis. Etiam convallis
      sodales nisl id consectetur. Fusce ac vulputate lectus. Cras aliquet, diam
      vitae tempus sollicitudin, sapien turpis scelerisque enim, ut sodales enim
      nulla non nulla. Maecenas vel ex elementum, lacinia velit id, vulputate
      velit. Curabitur sodales molestie suscipit. Nam id felis faucibus quam
      tincidunt aliquam non a magna. Aenean quis augue diam. Donec dapibus
      ullamcorper tincidunt. Maecenas convallis nunc nec massa tincidunt
      efficitur eget ac massa. Etiam pulvinar tortor nec dictum interdum.
      Curabitur molestie vitae risus ac ultricies. Donec vitae lectus sed mauris
      feugiat ultrices eu eget neque. Aenean sit amet enim nec nunc molestie
      consequat non quis orci. Integer bibendum quam ullamcorper turpis volutpat
      vehicula. Phasellus ultricies lobortis turpis vel pharetra.
    </p>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const modal = ref(false);
</script>
