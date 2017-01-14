import csv
with open('twitter-hate-speech-classifier-DFE-a845520.csv', newline='') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
