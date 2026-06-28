import { TutorialTopic } from './cssTutorialsData';

export const TENSORFLOW_TOPICS: TutorialTopic[] = [
  {
    id: 'tensorflow-intro',
    title: 'TensorFlow Intro',
    description: 'Learn TensorFlow, an end-to-end open-source machine learning platform developed by Google.',
    explanation: [
      'TensorFlow is a comprehensive, scalable library used to train and deploy deep learning models.',
      'It supports execution across diverse hardware environments including CPUs, GPUs, and TPUs.',
      'Keras is the official high-level API of TensorFlow, making model design simple and expressive.'
    ],
    code: `import tensorflow as tf
print("TensorFlow Version:", tf.__version__)`,
    languageId: 'python'
  },
  {
    id: 'tensorflow-basics',
    title: 'TensorFlow Basics & Tensors',
    description: 'Understanding Tensors, Constants, Variables, and basic matrix operations.',
    explanation: [
      'Tensors are multi-dimensional arrays with uniform data types (float32, int32).',
      'Use tf.constant() to create immutable arrays whose values cannot change.',
      'Use tf.Variable() to declare mutable variables representing model parameters (weights, biases).'
    ],
    code: `import tensorflow as tf

# Create a constant tensor matrix
matrix = tf.constant([[1.0, 2.0], [3.0, 4.0]])

# Create a variable tensor
weight = tf.Variable(tf.random.normal([2, 2]))
print(weight.numpy())`,
    languageId: 'python'
  },
  {
    id: 'keras-overview',
    title: 'Keras Overview',
    description: 'Understanding Keras as the easy-to-use, developer-centric model building API.',
    explanation: [
      'Keras is integrated directly inside TensorFlow under tf.keras.',
      'It focuses on readability, modularity, and rapid prototyping.',
      'It offers two primary API patterns: the Sequential model (simple stacks) and the Functional API (complex networks).'
    ],
    code: `from tensorflow import keras
from tensorflow.keras import layers

print("Keras integrated inside TensorFlow is ready!")`,
    languageId: 'python'
  },
  {
    id: 'keras-sequential',
    title: 'Keras Sequential Model',
    description: 'Constructing neural networks using the simple tf.keras.Sequential linear stack.',
    explanation: [
      'The Sequential model allows stacking layers in chronological order from input to output.',
      'Simply pass a list of layers to the constructor, or append them sequentially using model.add().',
      'This pattern is ideal for standard feed-forward networks where each layer has exactly one input and one output.'
    ],
    code: `from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense

# Create sequential stack model
model = Sequential([
    Dense(64, activation='relu', input_shape=(20,)),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')
])`,
    languageId: 'python'
  },
  {
    id: 'keras-functional',
    title: 'Keras Functional API',
    description: 'Building non-linear network topologies, multi-input, and multi-output models.',
    explanation: [
      'The Functional API treats layers as mathematical functions that accept and return tensors directly.',
      'This allows creating complex network structures with residual connections, multiple inputs, or multi-task outputs.',
      'You explicitly define the input layer and connect layer tensors sequentially.'
    ],
    code: `from tensorflow.keras import Input, Model
from tensorflow.keras.layers import Dense

inputs = Input(shape=(32,))
x = Dense(64, activation='relu')(inputs)
x = Dense(64, activation='relu')(x)
outputs = Dense(10, activation='softmax')(x)

model = Model(inputs=inputs, outputs=outputs)`,
    languageId: 'python'
  },
  {
    id: 'tensorflow-layers',
    title: 'TensorFlow Core Layers (Dense, Conv2D, MaxPooling)',
    description: 'Using core neural layers to process tabular, image, or sequential records.',
    explanation: [
      'Dense (fully connected) layers apply linear operations followed by custom activation functions.',
      'Conv2D applies spatial kernels over 2D input grids, excellent for extracting visual feature maps.',
      'MaxPooling2D aggregates pixel windows to decrease dimensionality, reducing computational loads.'
    ],
    code: `from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

layers = [
    Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    MaxPooling2D((2, 2)),
    Flatten(),
    Dense(10, activation='softmax')
]`,
    languageId: 'python'
  },
  {
    id: 'tensorflow-compilation',
    title: 'TensorFlow Model Compilation (Optimizers, Loss)',
    description: 'Configuring model objectives using compiled loss metrics and optimizers.',
    explanation: [
      'Before training, you compile the model using model.compile() to configure mathematical parameters.',
      'Specify an Optimizer (like Adam or SGD) to manage how network weights update.',
      'Specify a Loss function (like binary_crossentropy, categorical_crossentropy) to calculate prediction error.'
    ],
    code: `model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)`,
    languageId: 'python'
  },
  {
    id: 'tensorflow-fitting',
    title: 'TensorFlow Model Fitting (Training)',
    description: 'Training neural networks on feature arrays using model.fit().',
    explanation: [
      'Call model.fit() to train your model parameters on feature arrays and labels.',
      'The epochs parameter specifies how many full loops to make through the entire training dataset.',
      'The batch_size parameter divides data inputs into smaller batches to fit easily into GPU memory.'
    ],
    code: `# Train the compiled model for 10 full epochs
history = model.fit(
    X_train, y_train, 
    epochs=10, 
    batch_size=32, 
    validation_split=0.2
)`,
    languageId: 'python'
  },
  {
    id: 'tensorflow-evaluation',
    title: 'TensorFlow Model Evaluation & Predictions',
    description: 'Measuring model performance and generating predictions with test datasets.',
    explanation: [
      'Use model.evaluate() to measure loss and accuracy on held-out test datasets.',
      'Use model.predict() to generate model inferences on new, unseen feature samples.',
      'Predictions return arrays of probability values matching output layer dimensions.'
    ],
    code: `# Evaluate on validation test dataset
test_loss, test_acc = model.evaluate(X_test, y_test)
print(f"Test Accuracy: {test_acc}")

# Generate class probability predictions
predictions = model.predict(new_samples)`,
    languageId: 'python'
  },
  {
    id: 'tensorflow-callbacks',
    title: 'TensorFlow Callbacks (EarlyStopping, TensorBoard)',
    description: 'Injecting custom routines during model training using Keras Callbacks.',
    explanation: [
      'Callbacks are functions executed at specific training checkpoints (like epoch completions).',
      'EarlyStopping monitors validation loss, automatically stopping training early if accuracy plateaus.',
      'TensorBoard outputs performance logs, enabling visual graph tracking inside the browser.'
    ],
    code: `from tensorflow.keras.callbacks import EarlyStopping

# Stop training early if validation loss does not improve for 3 epochs
early_stop = EarlyStopping(
    monitor='val_loss', 
    patience=3, 
    restore_best_weights=True
)

model.fit(X_train, y_train, epochs=50, callbacks=[early_stop])`,
    languageId: 'python'
  },
  {
    id: 'tensorflow-saving',
    title: 'TensorFlow Saving & Exporting Models',
    description: 'Saving models to HDF5 or SavedModel formats for serving.',
    explanation: [
      'Save your complete model structure, parameters, and optimizer states using model.save().',
      'The default SavedModel format is highly optimized for deployment to cloud servers.',
      'Reload models instantly using keras.models.load_model() to run standalone predictions.'
    ],
    code: `import tensorflow as tf

# Save the model
model.save("my_deep_model.keras")

# Reload the model
reloaded_model = tf.keras.models.load_model("my_deep_model.keras")`,
    languageId: 'python'
  }
];
