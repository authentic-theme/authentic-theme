#
# Authentic Theme (https://github.com/authentic-theme/authentic-theme)
# Copyright Ilia Rostovtsev <programming@rostovtsev.ru>
# Licensed under MIT (https://github.com/authentic-theme/authentic-theme/blob/master/LICENSE)
#

sub settings
{
    my ($f, $e) = @_;
    my %c;
    if (-r $f) {
        my $k = read_file_contents($f);
        my %k = $k =~ /(.*?)=(.*)/g;
        delete @k{ grep(!/^$e/, keys %k) };
        foreach $s (keys %k) {
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

sub get_text_ltr
{
    if ($current_lang_info && $current_lang_info->{'rtl'} eq "1") {
        return 0;
    } else {
        return 1;
    }

}

sub reverse_text
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

sub product_version_update
{
    my ($v, $p) = @_;
    my ($wv, $uv, $vv, $cv, $fv, $d) =
      ('1.880', '1.740', '6.02', '9.3', '12.01', $__settings{'settings_sysinfo_theme_patched_updates'});

    if (($p eq "w" && $v < $wv) ||
        ($p eq "u" && $v < $uv) ||
        ($p eq "v" && $v < $vv) ||
        ($p eq "c" && $v < $cv) ||
        ($p eq "f" && $v < $fv))
    {
        return (
             ($d eq 'true' || ($d ne 'true' && $p eq "f")) ?
               '<span data-toggle="tooltip" data-placement="auto top" data-title="' . $Atext{'theme_xhred_global_outdated'} .
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
    my ($string, $search) = @_;
    if ($string =~ m/^\Q$search/) {
        return 1;
    } else {
        return 0;
    }
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

1;
