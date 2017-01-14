import csv
with open('hatespeech.csv', newline='', encoding='utf-8', errors='ignore') as f:
    reader = csv.reader(f)

    #included_cols specifies which column numbers we want to have access to
    included_cols = [1, 2, 6, 7]

    for row in reader:
        row = list(row[i] for i in included_cols)
        print(row)
