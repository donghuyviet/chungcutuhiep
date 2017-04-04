<?php

/**



 * Template name: Trang chủ chủ



**/

?>

<?php get_header(); ?>

<?php    global $tp_options; ?>

<div class="zone-content container full-section">

	<div class="row">

		<div class="setion1">

			<div class="container">

				<div class="row">

					<div class="col-md-4 no-padding section1-left">

						<div class="section1-left-inner">

							<div class="infor">

								<span>Giá từ:</span>

								<span class="price"><?php

										$banner_price  = $tp_options['banner-price'];

										if (!empty( $banner_price) ){

											echo $banner_price;

										}else{

											echo 'Liên hệ';

										}

								 ?></span>

							</div>

							<div class="infor">

								<span>Vị trí:</span>

								<span class="content"><?php

										$banner_vitri  = $tp_options['banner-vitri'];

										if (!empty( $banner_vitri) ){

											echo $banner_vitri;

										}else{

											echo '-';

										}

								 ?></span>

							</div>

							<div class="infor">

								<span class="">Diện tích:</span>

								<span class=""><?php

										$banner_dien_tich  = $tp_options['banner-dien-tich'];

										if (!empty( $banner_dien_tich) ){

											echo $banner_dien_tich;

										}else{

											echo '-';

										}

								 ?></span>

							</div>

							<div class="box_countdown hidden-xs">

								<div class="title">

									<span class="pull-left">Thời gian bàn giao căn hộ</span>

									<span class="pull-right"><?php

										$banner_date_bangiao_theo_quy  = $tp_options['banner-date-bangiao-theo-quy'];

										if (!empty( $banner_date_bangiao_theo_quy) ){

											echo $banner_date_bangiao_theo_quy;

										}else{

											echo '-';

										}

								 ?></span>

								</div>

								<div class="content">

									<?php 

										//

										//12/16/2018

										$banner_date_bangiao_theo_ngay = $tp_options['banner-date-bangiao-theo-ngay'];

										if(!empty($banner_date_bangiao_theo_ngay)){

											$datetime1 = new DateTime();

											$tmp = explode('/', $banner_date_bangiao_theo_ngay);

											

											$date_yy_mm_dd = $tmp[2].'-'.$tmp[0].'-'.$tmp[1];

											

											$datetime2 = new DateTime($date_yy_mm_dd);



											$difference = $datetime1->diff($datetime2);



											$years  = $difference->y;

											$months =  $difference->m;

											$days =  $difference->d;

											$years  =$years<10?'0'.$years:$years;

											$months  =$months<10?'0'.$months:$months;

											$days  =$days<10?'0'.$days:$days;

											

											

										}

									 ?>

									<div id="year_month">

										<div class="year">

											<div class="numbers">

												<?php 

													

													$years_strs = str_split($years);

													

													foreach ($years_strs as $years_str) :

												 ?>

												<div class="number"><span id="year_chuc"><?php echo $years_str; ?></span><div class="gach_nuber"></div></div>

												<?php endforeach; ?>

											</div>

											<div class="text">

												Năm

											</div>

										</div>

										<div class="month">

											<div class="numbers">

												<?php 

													$month_strs = str_split($months);

													foreach ($month_strs as $month_str) :

												 ?>

												<div class="number"><span id="year_chuc"><?php echo $month_str; ?></span><div class="gach_nuber"></div></div>

												<?php endforeach; ?>

											</div>

											<div class="text">

												Tháng

											</div>

										</div>

										<div class="day">

											<div class="numbers">

											<?php 

												$day_strs = str_split($days);

												foreach ($day_strs as $day_str) :

											 ?>

											<div class="number"><span id="year_chuc"><?php echo $day_str; ?></span><div class="gach_nuber"></div></div>

											<?php endforeach; ?>

											</div>

											<div class="text">

												Ngày

											</div>

										</div>

									</div>

									

								</div>

							</div>

							<?php if(!empty($tp_options['contact-phone'])): ?>

							<a href="tel:<?php echo $tp_options['contact-phone']; ?>" class="info_link">Hỏi mua căn hộ: <span><?php echo $tp_options['contact-phone']; ?></span></a>

							<?php endif; ?>

							<div class="info_time">

								Cập nhật: <span><?php $REDUX_last_saved   = $tp_options['REDUX_last_saved']; echo date( 'd-m-Y',$REDUX_last_saved);?></span>

							</div>

						</div>

					</div>

					<?php 

						$banner_slides = $tp_options['banner-slides'];

						if(isset($banner_slides) && is_array($banner_slides) && !empty($banner_slides)):

					 ?>

					<div class="col-md-8 no-padding section1-right">

						<div id="myCarousel" class="carousel slide" data-ride="carousel">

							<div class="carousel-inner" role="listbox">

								<?php 

									$count = 0;

									foreach ($banner_slides as $banner_slide):

										$attachment_id = $banner_slide['attachment_id'];

										$img_src = wp_get_attachment_image_url( $attachment_id, 'slider_home' );

										$img_srcset = wp_get_attachment_image_srcset( $attachment_id, 'medium' );

										$img_sizes = wp_get_attachment_image_sizes( $attachment_id, 'medium' );

										

										

								 ?>

								<div class="item <?php echo $count==0?'active':''; ?>">

									

									<img src="<?php echo esc_url( $img_src ); ?>">

								</div>

								<?php $count++;endforeach; ?>

							</div>

						</div>

					</div>

					<?php endif;//slider ?>

			

				</div>

			</div> <!-- end slider -->



				<div class="section2">

					<div class="container">

						<div class="row">

							<!-- end left col -->

							<div class="col-md-9 no-padding section2-left">

								<div class="section2-left-inner">

									<div class="detail-section2">

										<p class="section2-left_title">

											<!-- <span style="font-family: helvetica, arial, sans-serif; font-size: 14pt;"><strong><span style="color: #000000;">Thông tin dự án Golden Field Mỹ Đình</span></strong></span> -->

										</p>

										<!-- start content -->

										<?php

											/* Start the Loop */

											while ( have_posts() ) : the_post();



												get_template_part( 'post-content', get_post_format() );



												the_post_navigation( array(

													'prev_text' => '<span class="screen-reader-text">' . __( 'Previous Post', 'twentyseventeen' ) . '</span><span aria-hidden="true" class="nav-subtitle">' . __( 'Previous', 'twentyseventeen' ) . '</span> <span class="nav-title"><span class="nav-title-icon-wrapper">' . twentyseventeen_get_svg( array( 'icon' => 'arrow-left' ) ) . '</span>%title</span>',

													'next_text' => '<span class="screen-reader-text">' . __( 'Next Post', 'twentyseventeen' ) . '</span><span aria-hidden="true" class="nav-subtitle">' . __( 'Next', 'twentyseventeen' ) . '</span> <span class="nav-title">%title<span class="nav-title-icon-wrapper">' . twentyseventeen_get_svg( array( 'icon' => 'arrow-right' ) ) . '</span></span>',

												) );



											endwhile; // End of the loop.

										?>

									</div> <!-- end content -->



									<div class="danhgia col-md-12 no-padding">

										<div class="v2_danhgia_new_show">

											<div class="v2_danhgia_ns_title">Đánh giá</div>

											<div class="v2_danhgia_ns_box">

												<div class="v2_danhgia_nsb_point">

													<div class="v2_danhgia_nsb_point_cus"><span itemprop="ratingValue">4.5</span>/5</div>

													<div class="v2_danhgia_nsb_point_start">

														<img src="<?php echo get_stylesheet_directory_uri().'/res/'; ?>goldenfield/wp-content/themes/HaiLong-Group/images/dg.png" class="img-responsive">

														<span class="v2_danhgia_nsb_point_start_total">(<span itemprop="ratingCount">1</span> đánh giá)</span>

														<div class="c"></div>

													</div>



												</div>

												<div class="v2_danhgia_nsb_list">

													<ul>

														<li>Giá: <span>4/5</span></li>

														<li>Vị trí, hạ tầng: <span>4/5</span></li>

														<li>Dịch vụ, tiện ích: <span>5/5</span></li>

														<li>Thiết kế căn hộ: <span>5/5</span></li>

														<li>Uy tín của chủ đầu tư: <span>5/5</span></li>

													</ul>

													<div class="c"></div>

												</div>

												<div class="v2_danhgia_nsb_link">

													<a onclick="showform_post(1)" href="javascript:void(0)" rel="nofollow">Đánh giá của bạn</a>

												</div>

												<div class="c"></div>

											</div>

										</div>

									</div>

								</div>

							</div> <!-- end left col -->

							





							<!-- start  side bar here -->

							<div class="col-md-3 section2-right hidden-xs">

								<!-- start tai lieu -->

								<div class="deal_content_right deal_ct_sp_v2">

									<div class="box_hl_15_build box_hl_15_build_project">

										<div class="box_hl_15_b_boxtop">

											<div class="box_hl_15_b_boxtop_title">

												<i class="v2_ic"></i>

												<span>Tài liệu dự án <br/> Goldenfield</span>

												<div class="c"></div>

												<div class="box_hl_15_b_boxtop_textnote">Chính sách, hợp đồng mẫu của chủ đầu tư, Bản vẽ mặt bằng căn hộ... và nhiều tài liệu khác</div>

											</div>

											<input type="hidden" value="456" id="id_project_hl"/>

											<div class="matbang_box_thamkhao_form" id="form_typesubmit12">

												<form class="form-dky-thongbaolich" action="" method="POST">

													<div class="step_action step_down0 active">

														<input class="mbb_tk_btn btn_download" class="btn_download" id="btn_startdownloadtailieu" name="dangky" type="submit" value="Tải Về" />



													</div>

													<div class="step_action step_down1 ">

														<div class="step_action_lbl">

															<div class="step_action step_lbl1 active">

																Nhập email của bạn

															</div>

															<div class="step_action step_lbl2">

																Nhập số điện thoại của bạn

															</div>

														</div>

														<div class="step_action_input">

															<div class="step_action step_input1 active">

																<input class="input_mt_action" id="emal_baogia" name="your-email" type="email" placeholder="Nhập email của bạn" required />



																<a href="javascript:void(0)" rel="nofollow" class="btn_mt_action" id="email-next" onclick="subscribeemail2();"></a>

															</div>

															<div class="step_action step_input2">

																<input class="input_mt_action" id="phone_baogia" name="your-phone" type="number" placeholder="Nhập SĐT của bạn" required />



																<a href="javascript:void(0)" rel="nofollow" class="btn_mt_action" id="btn_phone_baogia" onclick="subscribesdt2();"></a>

															</div>

															<div class="step_action step_input3">

																<input class="mbb_tk_btn btn_download" class="deal_ctsp_v2cc_btn" id="click_dowload_tailieu_duan" name="dangky" type="submit" value="Tải Về" />



															</div>

														</div>

														<div class="step_action_footer">

															<div class="step_action step_footer1 active">

																<div class="step_footer_left">

																	<span class="red">*</span> Bộ tài liệu đầy đủ về dự án sẽ được gửi qua Email

																</div>

																<div class="step_footer_right">

																	1/3

																</div>

															</div>

															<div class="step_action step_footer2">

																<div class="step_footer_left">

																	<span class="red">*</span> Vui lòng cung cấp thông tin để tránh spam

																</div>

																<div class="step_footer_right">

																	2/3

																</div>

															</div>



														</div>

													</div>

													<div class="step_action step_down2">

														<div style="line-height: normal;padding: 8px 0;height: auto; margin-bottom: 10px;" class="show_notice_sus3">

															<span class=""></span>

															<div class="" style="    text-align: left;margin-left: 5px;float: left;font-size: 13px;">Thành công! Bạn vui lòng check mail.

																<div style="font-size: 10px;">Vui lòng kiểm tra thêm trong hòm thư rác (Spam)</div>

															</div>

															<div class="c"></div>

														</div>

													</div>

												</form>





												<!--                                                   -->

												<div class="c"></div>

											</div>

										</div>

										<div class="box_hl_15_b_boxbot" style="position: relative">

											<i class="box_hl_15_b_boxbot_icon"></i>

											<div class="box_hl_15_b_boxbot_text">

												<div class="box_hl_15_b_boxbot_text_top">

													Hotline: <b>(+84) 0868 36 5555</b>

												</div>

												<div class="box_hl_15_b_boxbot_text-1">

													Tư vấn ngay lập tức mọi nhu cầu của bạn

												</div>

											</div>

											<div class="c"></div>

										</div>

									</div>

								</div> <!-- end  tai lieu -->



								<!-- start tin tuc -->

								<?php 

									$args = array(

										'post_type' => 'post',

										'orderby '=>'desc',

										'posts_per_page  '=>'10',

										'tax_query' => array(

											'relation' => 'AND',

											array(

												'taxonomy' => 'category',

												'field'    => 'slug',

												'terms'    => array( 'tin-tuc' ),

											)							

										),

									);

									$the_query = new WP_Query( $args );



									

								 ?>



								<div class="list-new-index">

									<h3 class="title-list-new-index">Tin tức</h3>

									<div class="box-content">

										<?php if ( $the_query->have_posts() ) : ?>



											<!-- pagination here -->



											<!-- the loop -->

											<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

												

												<div class="media row">

													<div class="col-xs-5">

														<a class="media-left float-left" href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>

													</div>

													<div class="col-xs-7">

														<div class="media-body float-left">

															<a class="media-heading" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>

														</div>

													</div>

												</div>



											<?php endwhile; ?>

											<!-- end of the loop -->



											<!-- pagination here -->



											<?php wp_reset_postdata(); ?>



										<?php else : ?>

											<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>

										<?php endif; ?>



										

									</div>

								</div> <!-- end tin tuc -->



								<!-- start nhan chi tiet -->

								<div class="dowload-last" id="dowload-last-link">

									<form class="form-download1" action="" method="POST">

										<div class="box-heading">



											<p class="title-dowload-last">Nhận tư vấn chi tiết <br> Golden Field</p>



										</div>

										<p>Cam kết bảo vệ thông tin khách hàng, Đưa thông tin chính xác mới nhất, không làm phiền..</p>

										<div class="dowload-last-input1"><input id="name-downow" class="form-control" name="your-name" type="text" placeholder="Họ và tên" required /></div>

										<div class="dowload-last-input2"><input id="email-downow" class="form-control" name="your-email" type="text" placeholder="Email" required /></div>

										<div class="dowload-last-input3"><input id="phone-downow" class="form-control" name="your-phone" type="number" placeholder="Số điện thoại" required  /></div>



										<!-- <a id="link-dow-now" href="javascript:void(0)" rel="nofollow" onclick="subscribe_downow()" class="dow-now">Đăng Ký</a>-->

										<input id="link-dow-now" class="dow-now" name="dangky" type="button" onclick="subscribe_downow()" value="Đăng Ký" />

									</form>

									<!--  -->

								</div> <!-- end  nhan chi tiet -->

							</div>	<!-- end  side bar here -->

						</div> <!-- end .row -->

					</div> <!-- end container -->

				</div> <!-- end .section2 -->





										<!-- get section3 -->

										<?php

										$homepage_loiichs = $tp_options['homepage_loiich'];

										if(isset($homepage_loiichs) && is_array($homepage_loiichs) && !empty($homepage_loiichs)):

										?>

										<div class="section3 hidden-xs">;

											<div class="container">

												<div class="row">

													<div class="col-md-12 box-heading">

														<p class="title-section3">BẠN NHẬN ĐƯỢC GÌ KHI CHỌN CHÚNG TÔI</p>

													</div>

													<div class="box-content">

														<?php foreach ($homepage_loiichs as $homepage_loiich) : ?>

														<div class="col-md-3 col-sm-6 col-xs-12">

															<div class="item-section3">

																<div class="img-sc3">

																	<img src="<?php echo $homepage_loiich['image'] ?>">

																</div>

																<a><?php echo $homepage_loiich['title']; ?></a>

																

																<p><?php echo $homepage_loiich['description']; ?></p>

															</div>

														</div>

														<?php endforeach; ?>

													</div>

												</div>

											</div>

										</div>

										<?php endif;//lợi ích ?>



										<!--  start get section4 -->

										<div class="section4 hidden-xs" id="section4-id">

											<div class="container">

												<div class="row">

													<div class="hotline-section4">

														<div class="v2_f_boxleft">

															<div class="deal_ctsp_v2boxt">

																<div class="deal_ctsp_v2boxt_phone">

																	Gọi ngay&nbsp;<span>

																		<?php if(!empty($tp_options['contact-phone'])): ?>

																		<a href="tel:<?php echo $tp_options['contact-phone']; ?>" class="info_link"><span><?php echo '(+84)'.number_format( $tp_options['contact-phone'] , 0, ' ', ' ' ); ?></span></a>

																		<?php endif; ?> 

																	</span>

																</div>

																<div class="deal_ctsp_v2boxt_info">

																	<ul>

																		<li><div>Để có căn hộ view đẹp, hợp phong thủy</div></li>

																		<li><div>Giá bán CĐT và ưu đãi hấp dẫn nhất</li>

																		<li><div>Được tư vấn lựa chọn các gói vay có lãi suất thấp nhất, thời gian vay dài nhất</div></li>

																	</ul>

																</div>

															</div>

														</div>

														<div class="v2_f_boxright" id="f_boxright-link">

															<div class="v2_f_boxrightContent">

																<div class="v2_f_boxrightContentTit">Đừng bỏ lỡ những thông tin mới nhất về <?php

																	  if(!empty($tp_options['contact-tenduan'])):

																	  $contact_tenduan  = $tp_options['contact-tenduan'];

																	  echo $contact_tenduan;

																	  endif;

																?></div>

																<div class="v2_f_boxrightNoteTit_ul">

																	<ul>

																		<li>Giá bán - Chính sách - Tiến độ </li>

																		<li>Mặt bằng căn hộ</li>

																		<li>Hợp đồng mẫu</li>

																		<li>... và nhiều thông tin hữu ích khác</li>

																	</ul>

																	<div class="c"></div>

																</div>

																<form class="form-dungbolo" action="" method="POST">

																	<div class="v2_f_boxrightContent_form">

																		<div class="col-md-3 form-new-1">

																			<div class="form-new-left form-new-left-1"></div>

																			<input id="nhapten" class="form-control" name="your-name" type="text" placeholder="Nhập tên của bạn" required />



																		</div>

																		<div class="col-md-3 form-new-2">

																			<div class="form-new-left form-new-left-2"></div>

																			<input id="nhapsdt" class="form-control" name="your-phone" type="number" placeholder="Nhập sđt của bạn" required />



																		</div>

																		<div class="col-md-3 form-new-3">

																			<div class="form-new-left form-new-left-3"></div>

																			<input id="nhapmail" class="form-control" name="your-email" type="text" placeholder="Nhập email của bạn" required />

																		</div>

																		<div class="col-md-3 btn-form-new">

																			<!-- <a id="link-form-new" href="javascript:void(0)" rel="nofollow" onclick="subscribe_form_new()">ĐĂNG KÝ</a> -->

																			<input id="link-form-new" class="" name="dangky" type="button" value="Đăng Ký" onclick="subscribe_form_new()" />

																		</div>

																	</div>

																</form>

																

															</div>

														</div>

													</div>	

												</div>

											</div>

										</div>

										<!--  start get section4 -->

				

				<?php 

					$args = array(

						'post_type' => 'post',

						'tax_query' => array(

							'relation' => 'AND',

							array(

								'taxonomy' => 'category',

								'field'    => 'slug',

								'terms'    => array( 'du-an-khac' ),

							)							

						),

					);

					$the_query = new WP_Query( $args );



					

				 ?>

				<!-- get section5 -->

				<div class="section5 hidden-xs">

					<div class="container">

						<div class="row">

							<p class="title-section5">Các dự án khác có thể bạn quan tâm</p>

							<div class="box-content">

								<?php if ( $the_query->have_posts() ) : ?>



									<!-- pagination here -->



									<!-- the loop -->

									<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

										<div class="col-md-3 col-sm-6 col-xs-12">

											<div class="item">

												<div class="img-item">

													<a href="<?php the_permalink(); ?>">

													<?php the_post_thumbnail(); ?>

													</a>

														<div class="address">

															<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">

																<?php the_title(); ?></a>

															</div>

														</div>

														<div class="text-item">

															<div class="name">

																<a class="a_title" href="goldenfield/panorama-nha-trang/" title=" <?php the_title(); ?>"> <?php the_title(); ?></a>

															</div>

															<div class="info">

																<div class="price"><?php echo wp_trim_words( get_the_excerpt() , 30, '...'); ?></div>

															</div>

														</div>

													</div>

										</div>

									<?php endwhile; ?>

									<!-- end of the loop -->



									<!-- pagination here -->



									<?php wp_reset_postdata(); ?>



								<?php else : ?>

									<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>

								<?php endif; ?>





							</div>

						</div>

					</div>

				</div>



												<div class="section6">

													<div class="col-md-12">

														<div class="sc6-top color-red">

															<a href="" data-toggle="modal" data-target="#sc6-red">TẢI TÀI LIỆU ĐẦY ĐỦ VỀ DỰ ÁN</a>

														</div>

														<div class="sc6-top color-blue">

															<a href="" data-toggle="modal" data-target="#sc6-blue">TẢI BẢNG GIÁ MỚI NHẤT</a>

														</div>

														<div class="sc6-top color-vag">

															<a href="" data-toggle="modal" data-target="#sc6-vag">ĐĂNG KÝ NHẬN LỊCH MỞ BÁN</a>

														</div>





														<div class="modal-sc6-top">

															<form class="form-tlduan-red" action="" method="POST">

																<div id="sc6-red" class="modal fade" role="dialog">

																	<div class="modal-dialog">

																		<button type="button" class="close" data-dismiss="modal"></button>

																		<!-- Modal content-->

																		<div class="modal-content">

																			<div class="dowload-last">

																				<div class="box-heading">

																					<p class="title-dowload-last">

																						Tài liệu dự án <br> GoldenField

																					</p>

																				</div>

																				<p>Vui lòng điền Đẩy đủ + Chính xác các thông tin <br> Thông tin bảo mật tuyệt đối</p>

																				<div class="input-red1" style="margin-bottom: 17px;">

																					<input class="form-control" id="name-modal-red" name="your-name" type="text" placeholder="Họ và Tên" required />



																				</div>

																				<div class="input-red2"  style="margin-bottom: 17px;">

																					<input class="form-control" id="email-modal-red" name="your-email" type="email" placeholder="Email" required />





																				</div>

																				<div class="input-red3"  style="margin-bottom: 17px;">

																					<input class="form-control" id="phone-modal-red" name="your-phone" type="number" placeholder="Số Điện Thoại" required/>

																				</div>

																				<input id="link-modal-red" class="dow-now" name="dangky" type="button" onclick="modal_red()" value="Đăng Ký" />

																				<!-- <a id="link-modal-red" href="javascript:void(0)" rel="nofollow" onclick="modal_red()" class="dow-now">Đăng ký</a>	 -->			

																			</div>

																		</div>

																	</div>

																</div>

															</form>



															<!--  -->

															<form class="form-banggia-blue" action="" method="POST">

																<div id="sc6-blue" class="modal fade" role="dialog">

																	<div class="modal-dialog">

																		<button type="button" class="close" data-dismiss="modal"></button>

																		<!-- Modal content-->

																		<div class="modal-content">

																			<div class="dowload-last">

																				<div class="box-heading">

																					<p class="title-dowload-last">

																						Bảng giá căn hộ <br> GoldenField

																					</p>

																				</div>

																				<p>Vui lòng điền Đẩy đủ + Chính xác các thông tin <br> Thông tin bảo mật tuyệt đối</p>

																				<div class="input-blue1" style="margin-bottom: 17px;">

																					<input class="form-control" id="name-modal-blue" name="your-name" type="text" placeholder="Họ và Tên" required />



																				</div>

																				<div class="input-blue2"  style="margin-bottom: 17px;">

																					<input class="form-control" id="email-modal-blue" name="your-email" type="email" placeholder="Email" required />



																				</div>

																				<div class="input-blue3"  style="margin-bottom: 17px;">

																					<input class="form-control" id="phone-modal-blue" name="your-phone" type="number" placeholder="Số Điện Thoại" required />





																				</div>

																				<input id="link-modal-blue" class="dow-now" name="dangky" type="button" onclick="modal_blue()"  value="Đăng Ký" />

																				<!-- <a id="link-modal-blue" href="javascript:void(0)" rel="nofollow" onclick="modal_blue()" class="dow-now">Đăng Ký</a> -->

																			</div>

																		</div>

																	</div>

																</div>

															</form>



															<!--  -->



															<form class="form-lichmoban-yellow" action="" method="POST">

																<div id="sc6-vag" class="modal fade" role="dialog">

																	<div class="modal-dialog">

																		<button type="button" class="close" data-dismiss="modal"></button>

																		<!-- Modal content-->

																		<div class="modal-content">

																			<div class="dowload-last">

																				<div class="box-heading">

																					<p class="title-dowload-last">

																						Nhận thông tin <br> Lịch mở bán

																					</p>

																				</div>

																				<p>Vui lòng điền Đẩy đủ + Chính xác các thông tin <br> Thông tin bảo mật tuyệt đối</p>

																				<div class="input-vag1" style="margin-bottom: 17px;">

																					<input class="form-control" id="name-modal-yellow" name="your-name" type="text" placeholder="Họ và Tên" required />



																				</div>

																				<div class="input-vag2"  style="margin-bottom: 17px;">

																					<input class="form-control" id="phone-modal-yellow" name="your-phone" type="number" placeholder="Số Điện Thoại" required />



																				</div>

																				<input id="link-modal-vag" class="dow-now" name="dangky" type="submit" onclick="modal_vag()" value="Đăng Ký" />



																				<!-- <a id="link-modal-vag" href="javascript:void(0)" rel="nofollow" onclick="modal_vag()" class="dow-now">Đăng ký</a> -->

																			</div>

																		</div>

																	</div>

																</div>

															</form>

															<!--  -->







														</div>

													</div>

													<div class="col-md-12">

														<div class="menu-menu_header-container">

															<?php 

															    wp_nav_menu(

															        array(

															            'theme_location' => 'menu_primary',

															            'container'      => false,

															            'menu_id'        => 'menu-menu_header-1',

															            'menu_class'     => 'nav-mobile',

															            'fallback_cb'    => '',

															        )

															    );

															    ?>

															

														</div>



		

	</div>

</div>				





</div>

</div>



<?php get_footer(); ?>