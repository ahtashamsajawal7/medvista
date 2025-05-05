

from flask import Flask, render_template, request, redirect, url_for
import os
import PIL.Image
import google.generativeai as genai

# Initialize Flask app
app = Flask(__name__)
genai.configure(api_key="AIzaSyB4x-Essys32gdsmmqqld_luhcGBuL6PZU")

# Path where uploaded images will be saved
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Initialize the Gemini model
model = genai.GenerativeModel(model_name="gemini-1.5-pro")

@app.route('/')
def index():
    return render_template('index2.html')

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return redirect(request.url)
    file = request.files['file']
    if file.filename == '':
        return redirect(request.url)
    
    if file:
        # Save the uploaded image
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(image_path)
        
        # Process the image
        sample_file = PIL.Image.open(image_path)
        prompt = "scan this prescription and find medicine names...only and only display names nothing anythings"
        response = model.generate_content([prompt, sample_file])
        
        # Extract and display result
        medicines = response.text
        
        return render_template('result.html', medicines=medicines)

# if __name__ == '__main__':
#     app.run(debug=True)
if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5001)