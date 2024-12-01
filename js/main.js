import {renderSimularPictures} from './render.js';
import { openForm } from './form.js';
import { scaleImg } from './scale.js';
import { createSlider } from './slider.js';
import { getData } from './api.js';
getData(renderSimularPictures);
openForm();
scaleImg();
createSlider();
