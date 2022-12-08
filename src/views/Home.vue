<script setup>
import Project from '@/components/Project.vue';
import eventsPerMonth from '@/eventsPerMonth.js';
const topProjects = [{name: 'VHS Lese-Trainer', timeSpent: 1386, company: "curahub"}, {name: 'My7steps App', timeSpent: 1079, company: "curahub"}, {name: 'AOK Schwanger', timeSpent: 1053, company: "Curamatik"} ]
</script>

<template>

  <h1 class="text-center text-5xl font-bold text-slate-400 py-32">Jahresrückblick 2022</h1>

  <div class="flex justify-center mb-32">
    <img class="max-w-xl opacity-60" src="/img/santa-1.png" alt="">
  </div>

  <div>
    <div class="py-3 text-slate-700 font-bold flex">
      <div class="w-1/2 text-center mt-4">Curamatik</div>
      <div class="">2022</div>
      <div class="w-1/2 text-center mt-4">webhub</div>
    </div>

    <div v-for="(events, month) in eventsPerMonth">
      <div class="flex">
        <div class="
            w-full
            py-16
            space-y-2
            flex flex-col
            items-center
            justify-center
          ">
          <Project :event="event" side="left" v-for="event in events.filter((ev) => ev.company === 'Curamatik')" />
        </div>
        <div class="w-1 bg-slate-500 flex flex-col justify-center items-center">
          <div class="-rotate-90 text-slate-700 font-bold bg-slate-900 px-2 mb-6">
            {{ month }}
          </div>
          <Project :event="event" class="mt-2" side="middle" v-for="event in eventsPerMonth[month].filter(
            (ev) => ev.company === 'curahub'
          )" />
        </div>
        <div class="
            w-full
            py-16
            space-y-2
            flex flex-col
            items-center
            justify-center
          ">
          <Project :event="event" side="right" v-for="event in events.filter((ev) => ev.company === 'webhub')" />
        </div>
      </div>
    </div>

    <div class="py-3 text-slate-700 text-center font-bold mb-64">2023</div>

    <h2 class="text-center text-4xl mb-24">Top Projekte nach Zeit</h2>

    <div class="flex justify-center">
      <div class="flex mx-auto w-full items-center justify-center">

        <ul class="space-y-8">
          <li class="border-blue-200" v-for="project in topProjects">
            <div
              class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div class="flex-1 pl-1 mr-16">
                <div class="font-bold text-gray-900">{{ project.name}}</div>
                <div class="text-gray-600 text-lg">{{ project.timeSpent}} h</div>
              </div>
              <div class="text-gray-600 text-sm">{{ project.company}}</div>
            </div>
          </li>
       
        </ul>

      </div>
    </div>

    <div class="flex justify-center mt-64">
      <img class="max-w-xl opacity-60" src="/img/santa-2.png" alt="">
    </div>

  </div>
</template>
