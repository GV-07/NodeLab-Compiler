import { TutorialTopic } from './cssTutorialsData';

export const PYTORCH_TOPICS: TutorialTopic[] = [
  {
    id: 'pytorch-intro',
    title: 'PyTorch Intro',
    description: 'Learn PyTorch, an open-source, flexible deep learning research platform developed by Meta.',
    explanation: [
      'PyTorch is a dynamic, Pythonic machine learning library modeled directly on NumPy syntax.',
      'Unlike static computational graph compilers, PyTorch uses a dynamic graph execution system.',
      'This lets developers modify network structures on-the-fly, making debugging exceptionally easy.'
    ],
    code: `import torch
print("PyTorch Loaded successfully! Version:", torch.__version__)`,
    languageId: 'python'
  },
  {
    id: 'pytorch-tensors-creation',
    title: 'PyTorch Tensors Creation',
    description: 'Declaring multi-dimensional arrays (tensors) from lists, NumPy, or random generators.',
    explanation: [
      'Tensors are the fundamental data structure in PyTorch, identical to NumPy arrays but with GPU acceleration support.',
      'Create tensors from Python lists (torch.tensor()) or NumPy arrays (torch.from_numpy()).',
      'Use torch.zeros(), torch.ones(), and torch.rand() to generate filled tensors instantly.'
    ],
    code: `import torch
import numpy as np

# Convert lists directly to PyTorch tensors
data = [[1, 2], [3, 4]]
x_data = torch.tensor(data)

# Create a random tensor
rand_tensor = torch.rand(2, 2)
print(rand_tensor)`,
    languageId: 'python'
  },
  {
    id: 'pytorch-tensor-operations',
    title: 'PyTorch Tensor Operations',
    description: 'Performing matrix multiplication, element-wise math, slicing, and reshaping.',
    explanation: [
      'Tensors support hundreds of mathematical operations (addition, subtraction, multiplication).',
      'Use torch.matmul() or the @ operator to execute high-performance matrix multiplications.',
      'Reshape tensors safely using .view() or .reshape() (re-orders dimensions without copying data).'
    ],
    code: `import torch

tensor = torch.ones(3, 3)
# Row/Column indexing
print('First row:', tensor[0])
print('First column:', tensor[:, 0])

# Reshaping tensor dimensions
flat_tensor = tensor.view(9)
print(flat_tensor.shape) # Outputs: torch.Size([9])`,
    languageId: 'python'
  },
  {
    id: 'pytorch-autograd',
    title: 'PyTorch Autograd (Gradient Computation)',
    description: 'Automating gradient calculations for backpropagation using requires_grad.',
    explanation: [
      'torch.autograd is PyTorch\'s automatic differentiation engine that powers neural network training.',
      'Set requires_grad=True on a tensor to tell PyTorch to track all mathematical operations on it.',
      'Calling .backward() computes the derivatives of the graph, saving gradients inside the .grad attribute.'
    ],
    code: `import torch

# Create tensor and track operations
x = torch.ones(2, 2, requires_grad=True)
y = x + 2
z = y * y * 3
out = z.mean()

out.backward() # Run backpropagation
print("Gradient on X:", x.grad)`,
    languageId: 'python'
  },
  {
    id: 'pytorch-nn-module',
    title: 'PyTorch Neural Networks (nn.Module)',
    description: 'Structuring custom model layers by subclassing torch.nn.Module.',
    explanation: [
      'All neural network models in PyTorch subclass the base torch.nn.Module class.',
      'Define layers (like Linear, Conv2d) inside the __init__ constructor function.',
      'Define the data execution flow through these layers inside the required forward() function.'
    ],
    code: `import torch.nn as nn
import torch.nn.functional as F

class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(784, 128)
        self.fc2 = nn.Linear(128, 10)

    def forward(self, x):
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x`,
    languageId: 'python'
  },
  {
    id: 'pytorch-loss-optimizers',
    title: 'PyTorch Loss Functions & Optimizers',
    description: 'Calculating prediction error weights and updating weights with optimizers.',
    explanation: [
      'Loss functions measure how far predictions are from target outputs (e.g. MSELoss, CrossEntropyLoss).',
      'The torch.optim package provides popular optimization algorithms like SGD, Adam, and RMSprop.',
      'Optimizers adjust model parameters automatically based on calculated gradients to decrease loss.'
    ],
    code: `import torch.optim as optim
import torch.nn as nn

model = SimpleNet()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)`,
    languageId: 'python'
  },
  {
    id: 'pytorch-training-loops',
    title: 'PyTorch Training Loops',
    description: 'Writing standard training loops (forward pass, loss, zero gradients, backward, step).',
    explanation: [
      'Training models requires iterating through five explicit sequential steps inside a loop.',
      '1. Run forward pass to get predictions. 2. Calculate loss weight. 3. Zero active gradients (optimizer.zero_grad()).',
      '4. Backpropagate error gradients (loss.backward()). 5. Update weights (optimizer.step()).'
    ],
    code: `# Standard training loop step
for inputs, targets in dataloader:
    optimizer.zero_grad()      # Reset parameter gradients
    outputs = model(inputs)    # Forward pass
    loss = criterion(outputs, targets) # Loss calculation
    loss.backward()            # Backward pass (derivatives)
    optimizer.step()           # Update parameters`,
    languageId: 'python'
  },
  {
    id: 'pytorch-datasets',
    title: 'PyTorch Datasets & DataLoaders',
    description: 'Coordinating batch size divisions, shuffling, and multi-threaded data loads.',
    explanation: [
      'Dataset classes act as data wrappers holding collections of raw records.',
      'DataLoader wraps a Dataset to divide data into batches, handle shuffling, and manage parallel loading threads.',
      'This avoids overloading system RAM when training models on heavy image or text collections.'
    ],
    code: `from torch.utils.data import TensorDataset, DataLoader
import torch

features = torch.randn(100, 10)
labels = torch.randint(0, 2, (100,))

dataset = TensorDataset(features, labels)
dataloader = DataLoader(dataset, batch_size=32, shuffle=True)`,
    languageId: 'python'
  },
  {
    id: 'pytorch-cnns',
    title: 'PyTorch CNNs (Convolutional Networks)',
    description: 'Structuring Convolutional layers (nn.Conv2d) for computer vision tasks.',
    explanation: [
      'CNNs use convolutional layers to extract spatial features directly from raw image matrices.',
      'nn.Conv2d applies learnable kernel filters to input image channels.',
      'nn.MaxPool2d decreases dimensionality, downsampling feature sizes to speed up calculations.'
    ],
    code: `import torch.nn as nn

class ConvNet(nn.Module):
    def __init__(self):
        super(ConvNet, self).__init__()
        self.conv1 = nn.Conv2d(in_channels=1, out_channels=32, kernel_size=3)
        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)
        self.fc = nn.Linear(32 * 13 * 13, 10)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = x.view(-1, 32 * 13 * 13)
        return self.fc(x)`,
    languageId: 'python'
  },
  {
    id: 'pytorch-rnns',
    title: 'PyTorch RNNs (Recurrent Networks)',
    description: 'Using LSTM and GRU layers (nn.LSTM) to parse sequential time-series or natural text streams.',
    explanation: [
      'Recurrent Neural Networks (RNNs) process sequential, temporal streams (time-series, text sentences).',
      'LSTM (Long Short-Term Memory) layers retain internal states, mitigating exploding gradient challenges.',
      'They expect input tensor shapes containing sequence lengths, batch sizes, and input feature dimensions.'
    ],
    code: `import torch.nn as nn

# Define an LSTM layer (input size 10, hidden size 20, 2 layers)
lstm = nn.LSTM(input_size=10, hidden_size=20, num_layers=2)
# input shape: (seq_len, batch_size, input_size)`,
    languageId: 'python'
  },
  {
    id: 'pytorch-saving',
    title: 'PyTorch Model Saving and Loading',
    description: 'Saving model parameters using state_dict and reloading them for predictions.',
    explanation: [
      'In PyTorch, model learnable parameters are organized cleanly inside a dictionary called state_dict.',
      'To save model weights, serialize the dictionary using the torch.save() function.',
      'To reload, instantiate the model structure and call model.load_state_dict(torch.load(path)).'
    ],
    code: `import torch

# Save model state dictionary
torch.save(model.state_dict(), "model_weights.pth")

# Load model weights back for inference
model = SimpleNet()
model.load_state_dict(torch.load("model_weights.pth"))
model.eval() # Set to evaluation mode`,
    languageId: 'python'
  }
];
