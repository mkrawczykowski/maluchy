<?php

function stylesAndScripts(){
	wp_enqueue_style('main-styles', get_stylesheet_uri());
	wp_enqueue_script('main-js', get_template_directory_uri() . '/dist/app.js', NULL, 1.0, true);
}
add_action('wp_enqueue_scripts', 'stylesAndScripts');

?>