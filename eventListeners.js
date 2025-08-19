const buttonTwo = document.querySelector('.btn-2');

buttonTwo.addEventListener('click', function() {
  alert('I love Javascript also');
  console.log('This is the event target:', this);
});

buttonTwo.addEventListener('click', () => {
  alert('Anonymous');
  console.log('This is the event target:', this);
});

buttonTwo.addEventListener('click', (event) => {
    console.log('This is the event target:', event.target);
});

const buttonOne = document.querySelector('.btn-1');

function changeBackgroundColor(event) {
  event.target.style.backgroundColor = 'black';
}

buttonOne.addEventListener('mouseover', changeBackgroundColor);

buttonOne.addEventListener('mouseout', function(event) {
  event.target.style.backgroundColor = '';
});

// Below is the list provided by AI.

// ==================== MOUSE EVENTS ====================
// 1. click              // very common
// 2. dblclick           // common
// 3. contextmenu        // common
// 4. mousedown          // common
// 5. mouseup            // common
// 6. mouseover          // very common
// 7. mouseout           // very common
// 8. mouseenter         // common
// 9. mouseleave         // common
// 10. mousemove         // very common
// 11. wheel             // common

// ==================== KEYBOARD EVENTS ====================
// 12. keydown           // very common
// 13. keyup             // very common
// 14. keypress          // rare (deprecated, use keydown/keyup instead)

// ==================== FORM & INPUT EVENTS ====================
// 15. focus             // very common
// 16. blur              // very common
// 17. focusin           // less common
// 18. focusout          // less common
// 19. change            // very common
// 20. input             // very common
// 21. beforeinput       // less common
// 22. submit            // very common
// 23. reset             // less common
// 24. invalid           // less common
// 25. search            // rare
// 26. select            // common

// ==================== CLIPBOARD EVENTS ====================
// 27. copy              // common
// 28. cut               // less common
// 29. paste             // common

// ==================== DRAG & DROP EVENTS ====================
// 30. drag              // common
// 31. dragstart         // common
// 32. dragend           // common
// 33. dragenter         // less common
// 34. dragleave         // less common
// 35. dragover          // common
// 36. drop              // very common (for file uploads, etc.)

// ==================== TOUCH EVENTS (mobile/tablet) ====================
// 37. touchstart        // common (mobile apps)
// 38. touchend          // common
// 39. touchmove         // common
// 40. touchcancel       // less common

// ==================== POINTER EVENTS ====================
// 41. pointerdown       // common
// 42. pointerup         // common
// 43. pointermove       // common
// 44. pointerenter      // less common
// 45. pointerleave      // less common
// 46. pointerover       // less common
// 47. pointerout        // less common
// 48. gotpointercapture // rare
// 49. lostpointercapture// rare

// ==================== WINDOW / DOCUMENT EVENTS ====================
// 50. load              // very common
// 51. DOMContentLoaded  // very common
// 52. resize            // very common
// 53. scroll            // very common
// 54. error             // common
// 55. beforeunload      // common
// 56. unload            // less common
// 57. hashchange        // common (SPAs / routing)
// 58. popstate          // common (SPAs / routing)
// 59. pageshow          // rare
// 60. pagehide          // rare
// 61. visibilitychange  // common (pause/resume apps)
// 62. online            // less common
// 63. offline           // less common
// 64. storage           // less common
// 65. message           // common (cross-document / web workers)

// ==================== MEDIA EVENTS (audio/video) ====================
// 66. play              // common
// 67. pause             // very common
// 68. playing           // less common
// 69. ended             // very common
// 70. volumechange      // less common
// 71. timeupdate        // very common (progress bars)
// 72. seeked            // less common
// 73. seeking           // less common
// 74. canplay           // common
// 75. canplaythrough    // less common
// 76. waiting           // less common
// 77. stalled           // rare
// 78. suspend           // rare
// 79. durationchange    // common
// 80. ratechange        // rare
// 81. progress          // less common
// 82. loadeddata        // less common
// 83. loadedmetadata    // common
// 84. abort             // rare
// 85. emptied           // rare

// ==================== ANIMATION & TRANSITION EVENTS ====================
// 86. animationstart    // common
// 87. animationend      // very common
// 88. animationiteration// less common
// 89. transitionstart   // less common
// 90. transitionend     // very common
// 91. transitioncancel  // rare
// 92. transitionrun     // rare

// ==================== OTHER / MISC EVENTS ====================
// 93. pointerlockchange // rare
// 94. pointerlockerror  // rare
// 95. fullscreenchange  // common
// 96. fullscreenerror   // rare
// 97. compositionstart  // less common (IME input, e.g. Chinese/Japanese typing)
// 98. compositionupdate // less common
// 99. compositionend    // less common
// 100. orientationchange// common (mobile/tablet screen rotation)
