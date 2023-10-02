<script lang="ts" setup>
import { OrbitControls, GLTFModel } from "@tresjs/cientos";

const gl = reactive({
  clearColor: "#1C1C1C",
  powerPreference: "high-performance",
});
</script>

<template>
  <TresCanvas v-bind="gl" window-size>
    <TresPerspectiveCamera :position="[0, 1.7, 7]" :look-at="[0, 0, 0]" />
    <OrbitControls />
    <Suspense>
      <TresMesh>
        <Suspense>
          <GLTFModel path="/horse.glb" draco ref="modelRef" />
        </Suspense>
      </TresMesh>
    </Suspense>
    <TresAxesHelper />
    <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" cast-shadow />
    <TresAmbientLight :intensity="5" />
  </TresCanvas>
</template>
