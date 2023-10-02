<template>
  <TresMesh>
    <Suspense>
      <GLTFModel path="/horse.glb" draco ref="modelRef" />
    </Suspense>
  </TresMesh>
</template>

<script setup>
import { useRenderLoop } from "@tresjs/core";
import { ShaderMaterial } from "three";
import { useGLTF } from "@tresjs/cientos";

// import vertexShader from "./vertex.glsl";
// import fragmentShader from "./fragment.glsl";

//
// Refs
//
const { onLoop } = useRenderLoop();
const { nodes } = await useGLTF("/horse.glb");

console.log(nodes);

// // Dispose the default material
// nodes.Suzanne.material.dispose();

// const material = new ShaderMaterial({
//   vertexShader,
//   fragmentShader,
//   uniforms: {
//     u_Time: { value: 0 },
//   },
// });

//
// Lifecycle
//
onMounted(async () => {
  await nextTick();

  //   onLoop(({ elapsed }) => {
  //     material.uniforms.u_Time.value = elapsed;
  //   });
});
</script>
