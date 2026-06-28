import { TutorialTopic } from './cssTutorialsData';

export const SCIKIT_LEARN_TOPICS: TutorialTopic[] = [
  {
    id: 'sklearn-ml-intro',
    title: 'Machine Learning Intro',
    description: 'Understand the basic classifications of Machine Learning, including Supervised, Unsupervised, and Reinforcement learning.',
    explanation: [
      'Machine Learning teaches computer systems to learn and make decisions from data observations without explicit rules.',
      'Supervised Learning trains models on labeled data (e.g. predicting house prices or classifying emails).',
      'Unsupervised Learning groups unlabeled data (e.g. clustering customer profiles or patterns).'
    ],
    code: `# Conceptual categories
# Machine Learning -> Supervised (Regression, Classification)
#                  -> Unsupervised (Clustering, Dimensionality Reduction)`,
    languageId: 'python'
  },
  {
    id: 'sklearn-distribution',
    title: 'Data Distribution',
    description: 'Generating and analyzing random numerical data distributions in Python.',
    explanation: [
      'Data distributions help us analyze the probability of values appearing across a numeric dataset range.',
      'We use NumPy functions to generate simulated arrays of metrics.',
      'Visualizing these distributions provides clear insights before feeding them into machine learning layers.'
    ],
    code: `import numpy as np

# Generate 250 random float values between 0.0 and 5.0
data = np.random.uniform(0.0, 5.0, 250)
print(data[:5]) # Show first 5 values`,
    languageId: 'python'
  },
  {
    id: 'sklearn-normal-distribution',
    title: 'Normal Data Distribution',
    description: 'Analyzing bell-curve distributions using mean and standard deviations.',
    explanation: [
      'Normal distribution (or Gaussian distribution) is a symmetrical bell-curve where values cluster around a central mean.',
      'Use np.random.normal(mean, std_dev, size) to generate standard bell-curve observations.',
      'This distribution pattern is standard in natural observations like human heights, weights, or scores.'
    ],
    code: `import numpy as np

# Generate 100,000 normal values with mean=5.0 and std_dev=1.0
data = np.random.normal(5.0, 1.0, 100000)
print("Mean:", np.mean(data))
print("Std Dev:", np.std(data))`,
    languageId: 'python'
  },
  {
    id: 'sklearn-scatter-plots',
    title: 'Scatter Plot Integration',
    description: 'Mapping mathematical datasets into coordinate scatter plots with Matplotlib.',
    explanation: [
      'Scatter plots visualize correlations between numeric variables as coordinate markers.',
      'They let you visually inspect if features (like car age) correlate with predictions (like speed).',
      'This is the primary diagnostic step before fitting linear regression lines.'
    ],
    code: `import matplotlib.pyplot as plt

x = [5, 7, 8, 7, 2, 17, 2, 9, 4, 11]
y = [99, 86, 87, 88, 111, 86, 103, 87, 94, 78]

plt.scatter(x, y)
plt.show()`,
    languageId: 'python'
  },
  {
    id: 'sklearn-linear-regression',
    title: 'Linear Regression',
    description: 'Fitting linear regression models to predict continuous quantitative variables.',
    explanation: [
      'Linear regression establishes a straight-line mathematical relationship between a feature X and targets y.',
      'We use Scikit-Learn LinearRegression class to calculate slope and intercept coefficients.',
      'The model computes line coordinates (y = mx + c) that minimize distance to actual points.'
    ],
    code: `from sklearn.linear_model import LinearRegression
import numpy as np

# Column vectors for X
X = np.array([[5], [7], [8], [11], [14]])
y = np.array([99, 86, 87, 78, 65])

model = LinearRegression().fit(X, y)
# Predict target value for feature X = 12
prediction = model.predict([[12]])
print("Prediction for X=12:", prediction[0])`,
    languageId: 'python'
  },
  {
    id: 'sklearn-polynomial-regression',
    title: 'Polynomial Regression',
    description: 'Fitting curved polynomial model lines to non-linear datasets.',
    explanation: [
      'If your scatter coordinates display a curve rather than a straight line, use Polynomial Regression.',
      'Polynomial features transform standard variables into powers (e.g., x, x^2, x^3) to fit curved lines.',
      'Use PolynomialFeatures along with LinearRegression to compute complex, curved model fits.'
    ],
    code: `from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 5, 9, 15, 23])

poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

model = LinearRegression().fit(X_poly, y)
print("Model coefficients:", model.coef_)`,
    languageId: 'python'
  },
  {
    id: 'sklearn-multiple-regression',
    title: 'Multiple Regression',
    description: 'Predicting targets based on multiple independent features simultaneously.',
    explanation: [
      'Multiple regression extends linear regression, predicting y using multiple features (e.g. predicting car value using age AND weight).',
      'Pass multi-column matrix arrays to the fit() function as features.',
      'The model calculates distinct weight coefficients for each individual feature variable.'
    ],
    code: `from sklearn.linear_model import LinearRegression
import numpy as np

# Features: [Weight, Engine Volume]
X = np.array([[1500, 1.6], [2000, 2.0], [1200, 1.2], [1800, 1.8]])
y = np.array([300, 450, 250, 400]) # CO2 emissions

model = LinearRegression().fit(X, y)
# Predict emission for car weighing 1600kg with 1.4L engine
prediction = model.predict([[1600, 1.4]])
print("Predicted emissions:", prediction[0])`,
    languageId: 'python'
  },
  {
    id: 'sklearn-scale-features',
    title: 'Scale Features',
    description: 'Standardizing numerical values using StandardScaler to ensure balanced training weightings.',
    explanation: [
      'If features have different scales (e.g. Weight is 1500, Engine is 1.6), distance-based models will over-index on large metrics.',
      'Scaling standardizes variables to share uniform scale limits (like mean=0, std_dev=1).',
      'Use Scikit-Learn StandardScaler to scale and normalize feature columns before training.'
    ],
    code: `from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([[1500, 1.6], [2000, 2.0], [1200, 1.2]])

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
print("Scaled features:\\n", X_scaled)`,
    languageId: 'python'
  },
  {
    id: 'sklearn-train-test',
    title: 'Train/Test Split Evaluation',
    description: 'Splitting datasets into separate training and testing partitions to measure validation performance.',
    explanation: [
      'Evaluating models on the exact data they trained on leads to overfitting (memorizing inputs instead of generalizing).',
      'Use train_test_split() to divide inputs into separate Training (e.g., 80%) and Testing (e.g., 20%) arrays.',
      'Train the model on the training group, and measure predictive accuracy on the held-out test partition.'
    ],
    code: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np

X, y = np.random.randn(100, 2), np.random.randn(100)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LinearRegression().fit(X_train, y_train)
print("Test Score (R2):", model.score(X_test, y_test))`,
    languageId: 'python'
  },
  {
    id: 'sklearn-decision-tree',
    title: 'Decision Tree Classifier',
    description: 'Structuring classification trees to split decisions and predict categorical labels.',
    explanation: [
      'Decision Trees split datasets sequentially based on feature thresholds, ending on class predictions.',
      'Use DecisionTreeClassifier for categorical classifications, and DecisionTreeRegressor for continuous targets.',
      'This model is highly transparent, allowing developers to trace exact decision paths visually.'
    ],
    code: `from sklearn.tree import DecisionTreeClassifier
import numpy as np

# Features: [Age, Income] -> Label: 1 (Buy), 0 (Ignore)
X = np.array([[22, 15000], [45, 80000], [30, 45000], [18, 5000]])
y = np.array([0, 1, 1, 0])

clf = DecisionTreeClassifier().fit(X, y)
# Predict decision for client: Age=35, Income=55000
print("Prediction:", clf.predict([[35, 55000]])) # Outputs: [1]`,
    languageId: 'python'
  },
  {
    id: 'sklearn-confusion-matrix',
    title: 'Confusion Matrix Metrics',
    description: 'Analyzing True Positives, False Positives, and classification performance.',
    explanation: [
      'A Confusion Matrix is a 2D table displaying actual vs predicted class outcomes.',
      'It details True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN).',
      'Use confusion_matrix() to inspect detailed failure modes, which is far more revealing than simple accuracy rates.'
    ],
    code: `from sklearn.metrics import confusion_matrix

y_true = [1, 0, 1, 1, 0, 1]
y_pred = [1, 0, 0, 1, 0, 1]

cm = confusion_matrix(y_true, y_pred)
print("Confusion Matrix:\\n", cm)`,
    languageId: 'python'
  },
  {
    id: 'sklearn-hierarchical-clustering',
    title: 'Hierarchical Clustering',
    description: 'Grouping related data records into tree structures (dendrograms) sequentially.',
    explanation: [
      'Hierarchical clustering is an unsupervised algorithm that builds nested cluster hierarchies.',
      'Agglomerative clustering starts with each point as its own cluster, merging nearest neighbors iteratively.',
      'Use SciPy link utilities to display trees (dendrograms) mapping item similarities.'
    ],
    code: `from sklearn.cluster import AgglomerativeClustering
import numpy as np

X = np.array([[1, 2], [1, 4], [1, 0], [4, 2], [4, 4], [4, 0]])

clustering = AgglomerativeClustering(n_clusters=2).fit(X)
print("Row Cluster labels:", clustering.labels_)`,
    languageId: 'python'
  },
  {
    id: 'sklearn-logistic-regression',
    title: 'Logistic Regression Classifier',
    description: 'Predicting binary category probabilities using sigmoid functions.',
    explanation: [
      'Despite its name, Logistic Regression is a Classification algorithm used for binary (0 or 1) outcomes.',
      'It uses the sigmoid function to map linear outputs into a probability range between 0 and 1.',
      'If the probability is greater than 0.5, the model outputs class label 1. Otherwise, it outputs 0.'
    ],
    code: `from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[1], [2], [10], [11], [12]])
y = np.array([0, 0, 1, 1, 1])

clf = LogisticRegression().fit(X, y)
print("Probability metrics for X=5:", clf.predict_proba([[5]]))`,
    languageId: 'python'
  },
  {
    id: 'sklearn-kmeans',
    title: 'K-means Clustering',
    description: 'Partitioning unlabeled datasets into K distinct cohesive clusters.',
    explanation: [
      'K-Means is a popular unsupervised algorithm that groups data points into K clusters.',
      'It assigns points to the nearest cluster centroid, recalculating centroids iteratively to minimize variance.',
      'Use the inertia_ metric (Elbow method) to find the optimal number of clusters for your dataset.'
    ],
    code: `from sklearn.cluster import KMeans
import numpy as np

X = np.array([[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0]])

# Group into 2 clusters
kmeans = KMeans(n_clusters=2, random_state=0).fit(X)
print("Calculated Centroids:\\n", kmeans.cluster_centers_)`,
    languageId: 'python'
  },
  {
    id: 'sklearn-cross-validation',
    title: 'Cross Validation Engine',
    description: 'Evaluating model generalization scores using K-fold splitting.',
    explanation: [
      'K-Fold Cross Validation divides your dataset into K equal-sized chunks (folds).',
      'It trains the model K separate times, using K-1 folds for training and the remaining single fold for evaluation.',
      'This yields a robust, stable average score, minimizing bias caused by simple static splits.'
    ],
    code: `from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LinearRegression
import numpy as np

X, y = np.random.randn(100, 5), np.random.randn(100)
model = LinearRegression()

# Run 5-fold cross validation
scores = cross_val_score(model, X, y, cv=5)
print("Cross Validation scores:", scores)
print("Mean Accuracy Score:", np.mean(scores))`,
    languageId: 'python'
  },
  {
    id: 'sklearn-auc-roc',
    title: 'AUC - ROC Curve Assessment',
    description: 'Measuring classification discrimination quality at varying thresholds.',
    explanation: [
      'The ROC (Receiver Operating Characteristic) curve plots True Positive Rates against False Positive Rates across classification thresholds.',
      'The AUC (Area Under the Curve) measures the overall degree of discrimination (1.0 is perfect; 0.5 is random guessing).',
      'It represents an exceptional metric to evaluate classifiers, especially on highly imbalanced datasets.'
    ],
    code: `from sklearn.metrics import roc_auc_score
import numpy as np

y_true = np.array([0, 0, 1, 1])
y_scores = np.array([0.1, 0.4, 0.35, 0.8])

# Compute AUC score
auc = roc_auc_score(y_true, y_scores)
print("AUC Score:", auc)`,
    languageId: 'python'
  },
  {
    id: 'sklearn-knn',
    title: 'K-nearest Neighbors (KNN)',
    description: 'Classifying data elements based on spatial proximity to neighboring coordinates.',
    explanation: [
      'K-Nearest Neighbors is a simple, intuitive instance-based classification algorithm.',
      'It classifies an unknown sample based on the majority vote of its K closest labeled neighbors in Euclidean space.',
      'You can customize the distance metric and the total number of neighbors (K).'
    ],
    code: `from sklearn.neighbors import KNeighborsClassifier
import numpy as np

X = np.array([[1, 2], [2, 3], [10, 11], [11, 12]])
y = np.array([0, 0, 1, 1])

# Classify using K=3 neighbors
knn = KNeighborsClassifier(n_neighbors=3).fit(X, y)
print("KNN Prediction for coordinate [3, 4]:", knn.predict([[3, 4]])) # Outputs: [0]`,
    languageId: 'python'
  }
];
