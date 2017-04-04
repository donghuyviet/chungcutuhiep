<?php global $tp_options; ?>
<!-- start  side bar here -->
<div class="col-md-3 section2-right hidden-xs">
	<!-- start tai lieu -->
	<div class="deal_content_right deal_ct_sp_v2">
		<div class="box_hl_15_build box_hl_15_build_project">
			<div class="box_hl_15_b_boxtop">
				<div class="box_hl_15_b_boxtop_title">
					<i class="v2_ic"></i>
					<span>Tài liệu dự án <br/></span>
					<div class="c"></div>
					<div class="box_hl_15_b_boxtop_textnote">Chính sách, hợp đồng mẫu của chủ đầu tư, Bản vẽ mặt bằng căn hộ... và nhiều tài liệu khác</div>
				</div>
				<input type="hidden" value="456" id="id_project_hl"/>
				<div class="matbang_box_thamkhao_form" id="form_typesubmit12">
					<form class="form-dky-thongbaolich" action="" method="POST">
						<div class="step_action step_down0 active">
							<input style="height: 60px;line-height: inherit;" class="mbb_tk_btn btn_download" class="btn_download" id="btn_startdownloadtailieu" name="dangky" type="submit" value="Tải Về" />

						</div>
						<div class="step_action step_down1 ">
							<div class="step_action_lbl">
								<div class="step_action step_lbl1 active">
									Nhập thông tin để nhận tài liệu
								</div>
								
							</div>
							<div class="step_action_input">
								<div class="step_action step_input1 active">
									<?php echo do_shortcode('[ninja_form id=4]'); ?>
								</div>
								
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
						<?php if(!empty($tp_options['contact-phone'])): ?>
						<a href="tel:<?php echo $tp_options['contact-phone']; ?>" class="info_link">Hotline: <span><?php echo '0'. number_format($tp_options['contact-phone'], 0, ' ',  ' '); ?></span></a>
						<?php endif; ?>
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
			'posts_per_page  '=>'5',
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
				<?php $count = 0; ?>
				<!-- the loop -->
				<?php while ( $the_query->have_posts() && $count < 3 ) : $the_query->the_post(); ?>
					
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

				<?php $count++;endwhile; ?>
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

				<p class="title-dowload-last">Nhận tư vấn chi tiết <br></p>

			</div>
			<p>Cam kết bảo vệ thông tin khách hàng, Đưa thông tin chính xác mới nhất, không làm phiền..</p>
			<?php echo do_shortcode('[ninja_form id=6]'); ?>
		</form>
		<!--  -->
	</div> <!-- end  nhan chi tiet -->
</div>	<!-- end  side bar here -->