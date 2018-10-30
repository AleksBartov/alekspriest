import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import HeaderFixation from './modules/HeaderFixation';
import HiddenMenu from './modules/HiddenMenu';

new HeaderFixation();
new HiddenMenu();

$('.hiddenMenu__list a').smoothScroll();