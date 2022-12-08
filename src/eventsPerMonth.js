const eventsPerMonth = {
  Jan: [
    {
      name: 'obimachbar.de',
      client: 'Fork Unstable Media',
      company: 'webhub',
      humans: [],
      description: '',
      link: '',
    },
    {
      name: 'CDR (Corporate Digital Responsibility)',
      client:
        'Bundesministerium für Umwelt, Naturschutz, nukleare Sicherheit und Verbraucherschutz',
      company: 'webhub',
    },
    {
      name: 'AOK Schwanger v6.11',
      client: 'AOK Nordost - Die Gesundheitskasse',
      description:
        'Feature: Hebammensuche | Mission: Get rid of technical debt',
      company: 'Curamatik',
      humans: ['Stephen', 'Oleksii'],
      timeSpent: 222,
    },
    {
      name: '🤝 My7steps App',
      client: 'Ipso Healthcare GmbH',
      company: 'curahub',
      humans: ['Sebastian', 'Johannes', 'Niklas'],
      description:
        'Prepare Re-Design and Unified Registration, Kick-Off Informationssicherheitsmanagementsystem (! ISMS) Implementation 🛡️',
      link: '',
      timeSpent: 92,
    },
  ],
  Feb: [
    {
      name: 'CDR (Corporate Digital Responsibility)',
      client:
        'Bundesministerium für Umwelt, Naturschutz, nukleare Sicherheit und Verbraucherschutz',
      company: 'webhub',
    },
    {
      name: 'Checkpoint-S',
      client: 'HS Merseburg',
      company: 'Curamatik',
      description: 'This is Sparta! - Vorbereitung Übergabe an neuen Betreiber',
      humans: ['Stephen', 'Sebastian'],
      timeSpent: 19,
    },
    {
      name: 'Checkpoint4U',
      client: 'q.s+ e.V.',
      company: 'Curamatik',
      description: 'Akquise - Concept Work and Prototyping',
      humans: ['Stephen'],
    },
    {
      name: '🤝 My7steps App',
      client: 'Ipso Healthcare GmbH',
      company: 'curahub',
      humans: ['Sebastian', 'Johannes', 'Niklas', 'Marten'],
      description:
        '2FA, Data Portability, Redesign, Unified Registration, Talk-Integration, Counselor Availability | SAMD-Release im neuen Design 🚀',
      link: '',
      timeSpent: 413,
    },
    {
      name: 'AOK Schwanger',
      client: 'AOK Nordost - Die Gesundheitskasse',
      company: 'Curamatik',
      description:
        'Issue: Auftauchende Benachrichtigungen bei Fehl- oder Totgeburt 💩💩💩💩 😞 | more technical debt',
      humans: ['Oleksii', 'Stephen'],
    },
    {
      name: '🤝 VHS Lese-Trainer',
      client: 'DVV e.V.',
      company: 'curahub',
      description: '👽 Internal start of project 👽',
      humans: ['Sebastian', 'Stephen', 'Johannes', 'Niklas'],
    },
  ],
  March: [
    {
      name: 'Prof. Schumann',
      description: 'Gated Content',
      company: 'webhub',
    },
    {
      name: '🤝 My7steps App',
      client: 'Ipso Healthcare GmbH',
      company: 'curahub',
      humans: ['Sebastian', 'Johannes', 'Niklas', 'Marten', 'Stephen'],
      description:
        'Neuer Client-Counselor-Matching-Algorithmus, Super-Counselors 💪 | Stephen lernt den Freigabeprozess kennen und lieben ❤️‍🩹',
      link: '',
      timeSpent: 90,
    },
    {
      name: 'plau-handball.de',
      client: '(gemeinnützig)',
      company: 'webhub',
    },
    {
      name: 'Check4U',
      client: 'q.s+ e.V.',
      description: 'Implement v1 of Tec Demo 🚀',
    },
    {
      name: 'AOK Schwanger',
      client: 'AOK Nordost - Die Gesundheitskasse',
      company: 'Curamatik',
      description:
        'iOS receives some reimplementation (10 years later), progress for v7 contract (customer struggles with contract)',
      humans: ['Oleksii', 'Stephen', 'Sebastian'],
      timeSpent: 101,
    },
    {
      name: '🤝 VHS Lese-Trainer',
      client: 'DVV e.V.',
      company: 'curahub',
      description:
        'KICK-OFF !!! Die anderen DL sind nicht da 😱 😱 😱 ... KICK-OFF 2 ?',
      humans: ['Sebastian', 'Stephen', 'Johannes', 'Niklas'],
    },
    {
      name: 'Emily-AR-App',
      company: 'Curamatik',
      description: 'Lets try out something cool - AR baby in the belly!',
    },
  ],
  April: [
    {
      name: 'übernachten-in-rostock.de',
      company: 'webhub',
    },
    {
      name: '🤝 VHS Lese-Trainer',
      client: 'DVV e.V.',
      company: 'curahub',
      description: 'quite slow dive into the project - partners missing',
    },
    {
      name: 'psz-rostock.de',
      company: 'webhub',
      description:
        '(gemeinnützig) Relaunch psz-rostock.de, Psychosoziales Zentrum Rostock für Geflüchtete',
    },
    {
      name: 'Check4U',
      client: 'q.s+ e.V.',
      description:
        'Hihi, customer requests extensions and has several new ideas',
    },
    {
      name: 'AOK Schwanger',
      client: 'AOK Nordost - Die Gesundheitskasse',
      company: 'Curamatik',
      description:
        'more improvements | more improvements | more improvemnts - *NEW MEMBER*',
      humans: ['Oleksii', 'Stephen', 'Siddharth'],
      timeSpent: 125,
    },
    {
      name: '🤝 My7steps App',
      client: 'Ipso Healthcare GmbH',
      company: 'curahub',
      humans: ['Sebastian', 'Johannes', 'Niklas', 'Marten', 'Stephen'],
      description: '????',
      link: '',
      timeSpent: 60,
    },
  ],
  May: [
    {
      name: 'Relaunch webhub.de 🥳🍕🚀😮‍💨',
      company: 'webhub',
    },
    {
      name: '🤝 Launch netkoh.de 🚀',
      company: 'curahub',
      client: 'Universtitätsmedizin Greifswald funded by InnoFond',
      description:
        'Quite sad to say: netkoh.de is still not released and blocked through http auth...',
    },
    {
      name: 'wfb2021.wiro.de',
      company: 'webhub',
      description: 'WIRO Wohnfühlbericht',
    },
    {
      name: '🤝 VHS Lese-Trainer',
      client: 'DVV e.V.',
      company: 'curahub',
      description:
        'Proof of Concept, Style Guide 🧑‍🎨, Rough UI and Task Flow',
    },
    {
      name: 'Check4U',
      client: 'q.s+ e.V.',
      description:
        'Adding a lot of metrics and statistics ... still not finished',
    },
    {
      name: 'TytoCare',
      client: 'AOK Nordost - Die Gesundheitskasse',
      company: 'Curamatik',
      description:
        '🧑🏻‍💼🧑🏻‍💼🧑🏻‍💼 - Expert mode ON - Finished privacy assessment of TytoCare, mission completed successfully, TytoCare cancelled ✨✨✨',
    },
  ],
  June: [
    {
      name: 'INDICA',
      client: 'Hoschschule Merseburg',
      company: 'webhub',
      description: '🚬😁',
    },
    {
      name: '🤝 My7steps App',
      client: 'Ipso Healthcare GmbH',
      company: 'curahub',
      description:
        'Release v1.1. 🚀🚀🚀 &&& Sebastian back from parental leave --> Crunch Time for ISMS implementation starts here',
      link: 'samd.my7steps.org',
    },
    {
      name: '🤝 VHS Lese-Trainer',
      client: 'DVV e.V.',
      company: 'curahub',
      description: 'Learner Registration, OpenAPI, Chat-Messaging',
    },
  ],
  July: [
    {
      name: '🤝 VHS Lese-Trainer',
      client: 'DVV e.V.',
      company: 'curahub',
      description: 'Roles und Permissions, Deployment Pipelines, Courses',
    },
    {
      name: 'CDR (Corporate Digital Responsibility)',
      company: 'webhub',
      description: 'Cyber-Attack 😱',
    },
    {
      name: 'emodrive.de 🔌🚘',
      company: 'webhub',
    },
    {
      name: 'kampf-der-doerfer.de 🐉🚣',
      company: 'webhub',
      description: '(gemeinnützig)',
    },
    {
      name: 'Check4U',
      client: 'q.s+ e.V.',
      description:
        'Google IO and advanced training for Siddharth - getting up to pace',
      humans: ['Stephen', 'Siddharth'],
    },
  ],
  August: [
    {
      name: 'NEBoD (New European Bauhaus on the Danube)',
      client: 'Stiftung Hochschule für Gestaltung Ulm',
      company: 'webhub',
    },
    {
      name: 'PowerUp: Urlaubs- und Personalplaner',
      client: 'Own Product?',
      company: 'webhub',
    },
    {
      name: 'Prof. Schumann: Craft x Hubspot-Integration',
      company: 'webhub',
    },
    {
      name: '🛡️🛡️🛡️ Ipso Healthcare - ISO 27001 TüV Audit 🛡️🛡️🛡️',
      client: 'Ipso Healthcare GmbH',
      company: 'Curamatik',
      description:
        '🦺 After > 6 month of work we survived a 2.5 day audit and received the ISO/IEC 27001:2013 certificate!!!',
    },
  ],
  September:[
    {
      name: 'HFG Cyber-Attack 😱',
      company: 'webhub'
    },
    {
      name: 'AOK Schwanger v7.0',
      client: 'AOK Nordost - Die Gesundheitskasse',
      company: 'Curamatik',
      description: 'Redesign Info-Area'
    },
    {
      name: '🤝 VHS Lese-Trainer',
      client: 'DVV e.V.',
      company: 'curahub',
      description: 'DB Schema für Übungseinheiten, Courses, Messaging API | Kick-Off Web-Front-End',
    },
    {
      name: 'PowerUp: Abteilungen und Mandantenfähigkeit',
      company: 'webhub'
    },
    {
      name: '🤝 My7steps App - DiGA 🚀 ',
      client: 'Ipso Healthcare GmbH',
      company: 'curahub',
      description: 'Table of all processed data according to § 2 Abs. 1 Nr. 21a DiGAV & ISO Post Processing & Testing of Nima -> FAIL'
    },
    {
      name: '🧑🏻‍💼 Rolls Royce Germany - PO und Spec für Toolbox ✨',
      client: 'Rolls Royce Germany GmbH',
      company: 'Curamatik',
      humans: ["Stephen"]
    },
    {
      name: '🧑🏻‍💼 EDBTL (Evangelischer Diakonissenstift Berlin Teltow Lenin) - IT-Leistungsverzeichnis ✨',
      company: 'Curamatik',
      description: 'Inventur! Die IT-Abteilung möchte wissen, was sie so an IT haben. Die ganze Sache gestaltet sich ... schwierig. :)',
      humans: ["Sebastian", "Andreas"]
    }

  ],
  Oktober:[
    {
      name: '🤝 My7steps App - DiGA 🚀 ',
      client: 'Ipso Healthcare GmbH',
      company: 'curahub',
      description: 'Release der DiGA-Version von My7steps App',
      link: 'diga.my7steps.org'
    },
    {
      name: 'heynaht.de 🧵🪡',
      company: 'webhub'
    },
    {
      name: '🤝 M7S --> Divide & Conquer',
      client: 'Ipso Healthcare GmbH & Ipso gGmbH',
      description: 'Split von My7steps App in DiGA, SAMD und SABA'
    },
    {
      name: 'PowerUp - erster Sale bei Metallbau Kettner 🚀🥂',
      company: 'webhub'
    },
    {
      name: '🤝 VHS Lese-Trainer',
      client: 'DVV e.V.',
      company: 'curahub',
      description: 'Courses -> Final, Messaging -> Final, Dashboard -> Final - kind of',
    },
  ],
  November:[
    {
      name: '🤝 DiGA goes brrrrrr',
      client: 'Ipso Healthcare GmbH',
      company: 'curahub',
      description: 'DiGA-Zulassungsantrag gestellt 😱'
    },
    {
      name: '🤝 VHS Lese-Trainer',
      client: 'DVV e.V.',
      company: 'curahub',
      description: 'Ablauf in Übungseinheiten festgezurrt & Click-Prototyp erstellt, übergeben, diskutiert',
    },
    {
      name: '🤝 saba',
      client: 'Ipso gGmbH',
      company: 'curahub',
      description: 'ReDesign begonnen, WS mit Kunden zu saba und TALk-Reimplmentierung'
    },
    {
      name: 'tedom.de',
      company: 'webhub',
      client: 'TEDOM Systems & Solutions GmbH'
    },
    {
      name: 'Relaunch bvmw.de',
      company: 'webhub',
      description: 'Bundesverband mittelständische Wirtschaft, Fork Unstbale Media'
    }
  ],
  December:[
    {
      name: '🤝 VHS Lese-Trainer',
      client: 'DVV e.V.',
      company: 'curahub',
      description: 'Los 2 - SpeechRecognition: API-Anforderungen und Entwurf gepushed, Reading Skill Evaluator gebaut',
    },
    {
      name: '🤝 saba',
      client: 'Ipso gGmbH',
      company: 'curahub',
      description: 'Fork erstellt, Designs nach StoryBook ausgelagert'
    },
    {
      name: '🤝 My7steps App',
      client: 'Ipso Healthcare GmbH',
      company: 'curahub',
      description: 'MiO DIGA Toolkit - diesen Monat kann unsere App noch mit ePAs sprechen'
    },
    {
      name: '🤰 AOK Schwanger 🤰',
      client: 'AOK Nordost - Die Gesundheitskasse',
      company: 'Curamatik',
      description: 'Erweiterung der Entwicklungsinfos - das größte Content-Update seit Jahren'
    },
    {
      name: 'beerride.de',
      client: 'MARTONOS!',
      company: 'webhub',
      description: 'Mit dem Veloziped zur Krugwirtschaft! 🍻🚴‍♂️'
    },
    {
      name: 'CDR',
      company: 'webhub',
      description: '🚀 Release für Berichtsjahr 2023' 
    },
    {
      name: 'Charles baut seinen neuen, elektrischen Tisch auf!',
      company: 'webhub',
      description: 'We welcome Charles as new webhub member!!!'
    }
  ]
};

export default eventsPerMonth;
