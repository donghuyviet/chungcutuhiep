<?php 
global $tp_options;
 ?>
 
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
 </div> <!-- end section5 -->