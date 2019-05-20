#!/usr/bin/perl

#
# Authentic Theme (https://github.com/authentic-theme/authentic-theme)
# Copyright Ilia Rostovtsev <programming@rostovtsev.io>
# Copyright Alexandr Bezenkov (https://github.com/real-gecko/filemin)
# Licensed under MIT (https://github.com/authentic-theme/authentic-theme/blob/master/LICENSE)
#
use strict;

use File::Basename;

our (%in, %text, $cwd, $path);

require(dirname(__FILE__) . '/file-manager-lib.pm');

if (!$in{'name'}) {
    redirect('list.cgi?path=' . urlize($path) . '&module=' . $in{'module'} . extra_query());
}

$path = html_escape($path) || "/";

my $type;
if (-d "$cwd/$in{'name'}") {
    $type = 'directory';
} else {
    $type = 'file';
}

if (-e "$cwd/$in{'name'}") {
    print_error(
          (text('filemanager_rename_exists', html_escape($in{'name'}), $path, $text{ 'theme_xhred_global_' . $type . '' })));
} else {
    if (&rename_file($cwd . '/' . $in{'file'}, $cwd . '/' . $in{'name'})) {
        redirect('list.cgi?path=' . urlize($path) . '&module=' . $in{'module'} . extra_query());
    } else {
        print_error(
                    (
                     text('filemanager_rename_denied', html_escape($in{'name'}),
                          $path,                       lc($text{ 'theme_xhred_global_' . $type . '' })
                     )
                    ));
    }
}
