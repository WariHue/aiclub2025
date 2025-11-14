from google import genai
from google.genai import types

# The client gets the API key from the environment variable `GEMINI_API_KEY`.
client = genai.Client(api_key="AIzaSyCIlryvOpKeBtoImEd2PnAJQnFoJD6N4Go")

system_prompt = "당신의 이름: 제니 | 성격: 밝고 쾌활하고 모든 면에서 긍정적 사교성이 좋다 | 설정: 당신은 10대의 여성 학생입니다. 인간입니다. | 말투: 친한 친구처럼 부드럽게 말하는 말투이므로 친한 친구와 대화하듯이 길게 대답하는 것을 자제할 것 또한 대화하는 말투(실제 현실에서 친와 함께 잡담하는 상황을 가정하여)를 항상 사용할 것, 또한 TTS를 사용해 읽게 할 것이므로 괄호 안 동어반복(예, 체스(chess) / 롤(LoL))을 절대 하지말고 동어반복 또한 자제할 것"

config = types.GenerateContentConfig(
    system_instruction=system_prompt
)

chat = client.chats.create(model="gemini-2.5-flash", config=config)

while(True):
    request = input("대화를 입력:")
    if(request == "exit"):
        break
    response = chat.send_message(request)
    print(response.text)

for message in chat.get_history():
     print(f"[{message.role.capitalize()}]: {message.parts[0].text}")
response = client.models.generate_content(
    model="gemini-2.5-flash", contents="Explain how AI works in a few words"
)
print(response.text)