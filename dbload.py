import csv

with open('hatespeech.csv', newline='', encoding='utf-8', errors='ignore') as f:
    reader = csv.reader(f)

    #included_cols specifies which column numbers we want to have access to
    #column 5 - does this tweet contain hate speech
    #column 6 - % confidence
    #column 19 - tweet

    #included_cols = [5, 6, 19]

    containhate = []
    hatelevel = []
    confidence = []
    tweet = []
    overalldata = []

    not_offensive = 0
    offensive = 1
    hatespeech = 4


    for row in reader:
        #row = list(row[i] for i in included_cols)
        lvl = -1

        if row[5] == "The tweet is not offensive":
            lvl = 0
        elif row[5] == "The tweet uses offensive language but not hate speech":
            lvl = offensive
        elif row[5] == "The tweet contains hate speech":
            lvl = hatespeech

        hatelevel.append(lvl)
        containhate.append(row[5])
        confidence.append(row[6])
        tweet.append(row[19])
        overalldata.append([lvl, row[6], row[19]])


    #returns a list of the strings decribing the level of offensiveness
    def getContainHate():
        return containhate;

    #returns a list of integers describing the level of offensiveness
    def getHateLevel():
        return hatelevel;

    #returns the confidence meter
    def getConfidence():
        return confidence;

    #returns the tweets
    def getTweets():
        return tweets;

    #returns the levels, the confidence, and the tweet
    def getOverallData():
        return overalldata;
