import os
import cv2
import numpy as np
from sklearn.model_selection import train_test_split

def load_images_from_folder(folder, target_size=(224, 224)):
    images = []
    labels = []
    class_names = os.listdir(folder)
    for class_id, class_name in enumerate(class_names):
        class_path = os.path.join(folder, class_name)
        if os.path.isdir(class_path):
            for filename in os.listdir(class_path):
                filepath = os.path.join(class_path, filename)
                image = cv2.imread(filepath)
                if image is not None:
                    image = cv2.resize(image, target_size)
                    images.append(image)
                    labels.append(class_id)
    return np.array(images), np.array(labels), class_names

def preprocess_data(data_dir, test_size=0.2, target_size=(224, 224)):
    print("Loading and preprocessing data...")
    images, labels, class_names = load_images_from_folder(data_dir, target_size)
    images = images / 255.0  # Normalize images
    X_train, X_test, y_train, y_test = train_test_split(images, labels, test_size=test_size, random_state=42)
    return X_train, X_test, y_train, y_test, class_names

if __name__ == "__main__":
    data_dir = "data"  # Path to dataset
    X_train, X_test, y_train, y_test, class_names = preprocess_data(data_dir)
    np.savez("processed_data.npz", X_train=X_train, X_test=X_test, y_train=y_train, y_test=y_test, class_names=class_names)
    print("Data preprocessing complete. Saved to 'processed_data.npz'.")
