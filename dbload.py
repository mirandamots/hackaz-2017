import csv
class DBLoad:
    def __init__(self):
        self.containhate = []
        self.hatelevel = []
        self.confidence = []
        self.tweet = []
        self.overalldata = []

    def loadCSV(self):

        with open('hatespeech.csv', newline='', encoding='utf-8', errors='ignore') as f:
            reader = csv.reader(f)

            #column 5 - does this tweet contain hate speech
            #column 6 - % confidence
            #column 19 - tweet

            not_offensive = 0
            offensive = 1
            hatespeech = 4

            #look through all rows and fill lists
            for row in reader:

                lvl = -1

                if row[5] == "The tweet is not offensive":
                    lvl = not_offensive
                elif row[5] == "The tweet uses offensive language but not hate speech":
                    lvl = offensive
                elif row[5] == "The tweet contains hate speech":
                    lvl = hatespeech

                self.hatelevel.append(lvl)
                self.containhate.append(row[5])
                self.confidence.append(row[6])
                self.tweet.append(row[19])
                self.overalldata.append([lvl, row[6], row[19]])


    #returns a list of the strings decribing the level of offensiveness
    def getContainHate(self):
        return self.containhate;

    #returns a list of integers describing the level of offensiveness
    def getHateLevel(self):
        return self.hatelevel;

    #returns the confidence meter
    def getConfidence(self):
        return self.confidence;

    #returns the tweets
    def getTweets(self):
        return self.tweets;

    #returns the levels, the confidence, and the tweet
    def getOverallData(self):
        return self.overalldata;

#thisisaclass = DBLoad()
#thisisaclass.loadCSV()
#print(thisisaclass.getHateLevel())
