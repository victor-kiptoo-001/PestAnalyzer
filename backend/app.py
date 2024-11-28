

from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
import cv2

app = Flask(__name__)
model = load_model("models/pest_disease_model.h5")  # Load the trained ML model

@app.route("/analyze", methods=["POST"])
def analyze():
    file = request.files["file"]
    image = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
    image = cv2.resize(image, (224, 224)) / 255.0  # Normalize the image
    prediction = model.predict(np.expand_dims(image, axis=0))
    class_id = int(np.argmax(prediction, axis=1)[0])
    confidence = float(np.max(prediction))
    response = {
        "label": class_id,
        "confidence": confidence,
        "remedies": get_remedies(class_id)  # Fetch remedies based on class_id
    }
    return jsonify(response)

def get_remedies(class_id):
    # Example remedies (replace with database or file lookup)
    remedies = {
        0: [{"type": "Organic", "name": "Neem Oil", "instructions": "Spray once a week"}],
        1: [{"type": "Synthetic", "name": "Fungicide X", "instructions": "Mix with water 1:5"}]
    }
    return remedies.get(class_id, [])

if __name__ == "__main__":
    app.run(debug=True)
