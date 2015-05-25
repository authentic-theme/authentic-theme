#!/usr/bin/perl

#
# Authentic Theme 13.00 (https://github.com/qooob/authentic-theme)
# Copyright 2015 Ilia Rostovtsev <programming@rostovtsev.ru>
# Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
#

BEGIN { push( @INC, ".." ); }
use WebminCore;
&init_config();
&ReadParseMime();
&switch_to_remote_user();
do "authentic-theme/authentic-lib.cgi";
$in{'data'} =~ s/\r//g;
write_file_contents( $in{'file'}, $in{'data'} );
if ( usermin_available() ) {
    ( my $_file = $in{'file'} ) =~ s/webmin/usermin/;
    write_file_contents( $_file, $in{'data'} );
}
&redirect( 'settings-editor_read.cgi?saved=1&file=' . $in{'file'} );
