<?php 
/**
 * Plugin Name: Click only mobile
 * Plugin URI: http://inspiration.ie 
 * Description: This plugin removes the click event on links with tel: property 
 * Version: 1.0.0
 * Author: Inspiration 
 * Author URI: http://inspiration.ie
 * License: GPL2
 */

 add_action('wp_head', 'remove_click');

 function remove_click() {
    wp_enqueue_script( 'theme_js',  '/wp-content/plugins/click-only-mobile/js/mobile.js', array( 'jquery' ));
 }