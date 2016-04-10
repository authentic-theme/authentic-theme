#!/usr/bin/perl

#
# Authentic Theme 17.82 (https://github.com/qooob/authentic-theme)
# Copyright 2015 Alexandr Bezenkov (https://github.com/Real-Gecko/filemin)
# Copyright 2016 Ilia Rostovtsev <programming@rostovtsev.ru>
# Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
#

use File::Basename;
require( dirname(__FILE__) . '/file-manager-lib.pm' );

switch_to_remote_user();
$confdir = "$remote_user_info[7]/.filemin";

if ( !-d $confdir ) {
    mkdir $confdir or &error("$text{'error_creating_conf'}: $!");
}

if ( !-f "$confdir/.bookmarks" ) {
    utime time, time, "$configdir/.bookmarks";
}

$bookmarks = read_file_lines( $confdir . '/.bookmarks' );
if ( !length $path ) {
    $path = '/';
}
if ( grep { $_ eq $path } @$bookmarks ) {
    @$bookmarks = grep !/\A$path\z/, @$bookmarks;
}
else {
    push @$bookmarks, $path;
}

flush_file_lines( $confdir . '/.bookmarks' );
head();
