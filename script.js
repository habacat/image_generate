const API_KEY = "3y33FP5_A7vhbguiTk2bWAgZYF8qy8OGNJsZQxRAXCk";
const API_BASE = "https://chimeragpt.adventblocks.cc/api/v1";

const generateBtn = document.getElementById('generate');
const promptInput = document.getElementById('prompt');
const imagesDiv = document.getElementById('images');
const imagesContainer = document.createElement('div');

// imagesContainer.id = 'images-container';
// imagesDiv.appendChild(imagesContainer);

generateBtn.addEventListener('click', async () => {
  const prompt = promptInput.value;

try{
  const response = await fetch(`${API_BASE}/images/generations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      prompt,
      n: 10,
      size: '1024x1024'
    })
  });


  const data = await response.json();

  if (!data.data || !Array.isArray(data.data)) {
    throw new Error('Invalid response'); 
  }
	imagesContainer.id = 'images-container';
	imagesDiv.appendChild(imagesContainer);
    // imagesDiv.innerHTML = '';
  
  data.data.forEach(item => {
    const img = document.createElement('img');
	  img.src = item.url;
	  imagesContainer.id = 'images-container';
	  imagesDiv.appendChild(imagesContainer);
    imagesDiv.appendChild(img);
  });

      } catch(err) {
        console.error(err);
        alert('Failed to generate images');  
      }
    });
