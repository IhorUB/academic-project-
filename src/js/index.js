import '../../node_modules/jquery/dist/jquery.min.js';
import $ from 'jquery'; /*add library*/

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../css/main.scss';
import './scroll-nav';
import './ajax-form-send';
import './tilt.jquery';



/*if (typeof jQuery == 'undefined') {
    alert('jQuery is not installed');
} else {
    alert('ok');
}*/

/* main slider-carousel init, index.html */
$('.carousel').carousel();

/* tilt.jquery property for pesonal-card animate*/
    $(document).ready(function() {
        $('.team-card').tilt({
            maxTilt: 10,
            glare: true,
            maxGlare: 0.4
        })
    })




