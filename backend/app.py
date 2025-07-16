from flask import Flask, request, jsonify
import joblib

import traceback

app = Flask(__name__)

# Load model and vectorizer
model = joblib.load('model/fake_news_model.pkl')
vectorizer = joblib.load('model/tfidf_vectorizer.pkl')

@app.route('/')
def home():
    return "Fake News Detection API is running."

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        input_text = data.get('text')

        if not input_text:
            return jsonify({'error': 'No text provided'}), 400

        # Preprocess: Vectorize
        vectorized_input = vectorizer.transform([input_text])
        prediction = model.predict(vectorized_input)[0]
        label = 'REAL' if prediction == 1 else 'FAKE'

        return jsonify({'prediction': label}), 200

    except Exception as e:
        return jsonify({'error': str(e), 'trace': traceback.format_exc()}), 500

if __name__ == '__main__':
    app.run(debug=True)
