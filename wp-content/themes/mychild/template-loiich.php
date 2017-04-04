<?php 
global $tp_options;
 ?>


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