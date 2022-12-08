<script setup>
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';

const props = defineProps(['event', 'side']);
</script>

<template>
  <Popover class="relative">
    <PopoverButton
        class="
        whitespace-nowrap
        bg-slate-900 bg-[#0E1526]
        hover:bg-[#090E1A]
        rounded-lg
        py-2
        px-4
        truncate
        max-w-[220px]
        md:max-w-[320px]
        xl:max-w-[400px]
      "
        :title="event.name"
    >
      {{ event.name }}
    </PopoverButton>

    <PopoverPanel
        class="
        absolute
        z-10
        border border-slate-700
        drop-shadow-2xl
        shadow-lg
        bg-slate-900
        rounded-lg
        p-6
        mt-2
        w-screen
        max-w-2xl
        lg:max-w-3xl
        xl:max-w-4xl
        text-sm
        max-h-[600px]
        overflow-y-auto
      "
        :class="{
          'left-0 xl:-left-8': side === 'left',
          'right-0 xl:-right-8': side === 'right',
          'left-1/2': side === 'middle',
        }"
    >
      <div
          class="
          absolute
          -top-px
          left-20
          right-11
          h-px
          bg-gradient-to-r
          from-sky-300/0
          via-sky-300/70
          to-sky-300/0
        "
      ></div>
      <dl class="space-y-2 mb-4">
        <div v-if="event.description">
          <dt class="font-bold text-xs text-slate-600">What?</dt>
          <dd class="text-slate-400">{{ event.description }}</dd>
        </div>
        <div class="flex">
          <div class="w-1/2" v-if="event.humans && event.humans.length">
            <dt class="font-bold text-xs text-slate-600">Who?</dt>
            <dd class="text-slate-400">{{ event.humans.join(', ') }}</dd>
          </div>
          <div class="w-1/2" v-if="event.timeSpent">
            <dt class="font-bold text-xs text-slate-600">How long?</dt>
            <dd class="text-slate-400">{{ event.timeSpent }}h</dd>
          </div>
        </div>
        <div v-if="event.client">
          <dt class="font-bold text-xs text-slate-600">Which client?</dt>
          <dd class="text-slate-400">{{ event.client }}</dd>
        </div>
        <div v-if="event.link">
          <dt class="font-bold text-xs text-slate-600">Where?</dt>
          <dd class="text-slate-400">
            <a
                target="_blank"
                :href="event.link"
                class="text-indigo-600 hover:underline active:text-indigo-500"
            >Link to Project</a>
          </dd>
        </div>
      </dl>

      <div>
        <img src="/img/obi-machbar-1.png" :alt="event.name">
        <img src="/img/obi-machbar-1.png" :alt="event.name">
      </div>

      <div
          class="
          absolute
          -bottom-px
          left-11
          right-20
          h-px
          bg-gradient-to-r
          from-blue-400/0
          via-blue-400
          to-blue-400/0
        "
      ></div>
    </PopoverPanel>
  </Popover>
</template>
