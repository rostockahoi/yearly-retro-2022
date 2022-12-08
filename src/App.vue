<script setup></script>

<template>
  <div
    class="
      bg-gradient-to-b
      from-slate-900
      to-gray-900
      min-h-screen
      text-slate-300
      pb-64
      flex
      justify-center
    "
  >
    <main class="w-full min-w-[900px] max-w-[1400px]">
      <img
        alt=""
        src="https://syntax.tailwindui.com/_next/static/media/blur-cyan.d28a5585.png"
        width="1186"
        height="1186"
        class="absolute top-0 left-0 opacity-25 w-[800px] -ml-64 -mt-64"
        style="color: transparent"
      />

      <img
        alt=""
        src="https://syntax.tailwindui.com/_next/static/media/blur-cyan.d28a5585.png"
        width="1186"
        height="1186"
        class="absolute top-0 right-0 opacity-25 w-[900px] translate-y-[50rem]"
        style="color: transparent"
      />

      <router-view />
    </main>
  </div>
</template>
