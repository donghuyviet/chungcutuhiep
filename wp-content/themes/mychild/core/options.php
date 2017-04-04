<?php

if ( ! class_exists( 'ThachPham_Theme_Options' ) ) {

    /* class ThachPham_Theme_Options sẽ chứa toàn bộ code tạo options trong theme từ Redux Framework */

    class ThachPham_Theme_Options {

    	public $args = array();

    	public $sections = array();

    	public $theme;

    	public $ReduxFramework;



    	/* Load Redux Framework */

    	public function __construct() {

    	 

    	     if ( ! class_exists( 'ReduxFramework' ) ) {

    	        return;

    	     }

    	 

    	     // This is needed. Bah WordPress bugs.  <img draggable="false" class="emoji" alt="😉" src="https://s.w.org/images/core/emoji/2.2.1/svg/1f609.svg" scale="0">

    	     if ( true == Redux_Helpers::isTheme( __FILE__ ) ) {

    	        $this->initSettings();

    	     } else {

    	        add_action( 'plugins_loaded', array( $this, 'initSettings' ), 10 );

    	     }

    	}

    	/**

    	Thiết lập các method muốn sử dụng

    	                        Method nào được khai báo trong này thì cũng phải được sử dụng

    	                    **/

    	public function initSettings() {

    	 

    	    // Set the default arguments

    	    $this->setArguments();

    	 

    	    // Set a few help tabs so you can see how it's done

    	    $this->setHelpTabs();

    	 

    	    // Create the sections and fields

    	    $this->setSections();

    	 

    	    if ( ! isset( $this->args['opt_name'] ) ) { // No errors please

    	        return;

    	    }

    	 

    	    $this->ReduxFramework = new ReduxFramework( $this->sections, $this->args );

    	}



    	/**

    	Thiết lập cho method setAgruments

    	Method này sẽ chứa các thiết lập cơ bản cho trang Options Framework như tên menu chẳng hạn

    	**/

    	public function setArguments() {

    	    $theme = wp_get_theme(); // Lưu các đối tượng trả về bởi hàm wp_get_theme() vào biến $theme để làm một số việc tùy thích.

    	    $this->args = array(

	            // Các thiết lập cho trang Options

	            'opt_name'  => 'tp_options', // Tên biến trả dữ liệu của từng options, ví dụ: tp_options['field_1']

	            'display_name' => $theme->get( 'Name' ), // Thiết lập tên theme hiển thị trong Theme Options

	            'menu_type'          => 'menu',

    	        'allow_sub_menu'     => true,

    	        'menu_title'         => __( 'Theme Options', 'thachpham' ),

    	        'page_title'         => __( 'Theme Options', 'thachpham' ),

    	        'dev_mode' => false,

    	        'customizer' => true,

    	        'menu_icon' => '', // Đường dẫn icon của menu option

    	        // Chức năng Hint tạo dấu chấm hỏi ở mỗi option để hướng dẫn người dùng */

    	        'hints'              => array(

    	            'icon'          => 'icon-question-sign',

    	            'icon_position' => 'right',

    	            'icon_color'    => 'lightgray',

    	            'icon_size'     => 'normal',

    	            'tip_style'     => array(

    	                'color'   => 'light',

    	                'shadow'  => true,

    	                'rounded' => false,

    	                'style'   => '',

    	            ),

    	            'tip_position'  => array(

    	                'my' => 'top left',

    	                'at' => 'bottom right',

    	            ),

    	            'tip_effect'    => array(

    	                'show' => array(

    	                    'effect'   => 'slide',

    	                    'duration' => '500',

    	                    'event'    => 'mouseover',

    	                ),

    	                'hide' => array(

    	                    'effect'   => 'slide',

    	                    'duration' => '500',

    	                    'event'    => 'click mouseleave',

    	                ),

    	            ),

    	        ) // end Hints

    	    );

    	}



	    /**

	    Thiết lập khu vực Help để hướng dẫn người dùng

	    **/

	    public function setHelpTabs() {

	     

	        // Custom page help tabs, displayed using the help API. Tabs are shown in order of definition.

	        $this->args['help_tabs'][] = array(

	            'id'      => 'redux-help-tab-1',

	            'title'   => __( 'Theme Information 1', 'thachpham' ),

	            'content' => __( '<p>This is the tab content, HTML is allowed.</p>', 'thachpham' )

	        );

	     

	        $this->args['help_tabs'][] = array(

	            'id'      => 'redux-help-tab-2',

	            'title'   => __( 'Theme Information 2', 'thachpham' ),

	            'content' => __( '<p>This is the tab content, HTML is allowed.</p>', 'thachpham' )

	        );

	     

	        // Set the help sidebar

	        $this->args['help_sidebar'] = __( '<p>This is the sidebar content, HTML is allowed.</p>', 'thachpham' );

	    }



	    /**

	    Thiết lập từng phần trong khu vực Theme Options

	    mỗi section được xem như là một phân vùng các tùy chọn

	    Trong mỗi section có thể sẽ chứa nhiều field

	    **/

	    public function setSections() {

	     

            // cau hinh chung Section

            $this->sections[] = array(

                'title'  => __( 'Cấu hình chung', 'mychild' ),

                'desc'   => __( 'All of settings for linh tinh on this theme.', 'mychild' ),

                'icon'   => 'el-icon-home',

                'fields' => array(

                    // Mỗi array là một field

                    array(

                        'id'       => 'chat-on',

                        'type'     => 'switch',

                        'title'    => __( 'Enable Chat', 'mychild' ),

                        'compiler' => 'bool', // Trả về giá trị kiểu true/false (boolean)

                        'desc'     => __( 'Do you want to use chat?', 'mychild' ),

                        'on' => __( 'Enabled', 'mychild' ),

                        'off' => __('Disabled')

                    ),

                 

                    array(

                        'id'       => 'chat-script',

                        'type'     => 'textarea',

                        'title'    => __( 'Chèn script chat online', 'mychild' ),

                        'desc'     => __( 'Chèn script chat online', 'mychild' ),

                    )

                   

                )

            ); // end section
    

            // Header Section

            $this->sections[] = array(

                'title'  => __( 'Header', 'mychild' ),

                'desc'   => __( 'All of settings for header on this theme.', 'mychild' ),

                'icon'   => 'el-icon-home',

                'fields' => array(

                    // Mỗi array là một field

                    array(

                        'id'       => 'logo-on',

                        'type'     => 'switch',

                        'title'    => __( 'Enable Image Logo', 'mychild' ),

                        'compiler' => 'bool', // Trả về giá trị kiểu true/false (boolean)

                        'desc'     => __( 'Do you want to use image as a logo?', 'mychild' ),

                        'on' => __( 'Enabled', 'mychild' ),

                        'off' => __('Disabled')

                    ),

                 

                    array(

                        'id'       => 'logo-image',

                        'type'     => 'media',

                        'title'    => __( 'Logo Image', 'mychild' ),

                        'desc'     => __( 'Image that you want to use as logo', 'mychild' ),

                    ),

                    array(

                        'id'       => 'select_test',

                        'type'     => 'select',

                        'compiler' => 'bool',

                        'options'  => array(

                                '1' => 'Opt 1',

                                '2' => 'Opt 2',

                                '3' => 'Opt 3'

                            ),

                        'title'    => __( 'Select Test', 'mychild' ),

                        'desc'     => __( 'Image that you want to use as logo', 'mychild' ),

                    ),

                )

            ); // end section

            // Liên hệ Section

            $this->sections[] = array(

                'title'  => __( 'Liên hệ sale', 'mychild' ),

                'desc'   => __( 'Liên hệ', 'mychild' ),

                'icon'   => 'el-icon-home',

                'fields' => array(

                    // Mỗi array là một field

                    array(

                        'id'       => 'contact-phone',

                        'type'     => 'text',

                        'title'    => __('Số điện thoại hotline', 'mychild'),

                        'subtitle'    => __('Số điện thoại hotline', 'mychild'),

                        'default'  => '0983733328'

                    ),

                 

                    array(

                        'id'       => 'contact-address',

                        'type'     => 'text',

                        'title'    => __('Địa chỉ văn phòng', 'mychild'),

                        'subtitle'    => __('Địa chỉ văn phòng', 'mychild'),

                        'default'  => '0983733328'

                    ),

                    array(

                        'id'       => 'contact-email',

                        'type'     => 'text',

                        'title'    => __('Địa chỉ thư điện tử (email)', 'mychild'),

                        'subtitle'    => __('Địa chỉ thư điện tử (email)', 'mychild'),

                        'default'  => '0983733328'

                    ),

                    array(

                        'id'       => 'contact-website',

                        'type'     => 'text',

                        'title'    => __('Địa chỉ website', 'mychild'),

                        'subtitle'    => __('Địa chỉ website', 'mychild'),

                        'default'  => '0983733328'

                    ),

                 

                    

                    array(

                        'id'               => 'contact-tenduan',

                        'type'             => 'text',

                       'title'    => __('Tên dự án', 'mychild'),

                        'subtitle'    => __('Tên dự án', 'mychild'),

                        'default'          => 'Tên dự án',

                        'args'   => array(

                            'teeny'            => true,

                            'textarea_rows'    => 10

                        )

                    ),            

                    array(

                        'id'               => 'contact-motangan',

                        'type'             => 'editor',

                       'title'    => __('Mô tả ngắn dự án', 'mychild'),

                        'subtitle'    => __('Mô tả ngắn dự án', 'mychild'),

                        'default'          => 'Mô tả ngắn dự án',

                        'args'   => array(

                            'teeny'            => true,

                            'textarea_rows'    => 10

                        )

                    ),

                       

                    array(

                        'id'               => 'contact-tencty',

                        'type'             => 'editor',

                       'title'    => __('Tên công ty', 'mychild'),

                        'subtitle'    => __('Tên công ty', 'mychild'),

                        'default'          => 'Tên công ty',

                        'args'   => array(

                            'teeny'            => true,

                            'textarea_rows'    => 10

                        )

                    ),

                 

                    

                )

            ); // end section

	        // Homapage Section

	        $this->sections[] = array(

	            'title'  => __( 'Homepage', 'mychild' ),

	            'desc'   => __( 'All of settings for homepage on this theme.', 'mychild' ),

	            'icon'   => 'el-icon-home',

	            'fields' => array(

	                // Mỗi array là một field

	                array(

	                    'id'       => 'banner_switch',

	                    'type'     => 'switch',

	                    'title'    => __( 'Enable Banner', 'mychild' ),

	                    'compiler' => 'bool', // Trả về giá trị kiểu true/false (boolean)

	                    'desc'     => __( 'Do you want to use banner in homepage?', 'mychild' ),

	                    'on' => __( 'Enabled', 'mychild' ),

	                    'off' => __('Disabled')

	                ),

	             

	                array(

	                    'id'       => 'banner-image',

	                    'type'     => 'media',

	                    'title'    => __( 'Banner Image', 'mychild' ),

	                    'desc'     => __( 'Image that you want to use as banner', 'mychild' ),

	                ),



                    array(

                        'id'       => 'banner-link',

                        'type'     => 'text',

                        'title'    => __('Banner Link', 'mychild'),

                        'subtitle' => __('Đường link của banner', 'mychild'),

                        'desc'     => __('This is the description field, again good for additional info.', 'mychild'),

                        'validate' => 'url',

                        'msg'      => 'Error Url',

                        'default'  => 'http://google.com'

                    ),

	               

                    array(

                        'id'          => 'banner-slides',

                        'type'        => 'slides',

                        'title'       => __('Slides Options', 'mychild'),

                        'subtitle'    => __('Unlimited slides with drag and drop sortings.', 'mychild'),

                        'desc'        => __('This field will store all slides values into a multidimensional array to use into a foreach loop.', 'redux-framework-demo'),

                        'placeholder' => array(

                            'title'           => __('This is a title', 'redux-framework-demo'),

                            'description'     => __('Description Here', 'redux-framework-demo'),

                            'url'             => __('Give us a link!', 'redux-framework-demo'),

                        ),

                    ),



                    array(

                        'id'       => 'banner-price',

                        'type'     => 'text',

                        'title'    => __('Giá từ', 'mychild'),

                        'default'  => 'Liên hệ'

                    ),

                    array(

                        'id'       => 'banner-vitri',

                        'type'     => 'text',

                        'title'    => __('Vị trí của dự án', 'mychild'),

                        'default'  => 'Đường Hàm Nghi, P.Cầu Diễn, Q.Nam Từ Liêm, TP.Hà Nội'

                    ),

                    array(

                        'id'       => 'banner-dien-tich',

                        'type'     => 'text',

                        'title'    => __('Diện tích từ -> đến', 'mychild'),

                        'default'  => '68m2 - 124m2'

                    ),

                    array(

                        'id'       => 'banner-date-bangiao-theo-quy',

                        'type'     => 'text',

                        'title'    => __('Thời gian bàn giao(tính theo quý)', 'mychild'),

                        'default'  => 'Quý IV năm 2018'

                    ),

                    array(

                        'id'          => 'banner-date-bangiao-theo-ngay',

                        'type'        => 'date',

                        'date-format' => 'yy-mm-dd',

                        'title'       => __('Thời gian bàn giao', 'mychild'), 

                        'subtitle'    => __('Chọn ngày để đếm ngược, bỏ trống thì sẽ k hiện đếm ngược', 'mychild'),

                        'desc'        => __('thời gian bàn giao dự án', 'mychild'),

                        'placeholder' => 'Click to enter a date'

                    ),



                    array(

                        'id'          => 'homepage_loiich',

                        'type'        => 'slides',

                        'title'       => __('Lợi ích', 'mychild'),

                        'subtitle'    => __('Lợi ích', 'mychild'),

                        'desc'        => __('Lợi ích', 'mychild'),

                        'placeholder' => array(

                            'title'           => __('This is a title', 'redux-framework-demo'),

                            'description'     => __('Description Here', 'redux-framework-demo'),

                            'url'             => __('Give us a link!', 'redux-framework-demo'),

                        ),

                    ),

	            )

	        ); // end section

	     

	    }

    	 

    }

    /* Kích hoạt class ThachPham_Theme_Options vào Redux Framework */

    global $reduxConfig;

    $reduxConfig = new ThachPham_Theme_Options();

}