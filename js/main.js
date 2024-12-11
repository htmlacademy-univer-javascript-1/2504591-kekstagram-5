import {renderPictures} from './render.js';
import { openForm } from './form.js';
import { scaleImg } from './scale.js';
import { createSlider } from './slider.js';
import { fentchData } from './api.js';


fentchData('GET', renderPictures);
openForm();
scaleImg();
createSlider();
