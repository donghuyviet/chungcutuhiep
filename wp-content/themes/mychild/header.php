<?php 

   /* $debug =1;

    if($debug == 1){

            global $tp_options;

        echo '<pre>tp_options';

        print_r($tp_options);

        echo '</pre>';

    }*/
    global $tp_options;
 ?>

<!DOCTYPE html>

<html  prefix="og: http://ogp.me/ns#" <?php language_attributes(); ?> >

    <head>

        <meta charset="<?php bloginfo( 'charset' ); ?>">

        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <?php if(!empty($tp_options['logo-image']['url'])): ?>    
        <link rel="icon" type="image/png" href="<?php echo $tp_options['logo-image']['url']; ?>" sizes="32x32">
        <?php endif; ?>
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->

        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->

        <!--[if lt IE 9]>

        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>

        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>

        <![endif]-->

        <!-- start wp_head -->

        <?php wp_head(); ?>

        <!-- end wp_head -->

        <style type="text/css">

            .adv-right .adv-hotline{

            background: #fff url(<?php echo get_stylesheet_directory_uri().'/res/'; ?>goldenfield/wp-content/uploads/2016/08/v31_ic.png) left 0 center no-repeat;

            }

            .adv-right .dowload-now{

            background: #fff url(<?php echo get_stylesheet_directory_uri().'/res/'; ?>goldenfield/wp-content/uploads/2016/08/deal_ctsp_v222cc_btn.png) left 4.5px center no-repeat;

            }

            .list-item.col-md-12.no-padding {

            padding: 20px 10px 20px 10px !important;

            }

        </style>

    </head>

    <?php global $tp_options; ?>

    <body <?php body_class(); ?> >

        <div class="wrapper">

        <a class="back-to-top" href="#"></a>

        <header>

            <div class="header-top">

                <div class="container">

                    <div class="row">

                        <div class="col-md-4 logo">

                            <a href="/">  

                            <?php $sitename = get_bloginfo( 'sitename' ); ?>

                            <?php if ( $tp_options['logo-on'] == 1 ) : ?>

                            <img src="<?php echo $tp_options['logo-image']['url']; ?>" alt="<?php echo $sitename; ?>"  title="<?php echo $sitename; ?>" class="img-responsive">

                            <?php else : ?> 

                            <?php 

                                printf('%1$s',get_bloginfo( 'sitename' ) );

                                ?>

                            <?php endif; ?>

                            </a>

                        </div>

                        <div class="col-md-4 ul-header hidden-xs">

                            <?php 

                                wp_nav_menu(

                                    array(

                                        'theme_location' => 'menu_header',

                                        'container'      => false,

                                        'menu_id'        => '',

                                        'menu_class'     => '',

                                        'fallback_cb'    => '',

                                    )

                                );

                                ?>

                        </div>

                        <div class="col-md-4 hidden-xs">

                            <div class="header-right">

                                <!-- <form method="get" id="searchform-header" action="goldenfield"> -->

                                <!-- <button class="search-button" type="submit" value="Search"></button>   

                                    <input type="text" id="s" name="s" value="" onfocus="if (this.value == 'Tìm kiếm...') {this.value = '';}" onblur="if (this.value == '') {this.value = 'Tìm kiếm...';}"  /> -->

                                <!--    <input type="text" id="s" name="s" class="form-control" value=""  placeholder="Tìm Kiếm...">

                                    </form> -->

                                <div class="search">

                                    <form method="get" id="searchform-header" action="<?php echo site_url(); ?>">

                                        <span class="search-click">Send</span>

                                        <button type="submit" class="btn-search btn">Tìm Kiếm</button>

                                        <input type="text" id="s" name="s" value="" class="form-control input-search" placeholder="Nhập nội dung tìm kiếm">

                                    </form>

                                </div>

                                

                                <!-- <div class="search">

                                    <button type="submit" class="btn-search btn">Send</button>

                                    <input type="text" id="s" name="s" value="" class="form-control input-search" placeholder="Nhập nội dung tìm kiếm">

                                    

                                    </div> -->                              

                                <div class="modal-ntvr">

                                    <button type="button" class="form-control btn-nhantuvanrieng" data-toggle="modal" data-target="#nhantuvanrieng">Nhận tư vấn riêng</button>

                                    <div id="nhantuvanrieng" class="modal fade" role="dialog">

                                        <div class="modal-dialog">

                                            <button type="button" class="close" data-dismiss="modal"></button>

                                            <!-- Modal content-->

                                            <div class="modal-content">

                                                <h3 style="text-align:center;">Đăng ký nhận tư vấn</h3>

                                                <div class="logo-modal">

                                                   <?php $sitename = get_bloginfo( 'sitename' ); ?>

                                                   <?php if ( $tp_options['logo-on'] == 1 ) : ?>

                                                   <img src="<?php echo $tp_options['logo-image']['url']; ?>" alt="<?php echo $sitename; ?>"  title="<?php echo $sitename; ?>" class="img-responsive">

                                                   <?php else : ?> 

                                                   <?php 

                                                       printf('%1$s',get_bloginfo( 'sitename' ) );

                                                       ?>

                                                   <?php endif; ?>

                                                </div>

                                                <?php echo do_shortcode('[ninja_form id=9]'); ?>

                                               

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <?php if ( $tp_options['banner_switch'] == 1 ) : ?>



            <div class="banner hidden-xs">

                <div class="container">
                

                    <div class="row">

                        <a href="<?php

                            $banner_link  = $tp_options['banner-link'];

                            if(!empty($banner_link) ){

                                    echo $banner_link;

                            }else{

                                echo '#';

                            } ?>">

                        <img src="<?php echo $tp_options['banner-image']['url']; ?>"  class="img-responsive" >

                        </a>

                    </div>

                </div>

            </div>

            <?php endif; ?>

            <div class="nav-header hidden-xs">

                <div class="container">

                    <div class="row">

                        <div class="navbar" role="navigation">

                            <div class="navbar-header">

                                <button class="navbar-toggle" data-target="#navbar-collapse-1" data-toggle="collapse" type="button">

                                <span class="icon-bar"></span>

                                <span class="icon-bar"></span>

                                <span class="icon-bar"></span>

                                </button>

                            </div>

                            <div class="navbar-collapse collapse" id="navbar-collapse-1">

                                <div class="menu-menu_header-container">

                                    <?php 

                                        wp_nav_menu(

                                            array(

                                                'theme_location' => 'menu_primary',

                                                'container'      => false,

                                                'menu_id'        => 'menu-menu_header',

                                                'menu_class'     => 'nav navbar-nav',

                                                'fallback_cb'    => '',

                                            )

                                        );

                                        ?>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div class="breacum-mobile">

            </div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-93009289-1', 'auto');
  ga('send', 'pageview');

</script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P57LF7V');</script>
<!-- End Google Tag Manager -->

        </header>