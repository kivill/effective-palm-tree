from typing import Any
from flask import Flask, request, jsonify, make_response

import json

from joblib import load
from catboost import CatBoostClassifier


server = Flask(__name__)
server.config.update(
    JSON_SORT_KEYS=False
)

model = CatBoostClassifier()
model.load_model('./assets/clf.cbm')
vectorizer = load('./assets/vectorizer.joblib')


@server.route('/predict', endpoint='predict', methods=['GET', 'POST'])
def predict():
    try:
        data = request.get_data()
        data = json.loads(data)
        text = data['text']
        
        vectors = vectorizer.transform([text])
        probabilities = model.predict_proba(vectors)[0]
        
        predictions = dict(zip([0, 1], probabilities))

        response = make_response(
            jsonify(
                {
                    'message': 'ok', 
                    'predictions': predictions
                    }
                ),
                200
                )

    except Exception as e:
        response = make_response(
            jsonify(
                {'message': str(e)}
            ),
            400
        )

    return response
