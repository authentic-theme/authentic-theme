#
# Authentic Theme (https://github.com/authentic-theme/authentic-theme)
# Copyright Ilia Rostovtsev <programming@rostovtsev.io>
# Licensed under MIT (https://github.com/authentic-theme/authentic-theme/blob/master/LICENSE)
#
use strict;

our (%in,          %module_text_full, %theme_text,        %theme_config,
     %gconfig,     %tconfig,          $current_lang_info, $root_directory,
     $remote_user, $get_user_level,   $webmin_script_type);

sub settings
{
    my ($f, $e) = @_;
    my %c;
    if (-r $f) {
        my $k = read_file_contents($f);
        my %k = $k =~ /(.*?)=(.*)/g;
        delete @k{ grep(!/^$e/, keys %k) };
        foreach my $s (keys %k) {
            $k{$s} =~ s/^[^']*\K'|'(?=[^']*$)|;(?=[^;]*$)//g;
            $k{$s} =~ s/\\'/'/g;
            $c{$s} .= $k{$s};
        }
        return %c;
    } else {
        return %c;
    }
}

sub theme_ui_checkbox_local
{
    my ($name, $value, $label, $sel, $tags, $dis) = @_;
    my $after;
    my $rand = int rand(1e4);
    if ($label =~ /^([^<]*)(<[\000-\377]*)$/) {
        $label = $1;
        $after = $2;
    }
    return "<span class=\"awcheckbox awobject\"><input class=\"iawobject\" type=\"checkbox\" " .
      "name=\"" . &quote_escape($name) .
      "\" " . "value=\"" . &quote_escape($value) . "\" " . ($sel ? " checked" : "") . ($dis ? " disabled=true" : "") .
      " id=\"" . &quote_escape("${name}_${value}_${rand}") . "\"" . ($tags ? " " . $tags : "") .
      "> " . '<label class="lawobject" for="' . &quote_escape("${name}_${value}_${rand}") . '">' .
      (length trim($label) ? trim($label) : '&nbsp;') . '</label></span>' . $after;
}

sub theme_make_date_local
{
    my ($s, $o, $f) = @_;
    my $t = "x-md";
    my $d = "<$t-d>$s";
    ($d .= (string_starts_with($f, 'yyyy') ? ";2" : (string_contains($f, 'mon') ? ";1" : ($f == -1 ? ";-1" : ";0"))) .
     "</$t-d>");
    (!$o && ($d .= " <$t-t>$s</$t-t>"));
    return ($main::webmin_script_type eq 'web' ? $d : strftime("%c (%Z %z)", localtime($s)));
}

sub nice_number
{
    my ($number, $delimiter) = @_;
    $delimiter = " " if (!$delimiter);
    $number =~ s/(\d)(?=(\d{3})+(\D|$))/$1$delimiter/g;
    return $number;
}

sub get_theme_language
{
    my %s;
    foreach my $key (keys %theme_text) {
        if ($key !~ /_xhred_/ &&
            $key !~ /body_/  &&
            $key !~ /right_/ &&
            $key !~ /_level_navigation/)
        {
            next;
        }
        $s{$key} .= $theme_text{$key};
    }
    return convert_to_json(\%s);

}

sub get_gpg_keys
{
    my $gnupg  = 'gnupg';
    my $target = foreign_available($gnupg) ? $gnupg : get_product_name();
    my $gpglib = $root_directory . "/$target/gnupg-lib.pl";
    if (-r $gpglib) {
        do($gpglib);
        my %gpgconfig    = foreign_config($target);
        my $gpgpath      = $gpgconfig{'gpg'} || "gpg";
        my @keys_avoided = ('11F63C51', 'F9232D77', 'D9C821AB');
        my @keys         = list_keys_sorted();
        my @keys_secret  = sort {lc($a->{'name'}->[0]) cmp lc($b->{'name'}->[0])} list_secret_keys();
        my %keys_;
        my %keys_secret_;

        foreach my $k (@keys) {
            my $key  = substr($k->{'key'}, -8, 8);
            my $name = $k->{'name'}->[0];
            $name =~ s/\(.*?\)//gs;
            if ($_[0] || (!$_[0] && !grep(/^$key$/, @keys_avoided))) {
                $keys_{ $k->{'key'} } = trim($name) . " ($k->{'email'}->[0] [$key/$k->{'size'}, $k->{'date'}])";
            }
        }
        foreach my $k (@keys_secret) {
            my $key  = substr($k->{'key'}, -8, 8);
            my $name = $k->{'name'}->[0];
            $name =~ s/\(.*?\)//gs;
            if ($_[0] || (!$_[0] && !grep(/^$k->{'key'}$/, @keys_avoided))) {
                $keys_secret_{ $k->{'key'} } =
                  trim($name) . " ($k->{'email'}->[0] [$key/$k->{'size'}, $k->{'date'}])";
            }
        }
        return (\%keys_, \%keys_secret_, $gpgpath);
    }
}

sub switch_to_unix_user_local
{
    if (!supports_users()) {
        return undef;
    }
    my ($username) = @_;
    if (!$username) {
        $username = $in{'username'} || $in{'switch_to_username'};
    }
    my @uinfo = getpwnam($username);
    if (@uinfo) {
        switch_to_unix_user(\@uinfo);
    }
}

sub get_text_ltr
{
    if ($current_lang_info && $current_lang_info->{'rtl'} eq "1") {
        return 0;
    } else {
        return 1;
    }

}

sub reverse_string
{
    my ($str, $delimiter) = @_;
    my @strings = reverse(split(/\Q$delimiter\E/, $str));
    return join(" " . $delimiter . " ", @strings);
}

sub ltrim
{
    my $s = shift;
    $s =~ s/^\s+//;
    return $s;
}

sub rtrim
{
    my $s = shift;
    $s =~ s/\s+$//;
    return $s;
}

sub trim
{
    my $s = shift;
    $s =~ s/^\s+|\s+$//g;
    return $s;
}

sub replace
{
    my ($from, $to, $string) = @_;
    $string =~ s/\Q$from\E/$to/ig;

    return $string;
}

sub replace_meta
{
    my ($string) = @_;

    my $hostname   = &get_display_hostname();
    my $version    = &get_webmin_version();
    my $os_type    = $gconfig{'real_os_type'} || $gconfig{'os_type'};
    my $os_version = $gconfig{'real_os_version'} || $gconfig{'os_version'};
    $string =~ s/%HOSTNAME%/$hostname/g;
    $string =~ s/%VERSION%/$version/g;
    $string =~ s/%USER%/$remote_user/g;
    $string =~ s/%OS%/$os_type $os_version/g;

    return $string;
}

sub product_version_update
{
    my ($v, $p) = @_;
    my ($wv, $uv, $vv, $cv, $fv, $d) =
      ('1.910', '1.760', '6.06', '9.4', '12.12', $tconfig{'beta_updates'});

    if (($p eq "w" && $v < $wv) ||
        ($p eq "u" && $v < $uv) ||
        ($p eq "v" && $v < $vv) ||
        ($p eq "c" && $v < $cv) ||
        ($p eq "f" && $v < $fv))
    {
        return (($d eq '1' || ($d ne '1' && $p eq "f")) ?
                  '<span data-toggle="tooltip" data-placement="auto top" data-title="' .
                  $theme_text{'theme_xhred_global_outdated'} .
                  '" class="bg-danger text-danger pd-lf-2 pd-rt-2 br-2">' . $v . '</span>' :
                  $v);
    } else {
        return $v;
    }
}

sub string_contains
{
    return (index($_[0], $_[1]) != -1);
}

sub string_starts_with
{
    return substr($_[0], 0, length($_[1])) eq $_[1];
}

sub string_ends_with
{
    my $length = length($_[1]);
    return substr($_[0], -$length, $length) eq $_[1];
}

sub array_contains
{
    my ($array_reference, $search, $loose) = @_;
    return (!$loose ? (grep {$_ eq $search} @$array_reference) : (grep {index($_, $search) != -1} @$array_reference));
}

sub array_unique
{
    my @unique;
    my %seen;

    foreach my $value (@_) {
        if (!$seen{$value}++) {
            $value =~ tr/\r\n//d;
            push @unique, $value;
        }
    }
    return @unique;
}

sub get_before_delimiter
{
    my ($v, $d) = @_;

    $v =~ /^(.*)\Q$d\E/;
    return ($1 ? $1 : $v);
}

sub get_chooser_button_template
{
    my ($onclick, $icon) = @_;
    return
"<button class='btn btn-default chooser_button' type=button onClick='ifield = form.$_[0]; chooser = window.open(\"$gconfig{'webprefix'}/$onclick, \"chooser\"); chooser.ifield = ifield; window.ifield = ifield'>
  <i class=\"fa $icon vertical-align-middle\"></i>
 </button>\n";
}

sub directory_empty
{
    if (-e $_[0] && -d $_[0]) {
        opendir my $dir, $_[0] or die $!;
        if (grep !/^\.\.?$/, readdir $dir) {
            return 0;
        } else {
            return 1;
        }
    }
    return -1;
}

sub hash_to_query
{
    my ($c, %h) = @_;
    return $c . join(q{&}, map {qq{$_=@{[urlize($h{$_})]}}} keys %h);
}

sub head
{
    print "Content-type: text/html\n\n";
}

sub module_text_full
{
    if (!%module_text_full) {
        %module_text_full = load_language(get_module_name());
    }
    return %module_text_full;
}

sub is_switch_webmin
{
    return (
        ((($theme_config{'settings_right_default_tab_webmin'} eq '/' && get_product_name() eq 'webmin')) ||
           (($theme_config{'settings_right_default_tab_usermin'} eq '/' || !foreign_available("mailbox")) &&
             get_product_name() eq 'usermin') ||
           ($theme_config{'settings_right_default_tab_webmin'} =~ /virtualmin/ && $get_user_level eq '4') ||
           ($theme_config{'settings_right_default_tab_webmin'} =~ /cloudmin/ &&
             ($get_user_level eq '1' || $get_user_level eq '2'))
           ||
           ( $get_user_level ne '3' &&
             (   (!foreign_available("virtual-server") && !$theme_config{'settings_right_default_tab_webmin'}) ||
                 (!foreign_available("virtual-server") && $theme_config{'settings_right_default_tab_webmin'} =~ /virtualmin/)
                 ||
                 (!foreign_available("server-manager") &&
                     $theme_config{'settings_right_default_tab_webmin'} =~ /cloudmin/))
           )
        ) ? 1 : 0);
}

sub is_switch_virtualmin
{
    return (
            (
             (($get_user_level eq '2' && get_webmin_switch_mode() ne '1') ||
                !$theme_config{'settings_right_default_tab_webmin'} ||
                ($theme_config{'settings_right_default_tab_webmin'} =~ /virtualmin/)
             ) &&
               $get_user_level ne '4'
            ) ? 1 : 0);
}

sub is_switch_cloudmin
{
    return ((!$theme_config{'settings_right_default_tab_webmin'} && $get_user_level eq '4') ||
            ($theme_config{'settings_right_default_tab_webmin'} =~ /cloudmin/) ? 1 : 0);
}

sub is_switch_webmail
{
    return (
            (!$theme_config{'settings_right_default_tab_usermin'} ||
               $theme_config{'settings_right_default_tab_usermin'} =~ /mail/
            ) ? 1 : 0);
}

sub strip_html
{
    my ($string) = @_;
    $string =~ s|<.+?>||g;
    return $string;
}

sub format_document_title
{
    my ($title_initial) = $_[0] =~ /(?|.*:\s+(.*)|(.*))/;
    my ($product, $os_type) = $title_initial =~ /(?|(.*\d+).*(\(.*)|(.*\d+))/;
    $os_type = undef if (length($os_type) < 4);
    my $title = ($os_type ? "$product $os_type" : $product);
    $title =~ s/\R//g;
    return $title;
}

1;
