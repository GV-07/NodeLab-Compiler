import { TutorialTopic } from './cssTutorialsData';

export const ANIMEJS_TOPICS: TutorialTopic[] = [
  {
    id: 'animejs-intro',
    title: 'Anime.js Intro',
    description: 'Understand the core concepts of Anime.js, a lightweight JavaScript animation library.',
    explanation: [
      'Anime.js is a powerful JavaScript library that works with CSS properties, SVG, DOM attributes, and JS objects.',
      'It allows creating smooth, complex transitions with minimal code.',
      'To use it, import the library and pass target elements along with transition parameters.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
</head>
<body class="p-8">
  <div class="box bg-blue-500 w-16 h-16 rounded"></div>
  <script>
    // Simple infinite loop animation
    anime({
      targets: '.box',
      translateX: 250,
      rotate: '1turn',
      duration: 2000,
      loop: true
    });
  </script>
</body>
</html>`,
    languageId: 'html'
  },
  {
    id: 'animejs-targets',
    title: 'Anime.js Targets (CSS, DOM, JavaScript Objects)',
    description: 'Defining which elements or values Anime.js should target for animations.',
    explanation: [
      'Targets can be CSS selectors (like ".item", "#box"), DOM elements, node lists, or plain JS objects.',
      'You can target multiple items simultaneously by passing an array of selectors or elements.',
      'Animating plain JS objects lets you transition numerical values smoothly before rendering them in other contexts.'
    ],
    code: `// Animating values in a plain JS object
const battery = { charged: '0%' };

anime({
  targets: battery,
  charged: '100%',
  round: 1, // Round the values to integer steps
  easing: 'linear',
  update: function() {
    console.log("Charging status:", battery.charged);
  }
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'animejs-properties',
    title: 'Anime.js Visual Properties',
    description: 'Animating CSS styles, transforms, SVG paths, and custom attributes.',
    explanation: [
      'Anime.js can animate standard CSS properties (opacity, backgroundColor, borderRadius).',
      'Transforms like scale, rotate, and skew are highly optimized and animate smoothly.',
      'You can also animate DOM attributes directly, like the value of a progress bar.'
    ],
    code: `anime({
  targets: '.ball',
  scale: [1, 1.5], // Scale from 1 to 1.5
  borderRadius: ['0%', '50%'], // Transition square to circle
  backgroundColor: '#ef4444',
  duration: 1500,
  direction: 'alternate',
  loop: true
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'animejs-timing',
    title: 'Anime.js Timing & Easing Parameters',
    description: 'Configuring durations, delays, and mathematical easing curves.',
    explanation: [
      'The duration parameter defines the total animation runtime in milliseconds.',
      'The delay parameter can stagger start times, especially when animating lists of sibling elements.',
      'The easing parameter defines acceleration profiles, like easeOutQuad, easeInOutElastic, or custom cubic-bezier curves.'
    ],
    code: `anime({
  targets: '.staggered-list li',
  translateX: 100,
  delay: anime.stagger(100), // Stagger the elements start times by 100ms
  duration: 800,
  easing: 'easeOutElastic(1, .5)'
});`,
    languageId: 'javascript_prog'
  },
  {
    id: 'animejs-playback',
    title: 'Anime.js Playback Control',
    description: 'Triggering pause, play, restart, and reverse controls programmatically.',
    explanation: [
      'Anime.js returns an animation instance object when called.',
      'You can call instance methods like .play(), .pause(), .restart(), and .reverse() to control flow.',
      'This makes it exceptionally easy to bind custom layout buttons to initiate or halt animations.'
    ],
    code: `const anim = anime({
  targets: '.shuttle',
  translateX: 500,
  autoplay: false // Prevent immediate start on load
});

document.querySelector('#playBtn').addEventListener('click', anim.play);
document.querySelector('#pauseBtn').addEventListener('click', anim.pause);`,
    languageId: 'javascript_prog'
  },
  {
    id: 'animejs-timelines',
    title: 'Anime.js Timeline Sequences',
    description: 'Chaining multiple complex animation sequences together in order.',
    explanation: [
      'Timelines allow coordinating multiple independent animation sequences.',
      'By default, animations added to a timeline execute one after another in chronological order.',
      'You can specify precise offsets using relative or absolute time indicators.'
    ],
    code: `// Create a timeline sequence
const tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750
});

tl.add({ targets: '.bar', scaleY: 2 })
  .add({ targets: '.bar', rotate: 90 }, '+=100') // Wait 100ms before starting
  .add({ targets: '.bar', opacity: 0 });`,
    languageId: 'javascript_prog'
  },
  {
    id: 'animejs-callbacks',
    title: 'Anime.js Callback Hooks',
    description: 'Registering handlers to trigger actions at start, update, loop, and complete phases.',
    explanation: [
      'Callback hooks let you execute custom functions at distinct animation cycles.',
      'Common callbacks include begin (start), update (on every frame), and complete (finished).',
      'The callback receives details like progress percentage, current value updates, and durations.'
    ],
    code: `anime({
  targets: '.runner',
  translateX: 300,
  begin: function(anim) {
    console.log('Sprint started! Active:', anim.began);
  },
  complete: function(anim) {
    console.log('Race finished! Completed:', anim.completed);
  }
});`,
    languageId: 'javascript_prog'
  }
];
