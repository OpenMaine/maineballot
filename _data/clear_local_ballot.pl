#!/usr/bin/perl
use strict;
use warnings;
use Text::CSV;

my $csv = Text::CSV->new( { binary => 1 } );

open my $in, '<:encoding(utf8)', 'local.csv' or die;
open my $out, '>:encoding(utf8)', 'templocal.csv' or die;

my @column = qw();

while ( my $row = $csv->getline( $in ) ) {

splice @$row, 4, 1;
splice @$row, 4, 0, shift @column;

my $status = $csv->combine(@$row);
if ($status) {
print$out $csv->string(), "\n";
}

}

close $in;
close $out;

rename "templocal.csv", "local.csv" or die;

