import csv
import re
import sys

WEBSITES_FILE = './TownsMaineClerks.txt'
LOCAL_FILE = './local.csv'

TOWN_REGEX = r'Town of (.*)'

def read_websites():
    with open(WEBSITES_FILE) as f:
        return f.read().split(',')

def parse_websites(data):
    i = 0
    while i < len(data):
        m = re.match(TOWN_REGEX, data[i])
        if m is not None:
            yield m.group(1), data[i + 1]
        i += 2

def websites_dict():
    return dict(parse_websites(read_websites()))

def local_data():
    with open(LOCAL_FILE, newline='') as f:
        for row in csv.DictReader(f):
            yield row

def merged_rows():
    new_websites = websites_dict()

    for row in local_data():
        row['website'] = new_websites.get(row['city'], row['website'])
        yield row

def main():
    rows = merged_rows()
    first_row = next(rows)

    writer = csv.DictWriter(
        sys.stdout,
        fieldnames=first_row.keys(),
        lineterminator='\n'
    )

    writer.writeheader()
    writer.writerow(first_row)
    for row in rows:
        writer.writerow(row)

if __name__ == '__main__':
    main()
