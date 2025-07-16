# 📰 Fake News Detection using Machine Learning

This project is a full-stack application that detects whether a news article or headline is **FAKE** or **REAL** using natural language processing (NLP) and machine learning. It includes a trained Logistic Regression model served through a Flask API, and a modern Next.js frontend for interactive predictions.

<br/>

## 🔍 Problem Statement

With the rise of misinformation online, it's critical to develop tools that can detect and flag fake news content. This project uses NLP and a supervised learning approach to classify news content based on patterns in real and fake articles.

<br/>

## 🚀 Features

- Cleaned and preprocessed real-world dataset from [Kaggle](https://www.kaggle.com/datasets/clmentbisaillon/fake-and-real-news-dataset)
- Text vectorization using **TF-IDF**
- Classification using **Logistic Regression**
- Flask backend with `/predict` API endpoint
- Frontend built using **Next.js** with Axios integration
- Loading animation with simulated delay for UX enhancement

<br/>

## 🧠 Tech Stack

| Area      | Technology                 |
| --------- | -------------------------- |
| Language  | Python, TypeScript         |
| ML/NLP    | Scikit-learn, NLTK, TF-IDF |
| Backend   | Flask, Flask-CORS          |
| Frontend  | Next.js, Tailwind CSS      |
| API Calls | Axios                      |
| Packaging | joblib                     |

<br/>

## 📊 Model Performance

- **Vectorizer:** TF-IDF with 5000 max features
- **Model:** Logistic Regression
- **Accuracy:** ~93% on test data
- **Evaluation Metrics:** Precision, Recall, F1-Score

<br/>

## 🏗️ Project Structure

fake-news-detector/
├── backend/ # Flask API
│ ├── app.py
│ └── model/
│ ├── fake_news_model.pkl
│ └── tfidf_vectorizer.pkl
├── frontend/ # Next.js frontend
│ └── pages/
│ └── index.tsx
├── notebooks/ # Jupyter notebooks for EDA & modeling
│ ├── 01_eda.ipynb
│ └── 02_modeling.ipynb
├── data/
│ ├── Fake.csv
│ ├── True.csv
│ └── fake_or_real_news.csv
└── README.md

<br/>

## 🧪 How to Run

### ✅ Backend (Flask API)

```bash
cd backend
pip install -r requirements.txt  # flask, flask-cors, joblib, scikit-learn, nltk
python app.py
Flask server will run on: http://127.0.0.1:5000

```

### ✅ Frontend (Next.js)

```bash
Copy code
cd frontend
npm install
npm run dev
Frontend will run on: http://localhost:3000

Make sure the backend is running before using the frontend.
<br/>
```

### 🌐 API Endpoint

POST /predict

json
Copy code
Request Body:
{
"text": "The president has announced a new economic policy."
}

Response:
{
"prediction": "REAL"
}

### 🧠 Future Improvements

Add support for deep learning models (e.g., LSTM, BERT)

Use SHAP or LIME for model explainability

Add user authentication and history tracking

Deploy frontend (Vercel) + backend (Render or Railway)

Add confidence scores with model.predict_proba()

### 📄 License

This project is for educational and portfolio purposes only.
Dataset used is publicly available on Kaggle.

🙌 Acknowledgements
Kaggle Fake/Real News Dataset

Scikit-learn, Flask, Next.js documentation
