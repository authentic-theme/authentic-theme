#!/usr/bin/perl

#
# Authentic Theme 17.31 (https://github.com/qooob/authentic-theme)
# Copyright 2016 Ilia Rostovtsev <programming@rostovtsev.ru>
# Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
#

BEGIN { push( @INC, ".." ); }
use WebminCore;
&init_config();
&ReadParse();
#&switch_to_remote_user();

print "Content-type: text/html\n\n";

do "authentic-theme/authentic-lib.cgi";
__config_dir_available();

our ($in);

$in =~ s/\t\n\r//g;
$in =~ /\{(?:\{.*\}|[^{])*\}/sg;
my $file    = $config_directory . '/authentic-theme/favorites.json';
my $content = $in;

unlink_file($file);
write_file_contents( $file, $content );
