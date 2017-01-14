import csv
with open('hatespeech.csv', newline='', encoding='utf-8', errors='ignore') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
