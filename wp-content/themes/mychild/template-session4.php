<?php 
global $tp_options;
 ?>
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
 						<style type="text/css">
 							.v2_f_boxrightContent nf-field {
 								    float: left;
 								    width: 30%;
 								}
 						</style>
 						<?php echo do_shortcode('[ninja_form id=11]'); ?>
 					</div>
 				</div>
 			</div>	
 		</div>
 	</div>
 </div>
 <!--  start get section4 -->