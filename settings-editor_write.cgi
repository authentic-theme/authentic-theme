#!/usr/bin/perl

#
# Authentic Theme 17.62 (https://github.com/qooob/authentic-theme)
# Copyright 2016 Ilia Rostovtsev <programming@rostovtsev.ru>
# Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
#

BEGIN { push( @INC, ".." ); }
use WebminCore;
&init_config();
&ReadParseMime();
#&switch_to_remote_user();

do "authentic-theme/authentic-lib.pm";
__config_dir_available();

$in{'data'} =~ s/\r//g;
unlink_file( $in{'file'} );
write_file_contents( $in{'file'}, $in{'data'} );

if ( usermin_available() ) {
    ( my $_file = $in{'file'} ) =~ s/webmin/usermin/;
    unlink_file($_file);
    write_file_contents( $_file, $in{'data'} );
}
&redirect( 'settings-editor_read.cgi?saved=1&file=' . $in{'file'} );
