<?php 
	include_once get_stylesheet_directory().'/core/init.php';

	

	register_nav_menus( array(
		'main_menu'  => __( 'Main Menu', 'itcthemes' ),
	) );
	class Primary_Walker_Nav_Menu extends Walker_Nav_Menu {
	    function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {
		    $output .= sprintf("\n<li class=\"a_item %s\"><a href=\"%s\">%s</a>\n", ( array_search('current-menu-item', $item->classes) || array_search('current-page-parent', $item->classes) ) ? 'active' : '', $item->url, $item->title
		    );
	    }
	}
	
	add_filter( 'bulk_actions-' . 'edit-contact', '__return_empty_array' );
	
	if (get_current_user_id() != 1){
		function custom_menu_page_removing() {
			$menu_slugs = array('admin.php','edit-comments.php', 'edit.php', 'themes.php', 'plugins.php', 'options-general.php', 'admin.php', 'tools.php', 'edit.php?post_type=acf-field-group', 'admin.php?page=cptui_manage_post_types');
			foreach ($menu_slugs as $menu_slug) {
				remove_menu_page( $menu_slug );
			}
		    
		}
		add_action( 'admin_menu', 'custom_menu_page_removing' );
	}
	//echo 'pagenow '.$pagenow . ' end';

	function change_post_object_label() {
	        global $wp_post_types;
	        
	        //$wp_post_types['post'] = null;
	        $labels = &$wp_post_types['page']->labels;
	        $labels->name = 'Landing Page';
	        $labels->singular_name = 'Landing Page';
	        $labels->menu_name = 'Landing Page';
	        $labels->all_items = 'All Landing Page';
	       /* $labels->add_new = 'Add Contact';
	        $labels->add_new_item = 'Add Contact';
	        $labels->edit_item = 'Edit Contacts';
	        $labels->new_item = 'Contact';
	        $labels->view_item = 'View Contact';
	        $labels->search_items = 'Search Contacts';
	        $labels->not_found = 'No Contacts found';
	        $labels->not_found_in_trash = 'No Contacts found in Trash';*/
	}
	//add_action( 'init', 'change_post_object_label' );

/*	$a = WP_Users_List_Table();
	echo 11;
	if( 1){
	    echo '<pre>';
	    print_r($a);
	    echo '</pre>';
	}*/
	/*add_action('admin_enqueue_scripts' , 'ft_hide_administrator_jquery' );
	function ft_hide_administrator_jquery(){
		global $pagenow;
		if ( 'users.php' == $pagenow ){
			wp_enqueue_script('jquery');
		}
	}

	add_action( 'editable_roles' , 'ft_hide_adminstrator_editable_roles' );
	function ft_hide_adminstrator_editable_roles( $roles ){
		if ( isset( $roles['administrator'] ) && !current_user_can('level_10') ){
			unset( $roles['administrator'] );
		}
		return $roles;
	}

	// Hide Administrator from list of users
	add_action('admin_head' , 'ft_hide_administrator_user');
	function ft_hide_administrator_user(){
		if ( !current_user_can('level_10') ){
			?>
			<script type='text/javascript' >
				jQuery(document).ready(function(){
	                          var admin_count;
	                          var total_count;

				  jQuery("#list-filter > .subsubsub > li > a:contains(Administrator)").each(function(){
				  	admin_count = jQuery(this).children('.count').text();
					admin_count = admin_count.substring(1, admin_count.length - 1);
				  });
	                          jQuery("#list-filter > .subsubsub > li > a:contains(Administrator)").parent().remove();
				  jQuery("#list-filter > .subsubsub > li > a:contains(All)").each(function(){
				  	total_count = jQuery(this).children('.count').text();
					total_count = total_count.substring(1, total_count.length - 1) - admin_count;
					jQuery(this).children('.count').text('('+total_count+')');
				  });
				  jQuery("#users > tr .administrator").parent().parent().remove();
				});
			</script>
			<?php
		}
	}*/

	add_action('pre_user_query','yoursite_pre_user_query');
	function yoursite_pre_user_query($user_search) {
	  $user = wp_get_current_user();
	  if ($user->ID!=1) { 
	    global $wpdb;
	    $user_search->query_where = str_replace('WHERE 1=1', "WHERE 1=1 AND {$wpdb->users}.ID<>1",$user_search->query_where);
	  }
	}

	apply_filters( 'found_users_query', '1' ) ;
 ?>