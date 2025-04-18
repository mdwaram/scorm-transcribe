import os
from flask import Flask, request, render_template
from werkzeug.utils import secure_filename
import zipfile

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024 * 1024  # 16MB limit
ALLOWED_EXTENSIONS = {'zip'}

def allowed_file(filename):
  return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def save_file():
  if 'scormFile' not in request.files:
    return ''
  file = request.files['scormFile']
  if file.filename == '':
    return ''
  if file and allowed_file(file.filename):
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(file_path)
    return file_path
  return ''

def extract_files(filename):
  sc_files = []
  e_files = []
  files_to_process = {'filename': os.path.basename(filename), 'content': []}
  folder_name = os.path.splitext(filename)[0]
  zipfile_ob = zipfile.ZipFile(filename)
  zipfile_ob.extractall(folder_name)
  story_content_dir = f'{folder_name}/story_content'
  external_files_dir = f'{folder_name}/story_content/external_files'
  sc_files = next(os.walk(story_content_dir), (None, None, []))[2]
  e_files = next(os.walk(external_files_dir), (None, None, []))[2]
  for sc_file in sc_files:
    name, ext = os.path.splitext(sc_file)
    if ext in ['.mp3']:
        file_to_process = {}
        file_to_process['type'] = ext
        file_to_process['file_path'] = f'{story_content_dir}/{sc_file}'
        file_to_process['basename'] = os.path.basename(file_to_process['file_path'])
        files_to_process['content'].append(file_to_process)
  for e_file in e_files:
    name, ext = os.path.splitext(e_file)
    if ext in ['.mp3', '.pdf', '.html']:
        file_to_process = {}
        file_to_process['type'] = ext
        file_to_process['file_path'] = f'{external_files_dir}/{e_file}'
        file_to_process['basename'] = os.path.basename(file_to_process['file_path'])
        files_to_process['content'].append(file_to_process)
  return process_files(files_to_process)

def process_files(files_to_process):
  updated_files_to_process = {'filename': files_to_process['filename'], 'content': []}
  for file in files_to_process['content']:
    if file['type'] == '.mp3':
      transcribed_content = call_edenai_mp3(file['file_path'])
      file['transcribed_content'] = transcribed_content
    elif file['type'] == '.pdf':
      transcribed_content = call_edenai_pdf(file['file_path'])
      file['transcribed_content'] = transcribed_content
    else:
      transcribed_content = call_cloudconvert_html(file['file_path'])
      file['transcribed_content'] = transcribed_content
    updated_files_to_process['content'].append(file)
  return updated_files_to_process

def call_edenai_mp3(file_path):
  return 'hello world this is cool mp3'

def call_edenai_pdf(file_path):
  return 'hello world this is cool pdf'

def call_cloudconvert_html(file_path):
  return 'hello world this is cool html'

@app.route('/index', methods=['POST'])
@app.route('/', methods=['GET'])
def index():
  error_message = ''
  if request.method == 'POST':
    file_path = save_file()
    if file_path == '':
      error_message = 'Upload was not processed successfully!'
    else:
      error_message = extract_files(file_path)
      
  #error_message = extract_files(os.path.join(app.config['UPLOAD_FOLDER'], 'AtAmMuHo_01_Assistance_ENG_v16.zip'))
  return render_template('index.html', error_message=error_message)
