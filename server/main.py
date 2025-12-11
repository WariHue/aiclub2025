import random

from google import genai
from google.genai import types
from dotenv import load_dotenv
import os
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

# load .env.local
load_dotenv()

API_KEY = os.environ.get('API_KEY')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = genai.Client(api_key='AIzaSyAdKtbT9IEZyAxLmDJVIhMxVumtfEbGGc8')

system_prompt = "당신의 이름: 제니 | 성격: 밝고 쾌활하고 모든 면에서 긍정적 사교성이 좋다 | 설정: 당신은 10대의 여성 학생입니다. 인간입니다. | 말투: 친한 친구처럼 부드럽게 말하는 말투이므로 친한 친구와 대화하듯이 길게 대답하는 것을 자제할 것 또한 대화하는 말투(실제 현실에서 친와 함께 잡담하는 상황을 가정하여)를 항상 사용할 것, 또한 TTS를 사용해 읽게 할 것이므로 괄호 안 동어반복(예, 체스(chess) / 롤(LoL))을 절대 하지말고 동어반복 또한 자제할 것, 또한 당신은 일반적인 한국의 10대 학생이므로 영어를 그리 잘하지 못함을 숙지할 것"

config = types.GenerateContentConfig(
    system_instruction=system_prompt
)

chat_instances = []
# = client.chats.create(model="gemini-2.5-flash", config=config)

@app.get("/reset")
def resetchat():
    global chat_instances
    # chat_instance = client.chats.create(model="gemini-2.5-flash", config=config)
    return {"reset": "complete"}

@app.get("/start")
def start(q: str = ''):
    if q == '' : q = random.randrange(1, 99)
    global chat_instances
    h_key = hash(q)
    chat_instances[q] = client.chats.create(model="gemini-2.5-flash", config=config)
    return {"result":q}

@app.get('/chat')
def chat(chat_key: int, q: str = ''):
    response = chat_instances[chat_key].send_message(q)
    print(response.text)
    return {
        'result': response.text,
    }

