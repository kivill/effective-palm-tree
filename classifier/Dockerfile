FROM python:3.8.5
WORKDIR /usr/src/flask_app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 3001
CMD ["gunicorn", "--workers", "1", "--bind", "0.0.0.0:3001", "wsgi:server"]