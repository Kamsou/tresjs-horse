<script lang="ts" setup>
import { OrbitControls, GLTFModel } from "@tresjs/cientos";
</script>

<template>
  <div>
    <TresCanvas
      window-size
      shadows
      alpha
      power-preference="high-performance"
      preserve-drawing-buffer
    >
      <TresPerspectiveCamera
        :position="[1, 4, 7]"
        :fov="75"
        :near="0.1"
        :far="1000"
      />
      <OrbitControls />
      <TresMesh>
        <Suspense>
          <GLTFModel path="/models/horse.glb" draco ref="modelRef" />
        </Suspense>
      </TresMesh>
      <TresAxesHelper />
      <TresDirectionalLight
        :position="[-4, 8, 4]"
        :intensity="1.5"
        cast-shadow
      />
      <TresAmbientLight :intensity="5" />
    </TresCanvas>
  </div>
</template>
