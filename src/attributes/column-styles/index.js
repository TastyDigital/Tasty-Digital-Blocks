const { __ } = wp.i18n;
/* we have taken padding out of background coloured columns container */
wp.blocks.registerBlockStyle( 'core/column', [
    {
        name: 'padded',
        label: __( 'Padded'),
        isDefault: true
    },
    {
        name: 'tight',
        label: __('Tight')
    }
]);