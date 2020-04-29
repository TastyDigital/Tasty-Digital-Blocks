<?php
/**
 * Plugin Name: Tasty Digital Blocks
 * Plugin URI: https://github.com/phpbits/my-custom-block
 * Description: Custom Glutenberg blocks
 * Version: 1.0
 * Author: Toby Trembath
 * Author URI: https://tastydigital.com
 *
 * @category Gutenberg
 * @author Tasty Digital
 * @version 1.0
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) exit;
function tasty_blocks_editor_assets(){
	$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	// Scripts.
	wp_enqueue_script(
		'tasty-blocks-js', // Handle.
		$url . '/build/index.js',
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ]
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
