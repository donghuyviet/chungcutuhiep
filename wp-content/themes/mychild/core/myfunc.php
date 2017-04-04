<?php 
	if(!function_exists('public_url')){
		function public_url($r) {
		 	return get_stylesheet_directory_uri().'/'.$r;
		}
	}
	if(!function_exists('get_my_text_field')){
		function get_my_text_field($r) {
		 	$tmp_value = get_field($r);
		 	if(isset($tmp_value)  && !empty($tmp_value)){
		 	    return  $tmp_value;
		 	}else{
		 		return '';
		 	}
		 	
		}
	}
	if(!function_exists('echor')){
		function echor($r, $k) {
		 	if(isset($r) && is_array($r) && !empty($r[$k])){
		 	    return $r[$k];
		 	}
		 	if(is_string($r) || is_numeric($r)){
		 		return $r;
		 	}		 	
		}
	}
 ?>