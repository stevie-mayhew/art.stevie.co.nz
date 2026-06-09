export type ContentBlock =
  | { type: 'text'; body: string }
  | { type: 'image-full'; src: string; alt: string }
  | { type: 'image-inset'; src: string; alt: string; caption: string; align?: 'left' | 'right' };

export interface PlayPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: ContentBlock[];
}

export const posts: PlayPost[] = [
  {
    slug: 'tones-by-halves',
    title: 'Tones by Halves',
    date: '2026-05-20',
    excerpt: 'What happens when you take photos, turn them into dots and run them through a press.',
    coverImage: '/play/print-photos/toby-photo.jpg',
    content: [
      {
        type: 'text',
        body: `I've been trying to make photos into prints for quite a while now. While there are definitely easier ways to do it than using an etching press and ink, I\'m pretty dumb and like punishment. My inkjet printer is often out of ink, too.`,
      },
      {
        type: 'image-full',
        src: '/play/print-photos/photo-tests.jpg',
        alt: 'Testing out photo prints at home with the rolling pin',
      },
      {
        type: 'text',
        body: `The thing about photos is that they have a lot of information in them. Colour, hue, saturation and tone all go out the window when you ink up a block with a single colour.\n\n`,
      },
      {
        type: 'image-inset',
        src: '/play/print-photos/toby-etching-photo.jpg',
        alt: 'Although it doesn\'t have much colour, there is a lot of information in this photo',
        caption: 'Toby hanging out in his blanket.',
        align: 'right',
      },
      {
        type: 'text',
        body: `I thought it would be a good idea to try and do some photos of our dog, Toby, who already comes in black and white.\n\n This was probably a bad idea, as the subtlety of his coat is quite hard to capture.\n\nThe first way I tried to capture him was through a process called halftoning, which imulates continuous-tone images using tiny dots of varying size, spacing, or density. Small dots are easy to engrave with a laser, so away I went.`,
      },
      {
        type: 'image-full',
        src: '/play/print-photos/toby-etching-halftone.jpg',
        alt: 'A halftone print of Toby hanging out in his blanket',
      },
      {
        type: 'image-inset',
        src: '/play/print-photos/toby-block.jpg',
        alt: 'The acrylic block used for all the prints in the session',
        caption: 'A test block itself after a few prints had been made.',
        align: 'left',
      },
      {
        type: 'text',
        body: `This process works okay, but its quite expensive to produce the blocks for printing and is very time consuming as the laser cuts thousands of tiny dots. \n\nThere is also the problem of the grid showing up in the output, which I can likely solve with a better halftoning algorithm. Annoyingly, tiny dots have a tendency to break off after a being printed a few times, even when I used acrylic for the blocks. Nothings forever in printmaking, that\'s for sure.\n\nI'll probably keep playing with this process, and working on ways to make it both cheaper and more effective.`,
      },
    ],
  },
];
