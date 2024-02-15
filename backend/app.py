from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from langchain.llms import LocalLLM

# Load LLama2 model without GPU
model_name = "h2oai/h2ogpt-4096-llama2-7b-chat"  # Replace with your chosen model
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name, device="cpu")

# Ollama model initialization
model_dir = "/usr/share/ollama/.ollama/models"  # Replace with your saved model path
local_model = LocalLLM(
    "ollama", model_path=model_dir, server_url="http://localhost:11434"
)

app = Flask(__name__)

@app.route("/generate", methods=["POST"])
def generate():
    # Access user input
    try:
        user_input = request.json["input"]
    except (KeyError, ValueError):
        return jsonify({"error": "Invalid input format"}), 400

    # Craft prompt
    prompt = f"You: {user_input}\nBot: "

    # Generate text using Langchain with Ollama
    try:
        response = local_model.generate(prompt=prompt)
    except Exception as e:
        return jsonify({"error": f"Generation error: {str(e)}"}), 500

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=11434, debug=True)  # Use port 11434
