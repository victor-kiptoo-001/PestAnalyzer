import cv2
import numpy as np

def preprocess_image(file):
    image = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
    image = cv2.resize(image, (224, 224))
    return image / 255.0
