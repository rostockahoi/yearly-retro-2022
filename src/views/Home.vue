<script setup>
import Project from '@/components/Project.vue';
import eventsPerMonth from '@/eventsPerMonth.js';

</script>

<template>
  <div>
    <div class="py-3 text-slate-700 font-bold flex">
      <div class="w-1/2 text-center mt-4">Curamatik</div>
      <div class="">2022</div>
      <div class="w-1/2 text-center mt-4">webhub</div>
    </div>

    <div v-for="(events, month) in eventsPerMonth">
      <div class="flex">
        <div
          class="
            w-full
            py-16
            space-y-2
            flex flex-col
            items-center
            justify-center
          "
        >
          <Project
            :event="event"
            side="left"
            v-for="event in events.filter((ev) => ev.company === 'Curamatik')"
          />
        </div>
        <div class="w-1 bg-slate-500 flex flex-col justify-center items-center">
          <div
            class="-rotate-90 text-slate-700 font-bold bg-slate-900 px-2 mb-6"
          >
            {{ month }}
          </div>
          <Project
            :event="event"
            class="mt-2"
            side="middle"
            v-for="event in eventsPerMonth[month].filter(
              (ev) => ev.company === 'curahub'
            )"
          />
        </div>
        <div
          class="
            w-full
            py-16
            space-y-2
            flex flex-col
            items-center
            justify-center
          "
        >
          <Project
            :event="event"
            side="right"
            v-for="event in events.filter((ev) => ev.company === 'webhub')"
          />
        </div>
      </div>
    </div>

    <div class="py-3 text-slate-700 text-center font-bold">2023</div>
  </div>
</template>
