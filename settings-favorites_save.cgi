#!/usr/bin/perl

#
# Authentic Theme 18.07 (https://github.com/qooob/authentic-theme)
# Copyright 2014-2016 Ilia Rostovtsev <programming@rostovtsev.ru>
# Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
#

do "authentic-theme/authentic-lib.pm";

__config_dir_available();

$in =~ s/\t\n\r//g;
$in =~ /\{(?:\{.*\}|[^{])*\}/sg;
my $file    = $config_directory . '/authentic-theme/favorites.json';
my $content = $in;

unlink_file($file);
write_file_contents( $file, $content );
head();

