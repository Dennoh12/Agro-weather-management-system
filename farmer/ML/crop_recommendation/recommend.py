import pandas as pd
import numpy as np
import json
import sys

# Get the input parameters as command line arguments
n_params = float(sys.argv[1])
p_params = float(sys.argv[2])
k_params = float(sys.argv[3])
t_params = float(sys.argv[4])
h_params = float(sys.argv[5])
ph_params = float(sys.argv[6])
r_params = float(sys.argv[7])

# Read the dataset
dataset = pd.read_csv('ML/crop_recommendation/Crop_recommendation.csv')
# Divide the dataset into features and labels
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values

# Split the dataset into training and test sets
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

# Train the model using the Random Forest Classifier algorithm
from sklearn.ensemble import RandomForestClassifier
classifier = RandomForestClassifier(n_estimators=10, criterion='entropy', random_state=0)
classifier.fit(X_train, y_train)

# Get the user inputs and store them in a numpy array
user_input = np.array([[n_params, p_params, k_params, t_params, h_params, ph_params, r_params]])

# Make predictions using the trained model
predictions = classifier.predict(user_input)

# Print the predicted crop
print(str(predictions[0]))
