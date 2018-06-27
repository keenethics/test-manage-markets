import { CHANGE_DISPLAY, SWITCH_IMAGES } from './types';

export const changeDisplay = displayCount => ({
  type: CHANGE_DISPLAY,
  displayCount,
});

export const switchImages = checked => ({
  type: SWITCH_IMAGES,
  checked,
});
