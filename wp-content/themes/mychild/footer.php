<?php global $tp_options; ?>

<footer>

    <div class="container footer-inner">

        <div class="row">

            <div class="col-md-3 logo-ft-left">

                <?php $sitename = get_bloginfo( 'sitename' ); ?>

                <?php if ( $tp_options['logo-on'] == 1 ) : ?>

                <img src="<?php echo $tp_options['logo-image']['url']; ?>" alt="<?php echo $sitename; ?>"  title="<?php echo $sitename; ?>" class="img-responsive">

                <?php else : ?> 

                <?php 

                    printf('%1$s',get_bloginfo( 'sitename' ) );

                    ?>

                <?php endif; ?>

                <br>

                

                <?php 

                    if (!empty($tp_options['contact-tencty'])) echo $tp_options['contact-tencty'];

                 ?>

            </div>

                <div class="col-md-5 intro-footer">

                    <h3 class="title-intro-footer">Giới thiệu</h3>

                    <div class="text-intro-footer">

                        <?php 

                            $contact_motangan  = $tp_options['contact-motangan'];

                            if(isset($contact_motangan)  && !empty($contact_motangan)){

                                echo $contact_motangan;

                            }

                         ?>

                    </div>

                </div>

                <div class="col-md-4">

                    <div class="ftbt-1">

                        <h3 class="title-intro-footer">Liên hệ</h3>

                        <div class="ul-ftbt"> 

                            <ul> 

                                <li>

                                    <i class="fa fa-map-marker" aria-hidden="true"></i>

                                        

                                        <?php 

                                            $contact_address  = $tp_options['contact-address'];

                                            if(isset($contact_address)  && !empty($contact_address)){

                                                echo $contact_address;

                                            }

                                         ?>

                                 </li> 

                                    <li>

                                        <i class="fa fa-mobile" aria-hidden="true"></i>

                                            <?php 

                                                $contact_phone  = $tp_options['contact-phone'];

                                                if(isset($contact_phone)  && !empty($contact_phone)){

                                                    echo $contact_phone;

                                                }

                                             ?>

                                        </li> 

                                        <li>

                                            <i class="fa fa-envelope" aria-hidden="true"></i>

                                            

                                            <?php 

                                                $contact_email  = $tp_options['contact-email'];

                                                if(isset($contact_email)  && !empty($contact_email)){

                                                    echo $contact_email;

                                                }

                                             ?> 

                                            <?php 

                                                $contact_website  = $tp_options['contact-website'];

                                               

                                             ?>

                                         </li> 

                                            <li>

                                                <i class="fa fa-globe" aria-hidden="true"></i>

                                                

                                                <a href="<?php if(isset($contact_website)  && !empty($contact_website)){

                                                        echo $contact_website;

                                                    } ?>" rel="nofollow"><?php if(isset($contact_website)  && !empty($contact_website)){

                                                        echo $contact_website;

                                                    } ?></a>

                                            </li> 

                                        </ul> 

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="adv-right">

                        <ul>

                            <li class="adv-hotline">

                                <div class="adv-hotline-inner">

                                    <p>Hotline</p>

                                    <p><a href="tel: <?php 

                                                $contact_phone  = $tp_options['contact-phone'];

                                                if(isset($contact_phone)  && !empty($contact_phone)){

                                                    echo $contact_phone;

                                                }

                                             ?>"><?php 

                                                $contact_phone  = $tp_options['contact-phone'];

                                                if(isset($contact_phone)  && !empty($contact_phone)){

                                                    echo '0'.number_format($contact_phone, 0, ' ', ' ');

                                                }

                                             ?></a></p>

                                </div>

                            </li>

                            <li class="dowload-now" data-toggle="modal" data-target="#myModal2">

                                <div class="dowload-now-inner" >

                                    <p>TẢI NGAY</p>

                                    <p>BẢNG GIÁ MỚI NHẤT</p>

                                </div>

                            </li>

                        </ul>

                    </div>

                    <div class="modal-adv">

                        <div id="myModal2" class="modal fade" role="dialog">

                            <div class="modal-dialog">

                                <button type="button" class="close" data-dismiss="modal"></button>

                                <div class="modal-content">

                                    <div class="dowload-last">

                                        <form class="form-download2" action="" method="POST">

                                            <div class="box-heading">

                                                <p class="title-dowload-last">

                                                    Báo Giá căn hộ <br> 

                                                </p>

                                            </div>

                                            <p>Nhận thông tin giá căn hộ, Quý khách vui lòng nhập thông tin chính xác <br> Mọi thông tin bảo mật tuyệt đối</p>

                                            <?php echo do_shortcode('[ninja_form id=10]'); ?>

                                        </form>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="adv-bottom">

                        <ul class="">
                            <li>
                                <a href="tel: <?php 

                                        $contact_phone  = $tp_options['contact-phone'];

                                        if(isset($contact_phone)  && !empty($contact_phone)){

                                            echo $contact_phone;

                                        }

                                     ?>">Gọi ngay</a>
                            </li>
                           
                            <li><a href="" class="btn-res2" data-toggle="modal" data-target="#myModal2">Đăng ký nhận báo giá</a></li>

                        </ul>

                    </div>

                </footer>

            </div>

            <?php wp_footer(); ?>

            <?php if ( $tp_options['chat-on'] == 1 ) {
                $script_chat = $tp_options['chat-script'];
                if(isset($script_chat)  && !empty($script_chat)){
                    echo $script_chat;
                }
            }

            ?>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P57LF7V"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

        </body>

        </html>