import pickle
import os.path

from sklearn import tree

from dbload import load_database

CLASSIFIER_FILE_PATH = 'db.p'
CSV_FILE_PATH = 'hatespeech.csv'


def main():

	# Try loading an old classifier if it exists.
	if os.path.isfile(CLASSIFIER_FILE_PATH):
		try:
			classifier = pickle.load(open(CLASSIFIER_FILE_PATH, 'rb'))
		except:
			print("Error loading file " + CLASSIFIER_FILE_PATH)

	# Oops, it doesn't. Make a new classifier! This could take a long time.
	else:
		classifier = load_database(CSV_FILE_PATH)

		pickle.dump(classifier, open(CLASSIFIER_FILE_PATH, 'wb'))

	start_queries(classifier)


def start_queries(classifier):

	query = input("Please enter a sentence to evaluate ('end' to exit): ")

	while query != 'end':
		print(classifier.predict(query))

		query = input("Please enter a sentence to evaluate: ")

main()
