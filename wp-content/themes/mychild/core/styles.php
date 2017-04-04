<?php 

function h_style() {
	wp_enqueue_style( 'hbootstap', get_stylesheet_directory_uri().'/assets/css/bootstrap.min.css', array(), null );
	wp_enqueue_style( 'hfontawesome', 'http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', array( 'twentyseventeen-style' ), '1.0' );
	wp_enqueue_style( 'hlstyle1', get_stylesheet_directory_uri().'/res/goldenfield/wp-content/themes/HaiLong-Group/css/style.css', array(), null );
	wp_enqueue_style( 'hlanimate', get_stylesheet_directory_uri().'/res/goldenfield/wp-content/themes/HaiLong-Group/css/animate.css', array(), null );
	wp_enqueue_style( 'mystyle', get_stylesheet_directory_uri().'/assets/css/style.css', array(), null );

	wp_enqueue_script( 'hdbootstrap-js', get_stylesheet_directory_uri().'/assets/js/bootstrap.min.js', array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'jquery-easing', get_stylesheet_directory_uri().'/res/goldenfield/wp-content/themes/HaiLong-Group/js/jquery.easing.1.3.min.js', array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'hlcustomjs', get_stylesheet_directory_uri().'/res/goldenfield/wp-content/themes/HaiLong-Group/js/custom.js', array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'hlscroll', get_stylesheet_directory_uri().'/res/goldenfield/wp-content/themes/HaiLong-Group/js/jquery-scrolltofixed-min.js', array( 'jquery' ), '1.0', true );
}
	//wp_deregister_style( 'twentyseventeen-fonts');


add_action( 'wp_enqueue_scripts', 'h_style' );

add_image_size( 'slider_home', 835, 352, true );
add_image_size( 's300auto', 300, auto, true );
add_image_size( 's100auto', 100, auto, true );


add_action( 'wp_enqueue_scripts', 'remove_default_stylesheet', 20 );

function remove_default_stylesheet() {
    
    wp_dequeue_style( 'twentyseventeen-fonts' );
    wp_deregister_style( 'twentyseventeen-fonts' );
/*
    wp_register_style( 'new-style', get_stylesheet_directory_uri() . '/new.css', false, '1.0.0' ); 
    wp_enqueue_style( 'new-style' );*/

}

 ?>
 