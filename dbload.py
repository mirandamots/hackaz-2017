import csv
with open('hatespeech.csv', newline='') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
