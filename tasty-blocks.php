<?php
/**
 * Plugin Name: Tasty Digital Blocks
 * Plugin URI: https://github.com/tastyDigital/Tasty-Digital-Blocks
 * Description: Tasty Glutenberg blocks
 * Version: 1.1
 * Author: Toby Trembath
 * Author URI: https://tastydigital.com
 *
 * @category Gutenberg
 * @author Tasty Digital
 * @version 1.0
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;


function gluten_add_new_image_size() {
    add_image_size( 'logotype', 1200, 36, false );
	add_image_size( 'homepage-splash', 1000, 1000, true );
}
add_action( 'after_setup_theme', 'gluten_add_new_image_size' );

function tasty_blocks_editor_assets(){
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	// Scripts.
	wp_enqueue_script(
		'tasty-blocks-js', // Handle.
		$url . '/build/index.js',
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-block-editor' ]
	);
	// Styles.
	wp_enqueue_style(
		'tasty-blocks-editor-css', // Handle.
		$url . '/build/editor.css',
		array( 'wp-edit-blocks' )
	);
} // End function tasty_block_editor_assets().
// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'tasty_blocks_editor_assets' );

function tasty_blocks_assets(){
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	wp_enqueue_style(
		'tasty-blocks-frontend-css', // Handle.
		$url . '/build/style.css'
	);
}
// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'tasty_blocks_assets' );
