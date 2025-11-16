FROM python:3.12-slim
LABEL authors="warih"

WORKDIR /app

COPY . .

RUN python -m venv venv

RUN source ./venv/bin/activate

RUN pip install -r requirements.txt

ENV API_KEY='AIzaSyAdKtbT9IEZyAxLmDJVIhMxVumtfEbGGc8'

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]