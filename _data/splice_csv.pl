#!/usr/bin/perl
use strict;
use warnings;
use Text::CSV;

my $csv = Text::CSV->new( { binary => 1 } );

open my $in, '<:encoding(utf8)', 'local.csv' or die;
open my $out, '>:encoding(utf8)', 'localarchive.csv' or die;

while ( my $row = $csv->getline( $in ) ) {

splice @$row, 2, 2;
splice @$row, -1;

my $status = $csv->combine(@$row);

if ($status) {
print $out $csv->string(), "\n";
}

}

close $in;
close $out;

