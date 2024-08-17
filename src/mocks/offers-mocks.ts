import { OffersTypes } from '../types/offers-types';

export const offersMocks: OffersTypes[] = [
  {
    id: 'c8926a0e-aefb-441f-9de6-6d9a94f866bd',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 362,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.8,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: ['Heating', 'Baby seat', 'Coffee machine', 'Cabel TV'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: false
    },
    images: ['https://16.design.htmlacademy.pro/static/hotel/1.jpg', 'https://16.design.htmlacademy.pro/static/hotel/2.jpg' , 'https://16.design.htmlacademy.pro/static/hotel/3.jpg' ,'https://16.design.htmlacademy.pro/static/hotel/4.jpg','https://16.design.htmlacademy.pro/static/hotel/5.jpg', 'https://16.design.htmlacademy.pro/static/hotel/6.jpg'],
    maxAdults: 1
  },
  {
    id: '241d89fd-7aea-4737-8e68-31c8a064a9ef',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 300,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 4,
    goods: ['Heating', 'Baby seat', 'Coffee machine', 'Cabel TV', 'Fridge'],
    host: {
      name: 'Larry Taylor',
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: false
    },
    images: ['https://16.design.htmlacademy.pro/static/hotel/7.jpg', 'https://16.design.htmlacademy.pro/static/hotel/8.jpg' , 'https://16.design.htmlacademy.pro/static/hotel/9.jpg' ,'https://16.design.htmlacademy.pro/static/hotel/10.jpg','https://16.design.htmlacademy.pro/static/hotel/11.jpg', 'https://16.design.htmlacademy.pro/static/hotel/12.jpg'],
    maxAdults: 4
  },
  {
    id: 'ac502536-6f11-4da0-93f4-56fa75dbe971',
    title: 'Wood and stone place',
    type: 'room',
    price: 107,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.7,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: ['Heating', 'Washing machine', 'Towels'],
    host: {
      name: 'Robert Morgan',
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: true
    },
    images: ['https://16.design.htmlacademy.pro/static/hotel/12.jpg', 'https://16.design.htmlacademy.pro/static/hotel/13.jpg' , 'https://16.design.htmlacademy.pro/static/hotel/14.jpg' ,'https://16.design.htmlacademy.pro/static/hotel/15.jpg','https://16.design.htmlacademy.pro/static/hotel/16.jpg', 'https://16.design.htmlacademy.pro/static/hotel/17.jpg'],
    maxAdults: 3
  },
  {
    id: '2491ca2a-0427-4c4a-ba44-7576ab1d5bcb',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 465,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.5,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Heating', 'Heating', 'Heating', 'Heating', 'Heating'],
    host: {
      name: 'Richard Wells',
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: false
    },
    images: ['https://16.design.htmlacademy.pro/static/hotel/18.jpg', 'https://16.design.htmlacademy.pro/static/hotel/19.jpg' , 'https://16.design.htmlacademy.pro/static/hotel/20.jpg' ,'https://16.design.htmlacademy.pro/static/hotel/1.jpg','https://16.design.htmlacademy.pro/static/hotel/2.jpg', 'https://16.design.htmlacademy.pro/static/hotel/3.jpg'],
    maxAdults: 2
  },
  {
    id: '2491ca2a-0427-4c4a-ba44-7576ab1d5bcds',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 465,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358490,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.5,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Heating', 'Heating', 'Heating', 'Heating', 'Heating'],
    host: {
      name: 'Richard Wells',
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: false
    },
    images: ['https://16.design.htmlacademy.pro/static/hotel/18.jpg', 'https://16.design.htmlacademy.pro/static/hotel/19.jpg' , 'https://16.design.htmlacademy.pro/static/hotel/20.jpg' ,'https://16.design.htmlacademy.pro/static/hotel/1.jpg','https://16.design.htmlacademy.pro/static/hotel/2.jpg', 'https://16.design.htmlacademy.pro/static/hotel/3.jpg'],
    maxAdults: 2
  },
];
