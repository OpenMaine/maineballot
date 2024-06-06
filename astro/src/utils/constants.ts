export const GLOBAL = {
  locale: 'en-US',
  title: 'Maine Ballot',
  title_separator: '-',
  name: 'Shannon McHarg',
  description: 'Ballot questions for Maine elections.',
  url: 'https://maineballot.org',
  baseurl: null,
  repository: null,
  teaser: null,
  words_per_minute: 200,
  collections: {
    'local-archive': {
      output: true,
    },
    'candidates-archive': {
      output: true,
    },
  },
  author: {
    name: 'Shannon McHarg',
    avatar: null,
    bio: 'A user experience designer living in Maine who wants to make it easier to understand what you\'ve voting for or against.',
    location: 'Brunswick, Maine',
    email: null,
    links: [
      {
        label: 'Email',
        icon: 'fas fa-fw fa-envelope-square',
      },
      {
        label: 'Website',
        icon: 'fas fa-fw fa-link',
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
      },
      {
        label: 'GitHub',
        icon: 'fab fa-fw fa-github',
      },
    ],
  },
  footer: null,
}

export const SITE_META = {
  siteTitle: 'Maine Ballot',
  description: 'The goal of MaineBallot.org is to provide concise, non-partisan information to make it easy to understand the ballot questions pending in Maine',
}

export const NAVIGATION = {
  main: [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'How to vote in Maine',
      url: '/vote/',
    },
    {
      title: 'Archive',
      url: '/archive/',
    },
    {
      title: 'How bonds work',
      url: '/bonds/',
    },
    {
      title: 'About',
      url: '/about/',
    },
  ],
}

export const ELECTIONS = {
  currentElectionDate: '2024-03-05',
  pastElectionDates: {
    2016: ['2016-11-08'],
    2017: ['2017-06-13', '2017-11-07'],
    2018: ['2018-06-12', '2018-11-06'],
    2019: ['2019-11-05'],
    2020: ['2020-11-03', '2020-07-14', '2020-03-03'],
    2021: ['2021-11-02', '2021-06-08'],
    2022: ['2022-11-08', '2022-06-14'],
    2023: ['2023-11-07', '2023-06-13'],
  },
}
