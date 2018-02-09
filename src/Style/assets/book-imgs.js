import bookXs from './images/book-xs.jpeg';
import bookSm from './images/book-sm.jpeg';
import bookMd from './images/book-md.jpeg';
import bookLg from './images/book-lg.jpeg';

export const bookImage = {
  sources: [
    {
      srcset: bookLg,
      media: "(min-width: 1600px)",
      type: "image/jpeg"
    },
    {
      srcset: bookMd,
      media: "(min-width: 1200px)",
      type: "image/jpeg"
    },
    {
      srcset: bookSm,
      media: "(min-width: 600px)",
      type: "image/jpeg"
    },
    {
      srcset: bookXs,
      media: "(min-width: 1px)",
      type: "image/jpeg"
    }

  ],
  credit: "image credit",
  src: bookSm,
  alt: 'Book banner'
};
