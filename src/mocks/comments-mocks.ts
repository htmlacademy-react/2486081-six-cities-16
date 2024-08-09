import { commentsType } from '../types/comments-types';

export const CommentsMocks: commentsType[] = [
  {
    id: '3cfcc44e-51d5-452d-8cfb-a93665c5e3f1',
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2024-07-18T21:00:00.031Z',
    rating: 1,
    user: {
      name: 'Sophie',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/4.jpg',
      isPro: true
    }
  },
  {
    id: '57785769-d252-4712-8f39-dbf797b7feb2',
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2024-07-15T21:00:00.031Z',
    rating: 4,
    user: {
      name: 'Jack',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: true
    }
  },
  {
    id: '179f049f-5517-4a85-9e2f-cbb5eb2ba70c',
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: '2024-07-20T21:00:00.031Z',
    rating: 3,
    user: {
      name: 'Zak',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/1.jpg',
      isPro: false
    }
  },
  {
    id: '702f26be-5666-4a53-92f6-a3c2ef1d1252',
    comment: 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2024-07-17T21:00:00.031Z',
    rating: 2,
    user: {
      name: 'Corey',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/3.jpg',
      isPro: false
    }
  },
  {
    id: 'bdc484c3-0441-41b7-b27b-cccb41b3258d',
    comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2024-07-17T21:00:00.031Z',
    rating: 5,
    user: {
      name: 'Isaac',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/avatar/8.jpg',
      isPro: true
    }
  }
];
