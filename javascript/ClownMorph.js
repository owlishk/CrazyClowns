//This file breaks the clown svgs into arrays and then loads them as separate parts. The "morphing" is dissolving one set of parts then replaceing it with the new parts. Complicated formatting and svg work to get it to work. Added "holder" script and div brackets to get holder class to work and to get overlapping affect when loading face parts.

//ALOT of brute force coding here that ultimately worked. Next go round would be to reduce brute force and do more elegant coding.



//===========happy clown======================

var happyclown = [];

//svg. added class to script for overlap of parts
happyclown[0] = '<svg width="500" height="500" viewBox="0 0 100 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;" >'

//head
happyclown[5] ='<g transform="matrix(1.496,0,0,1.2226,-44.0601,-12.3605)"><ellipse cx="62.874" cy="59.186" rx="23.559" ry="34.145" style="fill:white;stroke-width:0.73px;stroke:black;"/></g>';

//eyes
happyclown[1] = '<g transform="matrix(-3.23528e-16,1.7612,-1.30978,-2.40603e-16,135.368,10.4769)"><path d="M30.055,69.702C27.114,69.702 24.725,73.697 24.725,78.618C24.725,83.538 27.114,87.533 30.055,87.533C27.849,86.79 26.058,83.051 26.058,78.618C26.058,74.184 27.849,70.445 30.055,69.702Z" style="fill:black;stroke-width:0.64px;stroke:black;"/></g><g transform="matrix(-3.23528e-16,1.7612,-1.30978,-2.40603e-16,169.819,10.4769)"><path d="M30.055,69.702C27.114,69.702 24.725,73.697 24.725,78.618C24.725,83.538 27.114,87.533 30.055,87.533C27.849,86.79 26.058,83.051 26.058,78.618C26.058,74.184 27.849,70.445 30.055,69.702Z" style="fill:black;stroke-width:0.64px;stroke:black;"/></g><g transform="matrix(1,0,0,1.33603,-0.0229225,-33.1248)"><ellipse cx="33.287" cy="73.602" rx="6.548" ry="3.9" style="fill:none;stroke-width:0.85px;stroke:black;"/></g><g transform="matrix(1,0,0,1.54463,-3.29713,-53.6877)"><ellipse cx="36.561" cy="76.723" rx="3.274" ry="3.121" style="fill:black;stroke-width:0.77px;stroke:black;"/></g><g transform="matrix(1,0,0,1.23619,33.9978,-26.1657)"><ellipse cx="33.287" cy="73.602" rx="6.548" ry="3.9" style="fill:none;stroke-width:0.89px;stroke:black;"/></g><g transform="matrix(1,0,0,1.41987,30.8986,-44.5057)"><ellipse cx="36.561" cy="76.723" rx="3.274" ry="3.121" style="fill:black;stroke-width:0.81px;stroke:black;"/></g><g transform="matrix(-0.76504,2.46056e-16,-5.28411e-16,-1.64294,57.5937,220.539)"><path d="M31.299,83.732L32.936,91.372L29.662,91.372L31.299,83.732Z" style="fill:black;stroke-width:0.78px;stroke:black;"/></g><g transform="matrix(-0.929862,2.99067e-16,-5.6119e-16,-1.74486,96.5037,229.073)"><path d="M31.299,83.732L32.936,91.372L29.662,91.372L31.299,83.732Z" style="fill:black;stroke-width:0.72px;stroke:black;"/></g>';

//nose and mouth 
happyclown[2] = '<g transform="matrix(-1,3.21625e-16,-4.983e-16,-1.54932,99.5978,236.402)"><path d="M57.745,99.03C58.604,98.593 59.056,98.097 59.056,97.592C59.056,96.005 54.671,94.716 49.27,94.716C43.87,94.716 39.485,96.005 39.485,97.592C39.485,98.097 39.937,98.593 40.796,99.03L57.745,99.03Z" style="fill:rgb(205,40,40);"/></g><g transform="matrix(0.901801,0,0,0.778913,4.39159,19.0682)"><ellipse cx="50.938" cy="71.979" rx="7.113" ry="7.479" style="fill:rgb(205,40,40);"/></g><g transform="matrix(0.737271,0,0,0.5,14.6356,41.1541)"><ellipse cx="62.317" cy="83.637" rx="2.204" ry="2.677" style="fill:black;stroke-width:1.59px;stroke:black;"/></g><g transform="matrix(0.737271,0,0,0.5,-5.40243,41.1541)"><ellipse cx="62.317" cy="83.637" rx="2.204" ry="2.677" style="fill:black;stroke-width:1.59px;stroke:black;"/></g>';

//hat and hair
happyclown[3] = '<g transform="matrix(0.993682,0,0,0.960588,0.180264,3.66933)">\<path d="M25.752,39.001C42.3,37.262 57.427,36.871 74.11,38.431C81.128,53.73 82.615,75.66 79.628,89.656L97.997,89.515C100.131,66.972 89.744,41.451 78.711,27.353L62.022,15.215C53.535,15.075 45.066,15.437 36.589,15.61L17.246,31.733C6.466,48.08 -1.122,71.064 -0.182,89.656L19.815,89.656C17.014,74.175 19.114,52.522 25.752,39.001Z" style="fill:rgb(255,150,69);stroke-width:1.02px;stroke:black;"/></g><g transform="matrix(0.902165,-0.302219,0.212191,0.633419,1.28765,15.1544)"><rect x="17.515" y="0" width="28.374" height="23.634" style="fill:rgb(69,108,255);"/></g><g transform="matrix(0.948377,-0.317144,0.317144,0.948377,-8.35737,3.04918)"><rect x="14.496" y="29.529" width="42.245" height="6.853" style="fill:rgb(69,108,255);"/></g>";'

happyclown[4] = '</svg>';

var happyClownAll = happyclown[0] + happyclown[1] + happyclown[2] + happyclown[3] + happyclown[4];


//=====================ted cruz================

var tedcruz = [];

tedcruz[0] = '<svg width="500" height="500" viewBox="0 0 100 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;" class="holder">';
 
//head
tedcruz[5] = '<g transform="matrix(1.40785,0,0,1.2226,-37.7827,-12.3605)"><ellipse cx="62.874" cy="59.186" rx="23.559" ry="34.145" style="fill:white;stroke-width:0.76px;stroke:black;"/></g>';

//hair
tedcruz[3] = '<g transform="matrix(0.972843,0,0,0.849091,3.43665,1.94973)"><path d="M64.765,16.604C67.164,19.086 63.569,16.552 64.806,18.581C65.962,20.479 61.526,28.227 60.388,28.783C59.475,29.231 59.549,28.046 58.743,28.449C58.15,28.744 57.187,30.106 56.545,30.106C54.249,30.106 52.087,31.217 49.987,31.918C48.391,32.451 46.842,31.209 45.345,31.958C44.766,32.248 39.845,32.264 39.217,32.452C33.636,34.122 32.26,25.798 27.992,30.059C25.102,32.943 20.135,39.946 20.178,43.898C20.193,45.349 18.568,45.492 17.916,46.798C17.348,47.936 17.097,52.201 16.907,53.53C16.454,56.699 17.893,59.11 16.533,61.377C16.137,62.036 15.237,64.715 14.483,63.213C12.398,59.054 13.082,52.403 14.005,47.775C14.341,46.091 15.225,44.626 15.508,42.925C15.977,40.1 15.369,37.326 16.259,34.659C16.942,32.615 19.266,30.898 19.949,28.853C20.38,27.558 21.364,26.174 21.793,24.891C22.279,23.434 22.288,22.215 23.356,21.134C23.952,20.529 25.03,20.008 25.678,19.358C26.431,18.604 27.547,17.678 28.752,17.377C36.801,15.363 44.662,13.074 53.275,13.074C56.149,13.074 59.144,12.529 61.882,13.21C63.142,13.524 63.637,14.605 64.538,15.055C64.801,15.185 64.765,16.604 64.765,16.604Z" style="fill:rgb(53,22,22);stroke-width:1.1px;stroke:black;"/></g><g transform="matrix(1.07761,0,0,1.18872,-4.6667,-2.93894)"><path d="M67.604,17.019C66.22,18.946 65.428,21.432 64.189,22.672C63.756,23.105 63.767,24.443 63.505,24.834C63.396,24.998 62.862,25.161 62.998,25.298C63.348,25.647 64.592,26.773 65.035,27.235C65.286,27.497 66.222,26.473 66.607,26.099C68.181,24.574 69.742,27.73 70.211,27.858C74.07,28.912 75.183,29.85 75.567,31.588C76.448,35.585 75.478,36.736 77.163,38.829C78.781,40.837 79.456,45.037 80.602,46.756C80.666,46.852 81.684,46.756 81.824,46.756C83.338,46.756 81.707,45.066 82.175,43.667C82.536,42.584 82.492,40.861 82.492,39.718C82.492,36.482 82.298,34.59 81.296,31.588C80.079,27.94 78.953,24.878 76.881,21.975C76.245,21.084 74.67,18.984 73.602,18.628C72.709,18.33 71.739,17.492 70.869,17.057C70.331,16.788 67.604,17.019 67.604,17.019Z" style="fill:rgb(62,28,28);stroke-width:0.88px;stroke:black;"/></g>';

//eye
tedcruz[1] = '<path d="M41.69,46.798L42.1,51.403L27.634,60.128C27.634,60.128 29.726,56.208 31.125,53.585C31.927,52.082 33.176,50.866 34.7,50.106C37.356,48.779 41.324,46.798 41.324,46.798" style="fill:black;stroke-width:1px;stroke:black;"/><path d="M50,46.798L50,51.144L66.763,57.924C66.763,57.924 63.434,53.742 61.389,51.173C60.377,49.902 58.972,49.002 57.394,48.615C54.484,47.9 50,46.798 50,46.798Z" style="fill:black;stroke-width:1px;stroke:black;"/><g transform="matrix(1,0,0,0.713753,-0.691598,15.3549)"><path d="M44.042,60C44.042,60 37.783,60.088 35.604,60.118C35.134,60.125 34.686,60.403 34.367,60.887C33.268,62.557 30.738,66.4 30.738,66.4L34.867,64.853L44.042,60Z" style="fill:none;stroke-width:1.15px;stroke:black;"/></g><g transform="matrix(1,0,0,0.5,0,28.2965)"><path d="M50,60C50,60 53.799,62.307 55.369,63.259C55.81,63.527 56.269,63.664 56.731,63.664C58.569,63.664 63.413,63.664 63.413,63.664C63.413,63.664 60.127,61.271 58.866,60.353C58.545,60.119 58.207,60 57.866,60C56.041,60 50,60 50,60" style="fill:none;stroke-width:1.26px;stroke:black;"/></g><g transform="matrix(1,0,0,1,0,-1.70354)"><ellipse cx="35.312" cy="61.374" rx="1.387" ry="1.374" style="fill:black;"/></g><g transform="matrix(0.5,0,0,0.831161,39.7439,8.31044)"><ellipse cx="35.312" cy="61.374" rx="1.387" ry="1.374" style="fill:black;"/></g>';

//mouth
tedcruz[2] = '<g><path d="M38.367,84.5C45.677,83.891 53.014,83.202 60.672,83.202" style="fill:none;stroke-width:1px;stroke:black;"/><path d="M38.351,84.473C46.063,84.473 53.019,83.653 60.358,83.653" style="fill:none;stroke-width:1px;stroke:black;"/></g><g transform="matrix(1.42287,0,0,0.956396,-29.7389,1.51341)"><path d="M58.243,76.483C61.116,78.1 65.467,82.557 65.467,85.885" style="fill:none;stroke-width:0.82px;stroke:black;"/></g><g transform="matrix(1.27139,0,0,1.19029,-13.0499,-15.7046)"><path d="M44.497,60.246C44.497,61.912 44.72,64.451 43.677,65.49C43.019,66.145 43.239,68.189 42.66,68.744C42.66,68.744 42.66,68.744 42.66,68.744C42.464,68.932 42.857,69.736 42.66,69.924C42.166,70.398 42.532,71.403 42.122,71.993C41.772,72.497 38.831,73.768 39.788,75.146C40.147,75.662 40.974,75.924 41.275,76.359C41.473,76.646 41.275,77.783 41.275,78.146C41.275,79.281 41.363,80.944 42.01,81.591C43.355,82.937 46.651,82.762 47.882,81.531C48.462,80.951 48.27,79.955 48.762,79.463C49.687,78.537 50.927,78.084 51.914,77.097C52.079,76.932 52.084,76.572 52.011,76.179C51.889,75.523 51.551,74.776 51.377,74.687C50.639,74.31 49.641,72.895 49.641,71.61C49.641,71.155 49.933,69.071 49.641,68.78C49.498,68.636 49.103,68.012 49.103,67.796" style="fill:none;stroke-width:0.81px;stroke:black;"/></g><g transform="matrix(1,0,0,1,-1.29794,0.208067)"><path d="M40.343,76.417C37.641,77.376 37.46,77.802 35.799,79.534C35.19,80.17 34.245,80.724 34.245,81.482" style="fill:none;stroke-width:1px;stroke:black;"/></g>';
        
tedcruz[4] = '</svg>';

var tedCruzAll = tedcruz[0] + tedcruz[1] + tedcruz[2] + tedcruz[3] + tedcruz[4];

//=============scary clown=================

var scaryClown = [];

//basic
scaryClown[0] = '<svg width="500" height="500" viewBox="0 0 100 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;" class="holder">';
    
 //HEAD   
scaryClown[5] = '<g transform="matrix(1.40785,0,0,1.2226,-37.7827,-12.3605)"><ellipse cx="62.874" cy="59.186" rx="23.559" ry="34.145" style="fill:white;stroke-width:0.76px;stroke:black;"/></g>';
    
//HAIR    
scaryClown[3] = '<g transform="matrix(0.916249,0.400609,-0.400609,0.916249,22.3421,-8.10453)"><path d="M22.399,35.365C22.399,32.593 19.559,32.024 17.719,31.409C17.386,31.298 15.417,30.876 15.081,31.211C14.777,31.516 14.619,33.607 14.166,33.453C12.736,32.969 11.195,32.529 9.814,32.069C9.577,31.989 8.506,31.626 8.166,31.871C7.787,32.144 7.77,34.797 7.77,35.291C7.77,35.733 7.902,36.61 7.902,36.61C7.902,36.61 6.73,36.429 6.188,36.61C4.662,37.119 3.728,37.591 3.221,39.115C3.014,39.739 2.938,42.304 3.221,42.874C3.521,43.475 4.251,43.124 4.648,43.335C4.939,43.49 4.237,43.852 4.054,44.126C3.661,44.717 3.233,45.298 2.868,45.906C1.869,47.567 1.849,48.998 1.849,50.9C1.849,52.943 5.102,51.843 5.102,50.793C5.102,50.598 5.129,51.185 5.102,51.379C4.983,52.208 4.809,52.935 4.706,53.753C4.572,54.826 3.172,58.128 4.244,59.093C4.963,59.74 6.697,59.488 7.409,59.488C7.635,59.488 7.197,59.888 7.08,60.082C6.668,60.761 6.598,60.641 6.288,61.466C5.956,62.352 4.75,64.555 5.168,65.597C5.733,67.007 9.031,65.209 9.511,65.209C9.511,65.209 9.511,67.565 9.511,67.772C9.511,68.887 9.161,70.68 9.511,71.728C10.095,73.479 12.644,71.206 13.071,70.608C13.614,69.848 12.921,68.141 13.401,67.64C13.508,67.529 14.063,68.644 14.184,68.827C14.786,69.728 15.594,70.332 16.558,70.608C17.49,70.874 18.781,70.71 19.195,69.882C19.282,69.709 19.061,69.162 19.195,69.033C19.229,69.001 21.544,69.824 21.965,69.824C22.806,69.824 23.798,69.969 24.272,69.494C24.491,69.276 24.054,68.402 24.272,68.184C24.465,67.991 24.871,68.381 25.055,68.381C26.48,68.381 26.738,68.247 26.738,66.831" style="fill:rgb(255,11,0);stroke-width:1px;stroke:black;"/></g><g transform="matrix(-0.916249,0.400609,0.400609,0.916249,78.4557,-6.95194)"><path d="M22.399,35.365C22.399,32.593 19.559,32.024 17.719,31.409C17.386,31.298 15.417,30.876 15.081,31.211C14.777,31.516 14.619,33.607 14.166,33.453C12.736,32.969 11.195,32.529 9.814,32.069C9.577,31.989 8.506,31.626 8.166,31.871C7.787,32.144 7.77,34.797 7.77,35.291C7.77,35.733 7.902,36.61 7.902,36.61C7.902,36.61 6.73,36.429 6.188,36.61C4.662,37.119 3.728,37.591 3.221,39.115C3.014,39.739 2.938,42.304 3.221,42.874C3.521,43.475 4.251,43.124 4.648,43.335C4.939,43.49 4.237,43.852 4.054,44.126C3.661,44.717 3.233,45.298 2.868,45.906C1.869,47.567 1.849,48.998 1.849,50.9C1.849,52.943 5.102,51.843 5.102,50.793C5.102,50.598 5.129,51.185 5.102,51.379C4.983,52.208 4.809,52.935 4.706,53.753C4.572,54.826 3.172,58.128 4.244,59.093C4.963,59.74 6.697,59.488 7.409,59.488C7.635,59.488 7.197,59.888 7.08,60.082C6.668,60.761 6.598,60.641 6.288,61.466C5.956,62.352 4.75,64.555 5.168,65.597C5.733,67.007 9.031,65.209 9.511,65.209C9.511,65.209 9.511,67.565 9.511,67.772C9.511,68.887 9.161,70.68 9.511,71.728C10.095,73.479 12.644,71.206 13.071,70.608C13.614,69.848 12.921,68.141 13.401,67.64C13.508,67.529 14.063,68.644 14.184,68.827C14.786,69.728 15.594,70.332 16.558,70.608C17.49,70.874 18.781,70.71 19.195,69.882C19.282,69.709 19.061,69.162 19.195,69.033C19.229,69.001 21.544,69.824 21.965,69.824C22.806,69.824 23.798,69.969 24.272,69.494C24.491,69.276 24.054,68.402 24.272,68.184C24.465,67.991 24.871,68.381 25.055,68.381C26.48,68.381 26.738,68.247 26.738,66.831" style="fill:rgb(255,11,0);stroke-width:1px;stroke:black;"/></g>';
    

//EYES
scaryClown[1] = '<g transform="matrix(-0.475374,0.610966,-1.06749,-0.830583,108.407,57.981)"><path d="M41.861,37.315C38.416,37.315 35.619,41.521 35.619,46.702C35.619,51.883 38.416,56.09 41.861,56.09C40.827,53.899 39.988,50.447 39.988,46.702C39.988,42.957 40.827,39.505 41.861,37.315Z" style="fill:black;"/></g><g transform="matrix(0.475374,0.610966,1.06749,-0.830583,-6.93338,57.981)"><path d="M41.861,37.315C38.416,37.315 35.619,41.521 35.619,46.702C35.619,51.883 38.416,56.09 41.861,56.09C40.999,53.743 40.3,50.344 40.3,46.702C40.3,43.06 40.999,39.661 41.861,37.315Z" style="fill:black;"/></g><g transform="matrix(1.05191,0,0,1,-2.62802,-5.66385)"><ellipse cx="36.759" cy="56.071" rx="7.802" ry="9.882" style="fill:black;"/></g><g transform="matrix(1.05191,0,0,1,26.1347,-5.66385)"><ellipse cx="36.759" cy="56.071" rx="7.802" ry="9.882" style="fill:black;"/></g><g transform="matrix(1.05191,0,0,1,-2.62802,-5.66385)"><ellipse cx="36.759" cy="56.071" rx="7.802" ry="9.882" style="fill:black;"/></g><g transform="matrix(1,0,0,-1,-2.1327,140.825)"><path d="M38.172,66.483L40.726,82.536L35.619,82.536L38.172,66.483Z" style="fill:black;"/></g><g transform="matrix(1,0,0,1,-2.1327,-40.6277)"><path d="M38.172,66.483L40.726,82.536L35.619,82.536L38.172,66.483Z" style="fill:black;"/></g><g transform="matrix(1,0,0,1,26.63,-40.6277)"><path d="M38.172,66.483L40.726,82.536L35.619,82.536L38.172,66.483Z" style="fill:black;"/></g><g transform="matrix(1,0,0,-1,26.63,140.825)"><path d="M38.172,66.483L40.726,82.536L35.619,82.536L38.172,66.483Z" style="fill:black;"/></g>';
    
 //MOUTH NOSE
scaryClown[2] = '<g transform="matrix(1.2254,0,0,1.16139,-11.8956,-14.6208)"><ellipse cx="50.938" cy="71.979" rx="7.113" ry="7.479" style="fill:black;"/></g><g transform="matrix(1,0,0,1,0.420902,0.28898)"><path d="M59.962,90.952C60.987,90.061 61.527,89.05 61.527,88.02C61.527,84.784 56.294,82.157 49.849,82.157C43.405,82.157 38.172,84.784 38.172,88.02C38.172,89.05 38.712,90.061 39.737,90.952L59.962,90.952Z" style="fill:black;"/></g>';

scaryClown[5] ='</svg>';

//================mime===========================

var mime = [];

//BASIC
mime[0] = '<svg width="500" height="500" viewBox="0 0 100 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;" class="holder">';

//HEAD
 mime[5] = '<g transform="matrix(1.496,0,0,1.2226,-44.0601,-14.7487)"><ellipse cx="62.874" cy="59.186" rx="23.559" ry="34.145" style="fill:white;stroke-width:0.73px;stroke:black;"/></g>';
        
 
//EYES
mime[1] = '<g transform="matrix(-3.23528e-16,1.7612,-1,-1.83697e-16,111.882,9.37205)"><path d="M30.055,69.702C27.114,69.702 24.725,73.697 24.725,78.618C24.725,83.538 27.114,87.533 30.055,87.533C27.849,86.79 26.058,83.051 26.058,78.618C26.058,74.184 27.849,70.445 30.055,69.702Z" style="fill:black;stroke-width:0.7px;stroke:black;"/></g><g transform="matrix(-3.23528e-16,1.7612,-1,-1.83697e-16,146.488,9.37205)"><path d="M30.055,69.702C27.114,69.702 24.725,73.697 24.725,78.618C24.725,83.538 27.114,87.533 30.055,87.533C27.849,86.79 26.058,83.051 26.058,78.618C26.058,74.184 27.849,70.445 30.055,69.702Z" style="fill:black;stroke-width:0.7px;stroke:black;"/></g><g transform="matrix(1,0,0,1,-0.0229225,-7.08164)"><ellipse cx="33.287" cy="73.602" rx="6.548" ry="3.9" style="fill:none;stroke-width:1px;stroke:black;"/></g><g transform="matrix(1,0,0,1,-3.29713,-10.2026)"><ellipse cx="36.561" cy="76.723" rx="3.274" ry="3.121" style="fill:black;stroke-width:1px;stroke:black;"/></g><g transform="matrix(1,0,0,1,33.9978,-7.86033)"><ellipse cx="33.287" cy="73.602" rx="6.548" ry="3.9" style="fill:none;stroke-width:1px;stroke:black;"/></g><g transform="matrix(1,0,0,1,30.8986,-10.9813)"><ellipse cx="36.561" cy="76.723" rx="3.274" ry="3.121" style="fill:black;stroke-width:1px;stroke:black;"/></g><g transform="matrix(-1,3.21625e-16,-3.21625e-16,-1,64.5631,161.792)"><path d="M31.299,83.732L32.936,91.372L29.662,91.372L31.299,83.732Z" style="fill:black;stroke-width:1px;stroke:black;"/></g><g transform="matrix(-1,3.21625e-16,-3.21625e-16,-1,98.8137,161.014)"><path d="M31.299,83.732L32.936,91.372L29.662,91.372L31.299,83.732Z" style="fill:black;stroke-width:1px;stroke:black;"/></g>';


//HAT
mime[3] = '<g transform="matrix(1,0,0,1,0.327342,-7.08164)"><rect x="5.486" y="43.588" width="88.373" height="9.562" style="fill:black;stroke-width:1px;stroke:black;"/></g><g transform="matrix(1,0,0,1,1.11445,-7.08164)"><rect x="17.3" y="22.715" width="63.17" height="20.872" style="fill:black;stroke-width:1px;stroke:black;"/></g>';

//NOSE MOUTH
mime[2] = '<g transform="matrix(-1,3.21625e-16,-4.983e-16,-1.54932,99.5978,236.402)"><path d="M57.745,99.03C58.604,98.593 59.056,98.097 59.056,97.592C59.056,96.005 54.671,94.716 49.27,94.716C43.87,94.716 39.485,96.005 39.485,97.592C39.485,98.097 39.937,98.593 40.796,99.03L57.745,99.03Z" style="fill:rgb(205,40,40);"/></g><g transform="matrix(0.473794,0,0,0.505335,25.866,39.5343)"><ellipse cx="50.938" cy="71.979" rx="7.113" ry="7.479" style="fill:none;stroke-width:2.04px;stroke:black;"/></g>';

mime[4] = '</svg>';


//================insane clown posse=============

var insaneClown = [];

//BASIC
insaneClown[0] = '<svg width="500" height="500" viewBox="0 0 100 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;" class = "holder">'; 
    
 //HEAD
insaneClown[5] = '<g transform="matrix(1.496,0,0,1.2226,-44.0601,-12.3605)"><ellipse cx="62.874" cy="59.186" rx="23.559" ry="34.145" style="fill:white;stroke-width:0.73px;stroke:black;"/></g>';
        
//EYES
insaneClown[1] = '<g transform="matrix(1,0,0,0.684714,2.52438,4.93349)"><ellipse cx="33.287" cy="73.602" rx="6.548" ry="3.9" style="fill:none;stroke-width:1.17px;stroke:black;"/></g><g transform="matrix(1,0,0,0.684714,29.5166,4.93349)"><ellipse cx="33.287" cy="73.602" rx="6.548" ry="3.9" style="fill:none;stroke-width:1.17px;stroke:black;"/></g><g transform="matrix(1,0,0,0.708981,26.2424,3.14739)"><ellipse cx="36.561" cy="76.723" rx="3.274" ry="3.121" style="fill:black;stroke-width:1.15px;stroke:black;"/></g><g transform="matrix(1,0,0,0.708981,-0.749821,3.14739)"><ellipse cx="36.561" cy="76.723" rx="3.274" ry="3.121" style="fill:black;stroke-width:1.15px;stroke:black;"/></g><g transform="matrix(-5.18525e-16,2.82272,-1,-1.83697e-16,114.429,-38.7331)"><path d="M30.055,69.702C27.114,69.702 24.725,73.697 24.725,78.618C24.725,83.538 27.114,87.533 30.055,87.533C27.849,86.79 26.058,83.051 26.058,78.618C26.058,74.184 27.849,70.445 30.055,69.702Z" style="fill:black;stroke-width:0.47px;stroke:black;"/></g><g transform="matrix(-5.18525e-16,2.82272,-1,-1.83697e-16,141.421,-38.7331)"><path d="M30.055,69.702C27.114,69.702 24.725,73.697 24.725,78.618C24.725,83.538 27.114,87.533 30.055,87.533C27.849,86.79 26.058,83.051 26.058,78.618C26.058,74.184 27.849,70.445 30.055,69.702Z" style="fill:black;stroke-width:0.47px;stroke:black;"/></g><g transform="matrix(1,0,0,1,1.15425,-4.99025)"><rect x="32.458" y="44.232" width="4.399" height="6.529" style="fill:black;"/></g><g transform="matrix(1,0,0,1,28.1465,-4.66542)"><rect x="32.458" y="44.232" width="4.399" height="6.529" style="fill:black;"/></g>';
        
//MOUTH NOSE

insaneClown[2] = '<g transform="matrix(0.667923,0,0,0.722797,10.3854,14.6279)"><path d="M32.612,68.013L41.359,67.573L37.01,79.54L28.263,79.387L32.612,68.013Z" style="fill:black;stroke-width:1.44px;stroke:black;"/></g><g transform="matrix(-0.667923,0,0,0.722797,88.229,14.6279)"><path d="M32.612,68.013L41.359,67.573L37.01,79.54L28.263,79.387L32.612,68.013Z" style="fill:black;stroke-width:1.44px;stroke:black;"/></g><g transform="matrix(1,0,0,0.935853,-0.153956,3.64499)"><path d="M20.148,74.663L24.938,74.663L32.612,84.59L41.359,90.927L43.29,84.311L55.255,83.853L58.001,88.804L68.352,83.278L73.524,74.663L78.124,74.663L70.473,87.657L59.319,95.074L55.255,100.187L50,102.404L43.48,99.459L41.359,96.505L32.612,91.343L20.148,74.663Z" style="fill:black;stroke-width:1.03px;stroke:black;"/></g><g transform="matrix(0.81286,0,0,0.671786,7.57674,20.1394)"><ellipse cx="50.938" cy="71.979" rx="7.113" ry="7.479" style="fill:black;"/></g><g transform="matrix(1,0,0,1,-0.131475,0)"><path d="M54.569,92.387C55.018,92.131 55.255,91.841 55.255,91.546C55.255,90.618 52.959,89.864 50.131,89.864C47.304,89.864 45.008,90.618 45.008,91.546C45.008,91.841 45.245,92.131 45.694,92.387L54.569,92.387Z" style="fill:white;"/></g>';

//HAIR
insaneClown[3] = '<path d="M16.621,48.554C16.621,48.554 23.237,35.627 25.851,30.52C26.533,29.187 27.583,28.078 28.876,27.323C31.681,25.687 36.758,22.725 39.363,21.205C40.446,20.574 41.64,20.157 42.881,19.977C46.423,19.463 53.737,18.403 53.737,18.403C53.737,18.403 53.737,18.403 53.738,18.403C54.408,18.306 55.092,18.399 55.713,18.671C58.121,19.726 64.496,22.519 67.602,23.88C68.758,24.387 69.807,25.108 70.694,26.006C72.394,27.727 75.291,30.659 76.868,32.255C77.595,32.992 78.165,33.869 78.542,34.832C79.851,38.177 82.954,46.104 82.954,46.104L95.877,34.513L82.018,27.439L89.999,13.848L73.683,18.255L77.97,10.331L69.352,14.967L69.352,4.529L64.978,10.79L60.604,2.245L57.989,10.025L54.764,3.193L50,11.557L43.201,5L43.201,11.548L33.997,3.26L35.811,14.453L22.298,4.523L25.253,18.255L9.681,10.675L22.577,25.711L5.154,18.255L18.372,31.06L5.63,31.06L16.621,48.554Z" style="fill:rgb(205,160,63);stroke-width:1px;stroke:black;"/>';

insaneClown[4] = '</svg>';



//===========================

var clown1;
var clown2;

//============================

$('#submit1').on('click', storeClown1);
$('#submit1').on('click', showHead);
$('#submit2').on('click', storeClown2);
$('#action').on('click', morphChoice);
$('#reset').on( 'click', reset );


//=====storing user info into local storage


function storeClown1( evt) {
  fromClown = $('#clowns1').val(); 
  console.log(fromClown);
 
  localStorage.setItem('clownOne', fromClown);

 }

function storeClown2( evt) {
  toClown = $('#clowns2').val(); 
  console.log(toClown);
 
  localStorage.setItem('clownTwo', toClown);
 }


//=============================
  
//testing success of local storage
//function test( evt ){
//  clown1 = localStorage.clownOne;
//  clown2 = localStorage.clownTwo;
//  console.log(clown1, clown2);
//}

function showHead(evt){
 
  var clown1 = fromClown;
  console.log(clown1);
 
  if (clown1==="happy-clown"){
    showHappy()
  } else if (clown1==="ted-cruz"){
    showTed()
  } else if (clown1==="scary-clown"){
    showScary()
  } else if (clown1==="mime"){
    showMime()
  } else if (clown1==="insane-posse"){
    showInsane()
  }



  function showHappy(){
    $('#head').replaceWith('<div id="head2" class="holder">' + happyclown[0] + happyclown[5] + '</div>');
    $('#eyes').replaceWith('<div id="eyes2" class="holder">' + happyclown[0] + happyclown[1] + '</div>');
    $('#mouth').replaceWith('<div id="mouth2" class="holder">' + happyclown[0] + happyclown[2] + '</div>');   
    $('#hair').replaceWith('<div id="hair2" class="holder">' + happyclown[0] + happyclown[3] + '</div>');
    }
 
   function showTed(){
    $('#head').replaceWith('<div id="head2" class="holder">' + tedcruz[0] + tedcruz[5] + '</div>');
    $('#eyes').replaceWith('<div id="eyes2" class="holder">' + tedcruz[0] + tedcruz[1] + '</div>');
    $('#mouth').replaceWith('<div id="mouth2" class="holder">' + tedcruz[0] + tedcruz[2] + '</div>');   
    $('#hair').replaceWith('<div id="hair2" class="holder">' + tedcruz[0] + tedcruz[3] + '</div>');
    }
 
// scaryclown head not working. used ted cruz's
    function showScary(){
    $('#head').replaceWith('<div id="head2" class="holder">' + scaryClown[0] + tedcruz[5] + '</div>');
    $('#eyes').replaceWith('<div id="eyes2" class="holder">' + scaryClown[0] + scaryClown[1] + '</div>');
    $('#mouth').replaceWith('<div id="mouth2" class="holder">' + scaryClown[0] + scaryClown[2] + '</div>');   
    $('#hair').replaceWith('<div id="hair2" class="holder">' + scaryClown[0] + scaryClown[3] + '</div>');
    }
 
    function showMime(){
    $('#head').replaceWith('<div id="head2" class="holder">' + mime[0] + mime[5] + '</div>');
    $('#eyes').replaceWith('<div id="eyes2" class="holder">' + mime[0] + mime[1] + '</div>');
    $('#mouth').replaceWith('<div id="mouth2" class="holder">' + mime[0] + mime[2] + '</div>');   
    $('#hair').replaceWith('<div id="hair2" class="holder">' + mime[0] + mime[3] + '</div>');
    }
 
     function showInsane(){
    $('#head').replaceWith('<div id="head2" class="holder">' + insaneClown[0] + insaneClown[5] + '</div>');
    $('#eyes').replaceWith('<div id="eyes2" class="holder">' + insaneClown[0] + insaneClown[1] + '</div>');
    $('#mouth').replaceWith('<div id="mouth2" class="holder">' + insaneClown[0] + insaneClown[2] + '</div>');   
    $('#hair').replaceWith('<div id="hair2" class="holder">' + insaneClown[0] + insaneClown[3] + '</div>');
    }
 
}

//==========morph functions===================================
 
function morphChoice( evt ){
 
 //stored clown variables
  var clown1 = fromClown;
  var clown2 = toClown;
 
  //choosing which morphing function from Happy
  if (clown2==="happy-clown"){
    morphToHappy()
  } else if (clown2==="ted-cruz"){
    morphToTed()
  } else if (clown2==="insane-posse"){
    morphToInsane()
  } else if (clown2==="mime"){
    morphToMime()
  } else if (clown2==="scary-clown"){
    morphToScary()
  }
 
  function morphToTed(){
   $('#eyes2').fadeOut(1500, function(){
    var div = $('<div id="eyes3" class="holder">' + tedcruz[0] + tedcruz[1] + '</div>').hide();
    $(this).replaceWith(div);
    $('#eyes3').fadeIn(1500);
  });
  
     $('#mouth2').fadeOut(1200, function(){
    var div = $('<div id="mouth3" class="holder">' + tedcruz[0] + tedcruz[2] + '</div>').hide();
    $(this).replaceWith(div);
    $('#mouth3').fadeIn(1200);
});
  
     $('#hair2').fadeOut(1300, function(){
    var div = $('<div id="hair3" class="holder">' + tedcruz[0] + tedcruz[3] + '</div>').hide();
    $(this).replaceWith(div);
    $('#hair3').fadeIn(1300);
});
  
 }  
 
 function morphToHappy(){
   $('#eyes2').fadeOut(1500, function(){
    var div = $('<div id="eyes3" class="holder">' + happyclown[0] + happyclown[1] + '</div>').hide();
    $(this).replaceWith(div);
    $('#eyes3').fadeIn(1500);
  });
  
     $('#mouth2').fadeOut(1200, function(){
    var div = $('<div id="mouth3" class="holder">' + happyclown[0] + happyclown[2] + '</div>').hide();
    $(this).replaceWith(div);
    $('#mouth3').fadeIn(1200);
});
  
     $('#hair2').fadeOut(1400, function(){
    var div = $('<div id="hair3" class="holder">' + happyclown[0] + happyclown[3] + '</div>').hide();
    $(this).replaceWith(div);
    $('#hair3').fadeIn(1400);
});
 }
  
   function morphToInsane(){
   $('#eyes2').fadeOut(1500, function(){
    var div = $('<div id="eyes3" class="holder">' + insaneClown[0] + insaneClown[1] + '</div>').hide();
    $(this).replaceWith(div);
    $('#eyes3').fadeIn(1500);
  });
  
     $('#mouth2').fadeOut(1300, function(){
    var div = $('<div id="mouth3" class="holder">' + insaneClown[0] + insaneClown[2] + '</div>').hide();
    $(this).replaceWith(div);
    $('#mouth3').fadeIn(1300);
});
  
     $('#hair2').fadeOut(1600, function(){
    var div = $('<div id="hair3" class="holder">' + insaneClown[0] + insaneClown[3] + '</div>').hide();
    $(this).replaceWith(div);
    $('#hair3').fadeIn(1600);
});
   }
    
       function morphToScary(){
   $('#eyes2').fadeOut(1500, function(){
    var div = $('<div id="eyes3" class="holder">' + scaryClown[0] + scaryClown[1] + '</div>').hide();
    $(this).replaceWith(div);
    $('#eyes3').fadeIn(1500);
  });
  
     $('#mouth2').fadeOut(1200, function(){
    var div = $('<div id="mouth3" class="holder">' + scaryClown[0] + scaryClown[2] + '</div>').hide();
    $(this).replaceWith(div);
    $('#mouth3').fadeIn(1200);
});
  
     $('#hair2').fadeOut(1200, function(){
    var div = $('<div id="hair3" class="holder">' + scaryClown[0] + scaryClown[3] + '</div>').hide();
    $(this).replaceWith(div);
    $('#hair3').fadeIn(1200);
});
  }
 
   function morphToMime(){
   $('#eyes2').fadeOut(1500, function(){
    var div = $('<div id="eyes3" class="holder">' + mime[0] + mime[1] + '</div>').hide();
    $(this).replaceWith(div);
    $('#eyes3').fadeIn(1500);
  });
  
     $('#mouth2').fadeOut(1400, function(){
    var div = $('<div id="mouth3" class="holder">' + mime[0] + mime[2] + '</div>').hide();
    $(this).replaceWith(div);
    $('#mouth3').fadeIn(1400);
});
  
     $('#hair2').fadeOut(1700, function(){
    var div = $('<div id="hair3" class="holder">' + mime[0] + mime[3] + '</div>').hide();
    $(this).replaceWith(div);
    $('#hair3').fadeIn(1700);
});
  }
 
   //======end morph function
 }
  
 
 //===============reset function=======

function reset( evt){
 location.reload();
}





//===============UNUSED CODE BELOW===============
// //choosing which morphing function from Happy
//  if (clown1==="happy-clown" & clown2==="happy-clown"){
//    morphHappyToHappy()
//  } else if (clown1==="happy-clown" & clown2==="ted-cruz"){
//    morphHappyToTed()
//  } else if (clown1==="happy-clown" & clown2==="insane-posse"){
//    morphHappyToInsane()
//  } else if (clown1==="happy-clown" & clown2==="mime"){
//    morphHappyToMime()
//  } else if (clown1==="happy-clown" & clown2==="scary-clown"){
//    morphHappytoScary()
//  }
// 
//  //=========happy clown subfunction
//
// function morphHappyToTed(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + tedcruz[0] + tedcruz[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + tedcruz[0] + tedcruz[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + tedcruz[0] + tedcruz[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  
// }  
// 
// function morphHappyToHappy(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + happyclown[0] + happyclown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + happyclown[0] + happyclown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + happyclown[0] + happyclown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
// }
//  
//   function morphHappyToInsane(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + insaneClown[0] + insaneClown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + insaneClown[0] + insaneClown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + insaneClown[0] + insaneClown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//   }
//    
//       function morphHappyToScary(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + scaryClown[0] + scaryClown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + scaryClown[0] + scaryClown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + scaryClown[0] + scaryClown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  }
// 
//   function morphHappyToMime(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + mime[0] + mime[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + mime[0] + mime[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + mime[0] + mime[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  }
// 
// 
// //======Ted Cruz subfunction=============
//  
// //choosing which morphing function from Ted Cruz
//  if (clown1==="ted-cruz" & clown2==="happy-clown"){
//    morphTedToHappy()
//  } else if (clown1==="ted-cruz" & clown2==="ted-cruz"){
//    morphTedToTed()
//  } else if (clown1==="ted-cruz" & clown2==="insane-posse"){
//    morphTedToInsane()
//  } else if (clown1==="ted-cruz" & clown2==="mime"){
//    morphTedToMime()
//  } else if (clown1==="ted-cruz" & clown2==="scary-clown"){
//    morphTedToScary()
//  }
//
//
// function morphTedToTed(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + tedcruz[0] + tedcruz[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + tedcruz[0] + tedcruz[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + tedcruz[0] + tedcruz[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  
// }  
// 
// function morphTedToHappy(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + happyclown[0] + happyclown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + happyclown[0] + happyclown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + happyclown[0] + happyclown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
// }
//  
//   function morphTedToInsane(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + insaneClown[0] + insaneClown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + insaneClown[0] + insaneClown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + insaneClown[0] + insaneClown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//   }
//    
//       function morphTedToScary(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + scaryClown[0] + scaryClown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + scaryClown[0] + scaryClown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + scaryClown[0] + scaryClown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  }
// 
//   function morphTedToMime(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + mime[0] + mime[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + mime[0] + mime[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + mime[0] + mime[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  }
// 
//  //=======insane clown subfunction=====
// 
// 
// //choosing which morphing function from Insane Clown
//  if (clown1==="insane-posse" & clown2==="happy-clown"){
//    morphInsaneToHappy()
//  } else if (clown1==="insane-posse" & clown2==="ted-cruz"){
//    morphInsaneToTed()
//  } else if (clown1==="insane-posse" & clown2==="insane-posse"){
//    morphInsaneToInsane()
//  } else if (clown1==="insane-posse" & clown2==="mime"){
//    morphInsaneToMime()
//  } else if (clown1==="insane-posse" & clown2==="scary-clown"){
//    morphInsaneToScary()
//  }
//
//
// function morphInsaneToTed(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + tedcruz[0] + tedcruz[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + tedcruz[0] + tedcruz[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + tedcruz[0] + tedcruz[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  
// }  
// 
// function morphInsaneToHappy(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + happyclown[0] + happyclown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + happyclown[0] + happyclown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + happyclown[0] + happyclown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
// }
//  
//   function morphInsaneToInsane(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + insaneClown[0] + insaneClown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + insaneClown[0] + insaneClown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + insaneClown[0] + insaneClown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//   }
//    
//       function morphInsaneToScary(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + scaryClown[0] + scaryClown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + scaryClown[0] + scaryClown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + scaryClown[0] + scaryClown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  }
// 
//   function morphInsaneToMime(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + mime[0] + mime[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + mime[0] + mime[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + mime[0] + mime[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  }
// 
// 
//   //============scary clown subfunction
//  
// //choosing which morphing function from Scary Clown
//  if (clown1==="scary-clown" & clown2==="happy-clown"){
//    morphScaryToHappy()
//  } else if (clown1==="scary-clown" & clown2==="ted-cruz"){
//    morphScaryToTed()
//  } else if (clown1==="scary-clown" & clown2==="insane-posse"){
//    morphScaryToInsane()
//  } else if (clown1==="scary-clown" & clown2==="mime"){
//    morphScaryToMime()
//  } else if (clown1==="scary-clown" & clown2==="scary-clown"){
//    morphScaryToScary()
//  }
//
//
// function morphScaryToTed(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + tedcruz[0] + tedcruz[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + tedcruz[0] + tedcruz[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + tedcruz[0] + tedcruz[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  
// }  
// 
// function morphScaryToHappy(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + happyclown[0] + happyclown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + happyclown[0] + happyclown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + happyclown[0] + happyclown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
// }
//  
//   function morphScaryToInsane(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + insaneClown[0] + insaneClown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + insaneClown[0] + insaneClown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + insaneClown[0] + insaneClown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//   }
//    
//       function morphScaryToScary(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + scaryClown[0] + scaryClown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + scaryClown[0] + scaryClown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + scaryClown[0] + scaryClown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  }
// 
//   function morphScaryToMime(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + mime[0] + mime[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + mime[0] + mime[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + mime[0] + mime[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  }
// 
// //==========mime subfunction====
// 
//  //choosing which morphing function from Mime
//  if (clown1==="mime" & clown2==="happy-clown"){
//    morphMimeToHappy()
//  } else if (clown1==="mime" & clown2==="ted-cruz"){
//    morphMimeToTed()
//  } else if (clown1==="mime" & clown2==="insane-posse"){
//    morphMimeToInsane()
//  } else if (clown1==="mime" & clown2==="mime"){
//    morphMimeToMime()
//  } else if (clown1==="mime" & clown2==="scary-clown"){
//    morphMimeToScary()
//  }
//
//
// function morphMimeToTed(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + tedcruz[0] + tedcruz[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + tedcruz[0] + tedcruz[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + tedcruz[0] + tedcruz[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  
// }  
// 
// function morphMimeToHappy(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + happyclown[0] + happyclown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + happyclown[0] + happyclown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + happyclown[0] + happyclown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
// }
//  
//   function morphMimeToInsane(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + insaneClown[0] + insaneClown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + insaneClown[0] + insaneClown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + insaneClown[0] + insaneClown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//   }
//    
//       function morphScaryToScary(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + scaryClown[0] + scaryClown[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + scaryClown[0] + scaryClown[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + scaryClown[0] + scaryClown[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  }
// 
//   function morphScaryToMime(){
//   $('#eyes2').fadeOut("slow", function(){
//    var div = $('<div id="eyes3" class="holder">' + mime[0] + mime[1] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#eyes3').fadeIn("slow");
//  });
//  
//     $('#mouth2').fadeOut("slow", function(){
//    var div = $('<div id="mouth3" class="holder">' + mime[0] + mime[2] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#mouth3').fadeIn("slow");
//});
//  
//     $('#hair2').fadeOut("slow", function(){
//    var div = $('<div id="hair3" class="holder">' + mime[0] + mime[3] + '</div>').hide();
//    $(this).replaceWith(div);
//    $('#hair3').fadeIn("slow");
//});
//  }
 
 


 






//UNUSED CODE BELOW


//  var clown1 = $("#clowns1").val();
//  var clown2 = $("#clowns2").val();
// 
//  if (clown === "happy-clown") {
//    var svg = happyClownAll;
//    $('#clown1result').replaceWith(svg);
//    } else if (clown === "ted-cruz") {
//      var svg = tedCruzAll;
//    $('#clown1result').replaceWith(svg);
//    }



//function showClown2( evt ){
//  var clown = $("#clowns2").val();
//  var svg = "<img src=images/" + clown + ".svg " + "height='240' width='200'>"
//  console.log(clown);
//  console.log(svg);
// $('#result').replaceWith(svg);
//}

//function morphFunctionHappytoCruz( evt ){
//  TweenLite.to("#rect", 1, {attr:{x:100, y:50, width:100, height:100}, ease:Linear.easeNone});
//}

//========================================
 
// function holder( e ){
//   
//
//
//}
//     $('#eyes3').fadeIn('slow');
  
//   $('#mouth2').fadeOut('slow');
//   $('#hair2').fadeOut('slow');
//  
//  
//    $('#eyes2').replaceWith('<div id="eyes3" class="holder" style="visibility: hidden>' +tedcruz[0] + tedcruz[1] + '</div>');
//    $('#mouth2').replaceWith('<div id="mouth3" class="holder" style="visibility: hidden>' +tedcruz[0] + tedcruz[2] + '</div>');   
//    $('#hair2').replaceWith('<div id="hair3" class="holder" style="visibility: hidden>' +tedcruz[0] + tedcruz[3] + '</div>');
//
//  
//   $('#eyes3').fadeIn('slow');
//   $('#mouth3').fadeIn('slow');
//   $('#hair3').fadeIn('slow');
  
   //$(tedcruz[0] + tedcruz[1]).fadeIn("slow");
   
//   function(){
//      $('#eyes2').replaceWith(tedcruz[0] + tedcruz[1]);
//   }
  
// )};
  


