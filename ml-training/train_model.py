from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D, Dropout
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Load and augment data
datagen = ImageDataGenerator(rescale=1.0/255, rotation_range=20, horizontal_flip=True)
train_data = datagen.flow_from_directory("data/train", target_size=(224, 224))
val_data = datagen.flow_from_directory("data/test", target_size=(224, 224))

# Build the model
base_model = MobileNetV2(input_shape=(224, 224, 3), include_top=False, weights="imagenet")
base_model.trainable = False

model = Sequential([
    base_model,
    GlobalAveragePooling2D(),
    Dense(128, activation="relu"),
    Dropout(0.5),
    Dense(train_data.num_classes, activation="softmax")
])

model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])
model.fit(train_data, validation_data=val_data, epochs=10)
model.save("../backend/models/pest_disease_model.h5")
