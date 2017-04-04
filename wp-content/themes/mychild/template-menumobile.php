<?php 
global $tp_options;
 ?>
 <!-- start section6 -->
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
 										Tài liệu dự án <br>
 									</p>
 								</div>
 								<p>Vui lòng điền Đẩy đủ + Chính xác các thông tin <br> Thông tin bảo mật tuyệt đối</p>
 								<?php echo do_shortcode('[ninja_form id=1]'); ?>
 								<!-- <a id="link-modal-red" href="javascript:void(0)" rel="nofollow" onclick="modal_red()" class="dow-now">Đăng ký</a>	 -->			
 							</div>
 						</div>
 					</div>
 				</div>
 			</form>

 			<form class="form-banggia-blue" action="" method="POST">
 				<div id="sc6-blue" class="modal fade" role="dialog">
 					<div class="modal-dialog">
 						<button type="button" class="close" data-dismiss="modal"></button>
 						<!-- Modal content-->
 						<div class="modal-content">
 							<div class="dowload-last">
 								<div class="box-heading">
 									<p class="title-dowload-last">
 										Bảng giá căn hộ <br>
 									</p>
 								</div>
 								<p>Vui lòng điền Đẩy đủ + Chính xác các thông tin <br> Thông tin bảo mật tuyệt đối</p>
 								<?php echo do_shortcode('[ninja_form id=7]'); ?>
 							</div>
 						</div>
 					</div>
 				</div>
 			</form>

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
 								<?php echo do_shortcode('[ninja_form id=8]'); ?>
 							</div>
 						</div>
 					</div>
 				</div>
 			</form>
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
 </div>	<!-- end section6 -->	