import type { Elections, Navigation, SiteMeta } from './types'

export const SITE_META: SiteMeta = {
  title: 'Maine Ballot',
  description: 'The goal of MaineBallot.org is to provide concise, non-partisan information to make it easy to understand the ballot questions pending in Maine',
}

export const NAVIGATION: Navigation = [
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
]

export const ELECTIONS: Elections = {
  upcoming: {
    date: '2024-06-11',
    title: 'State Primary Election',
  },
  past: [
    { date: '2024-03-05' },
    { date: '2016-11-08' },
    { date: '2017-06-13' },
    { date: '2017-11-07' },
    { date: '2018-06-12' },
    { date: '2018-11-06' },
    { date: '2019-11-05' },
    { date: '2020-11-03' },
    { date: '2020-07-14' },
    { date: '2020-03-03' },
    { date: '2021-11-02' },
    { date: '2021-06-08' },
    { date: '2022-11-08' },
    { date: '2022-06-14' },
    { date: '2023-11-07' },
    { date: '2023-06-13' },
  ],
}
