<script setup>
import Project from '@/components/Project.vue';
import eventsPerMonth from '@/eventsPerMonth.js';

const topProjects = [{ name: 'VHS Lese-Trainer', timeSpent: 1386, company: "curahub" }, {
  name: 'My7steps App',
  timeSpent: 1079,
  company: "curahub"
}, { name: 'AOK Schwanger', timeSpent: 1053, company: "Curamatik" }]

const upcomingTasks = [
  {
    name: 'AOK Schwanger',
    client: 'AOK Nordost',
    description: 'Add a Mobile Backend and integrate with OpenID IDM',
    company: '🤰Curamatik',
    challenge: 'Live App with > 40.000 MAU that want to store images'
  },
  {
    name: 'VHS Lese-Trainer',
    client: 'DVV e.V.',
    description: 'Finish our part of the work',
    company: '🤝 curahub',
    challenge: 'Budget restrictions vs client vs speech-recognition partner'
  },
  {
    name: 'My7steps App',
    client: 'Ipso Healthcare GmbH',
    description: 'Rethink and reimplement Ipso Care / TALK video counseling',
    company: '🤝 curahub',
    challenge: 'Time pressure meets reimplementation meets existing system that has grown over time'
  },
  {
    name: 'saba + TALK',
    client: 'Ipso gGmbH',
    description: 'Rethink and reimplement Ipso Care / TALK video counseling',
    company: '🤝 curahub',
    challenge: 'Time pressure meets reimplementation meets existing system that has grown over time'
  }
]
</script>

<template>

  <h1 class="text-center text-5xl font-bold text-slate-400 py-32">Yearly retro 2022</h1>

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

    <h2 class="text-center text-4xl mb-16">Top projects in 2022</h2>

    <div class="flex justify-center">
      <div class="flex mx-auto w-full items-center justify-center">

        <ul class="space-y-8">
          <li class="relative border border-slate-700 drop-shadow-2xl
        shadow-lg bg-slate-900
        rounded-lg" v-for="project in topProjects">
            <div class="
          absolute
          -top-px
          left-20
          right-11
          h-px
          bg-gradient-to-r
          from-sky-300/0
          via-sky-300/70
          to-sky-300/0
        "></div>
            <div
              class="select-none cursor-pointer flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div class="flex-1 pl-1 mr-16">
                <div class="font-bold text-slate-300">{{ project.name }}</div>
                <div class="text-lg text-slate-400">{{ project.timeSpent }} h</div>
              </div>
              <div class="text-slate-500 font-medium text-sm">{{ project.company }}</div>
            </div>
            <div class="
          absolute
          -bottom-px
          left-11
          right-20
          h-px
          bg-gradient-to-r
          from-blue-400/0
          via-blue-400
          to-blue-400/0
        "></div>
          </li>

        </ul>

      </div>
    </div>

    <h2 class="text-center text-4xl mt-24 mb-16">Sneack Peaking 2023</h2>

    <div class="relative flex flex-col flex-wrap items-center p-8 bg-opacity-75" style="cursor: auto;">
      <span
        class="absolute px-3 py-1 text-xs font-medium text-white bg-opacity-25 rounded-full bg-gradient-to-r from-pink-500 to-red-400 -top-3 rotate-[-8deg]">There
        will be a new webhub member in 2023.</span>
    </div>

    <div class="flex justify-center">

      <div class="flex mx-auto w-full items-center justify-center">

        <ul class="space-y-8">
          <li class="relative border border-slate-700 drop-shadow-2xl
        shadow-lg bg-slate-900
        rounded-lg" v-for="task in upcomingTasks">
            <div class="
          absolute
          -top-px
          left-20
          right-11
          h-px
          bg-gradient-to-r
          from-sky-300/0
          via-sky-300/70
          to-sky-300/0
        "></div>
            <div
              class="select-none cursor-pointer flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div class="flex-1 pl-1 mr-16">
                <div class="font-bold text-slate-300"><span class="font-light">{{ task.client }}</span> - {{ task.name }}
                </div>
                <div class="text-lg text-slate-400">Task: {{ task.description }}</div>
                <div class="text-lg text-slate-400">Challenge: {{ task.challenge }}</div>
              </div>
              <div class="text-slate-500 font-medium text-sm">{{ task.company }}</div>
            </div>
            <div class="
          absolute
          -bottom-px
          left-11
          right-20
          h-px
          bg-gradient-to-r
          from-blue-400/0
          via-blue-400
          to-blue-400/0
        "></div>
          </li>

        </ul>

      </div>
    </div>

    <div class="relative flex flex-col flex-wrap items-center p-8" style="cursor: auto;">
      <span
        class="absolute px-3 py-1 text-xs font-medium text-black rounded-full bg-gradient-to-r from-blue-500 via-sky-300 to-green-400 -top-3 ">Inge
        will try join us for a short Ipso gGmbH intro, today. ETA: 17:00h!</span>
    </div>

    <div class="flex justify-center mt-64">
      <img class="max-w-xl opacity-60" src="/img/santa-2.png" alt="">
    </div>

  </div>
</template>
