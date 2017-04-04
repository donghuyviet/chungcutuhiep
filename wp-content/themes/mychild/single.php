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

			<!-- start slide -->

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

									

									<img src="<?php echo esc_url( $img_src ); ?>"" alt="">

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

									<!-- start content -->

									<div class="col-md-12 no-padding">

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

									</div>

								</div> <!-- end content -->





							</div>

						</div> <!-- end left col -->

						





						<!-- start  side bar here -->

						<?php get_sidebar(); ?>

							<!-- end  side bar here -->

					</div> <!-- end .row -->

				</div> <!-- end container -->

			</div> <!-- end .section2 -->



			<?php get_template_part('template-loiich'); ?>

			<?php get_template_part('template-session4'); ?>

			<?php get_template_part('template-cothebanquantam'); ?>

			<?php get_template_part('template-menumobile'); ?>	

		</div>

	</div>



<?php get_footer(); ?>