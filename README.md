- - -

<h1>Avatar Generation API
</h1><h2>Overview
</h2>Avatar Generation API is a modern, lightweight service that generates cartoon avatars using deep learning models. It supports various features like configurable image sizes and transparent backgrounds. Designed for seamless integration, this API provides an efficient way to create unique avatars for games, profiles, or digital art.

- - -

<h2>Features
</h2><ul><li>Generate high-quality cartoon avatars.</li><li>Supports multiple resolutions: <code>96x96</code> (small) and <code>128x128</code> (large).</li><li>Transparent background support for flexible usage.</li><li>RESTful API powered by FastAPI for easy integration.</li><li>Deployed using <code>ngrok</code> for accessible endpoints.</li></ul>

- - -

<h2>Tech Stack
</h2><h3>Backend
</h3><ul><li>Language: Python</li><li>Framework: FastAPI</li><li>Libraries:<ul><li>TensorFlow/Keras: For loading and using the deep learning models.</li><li>PIL: For image processing and transparency support.</li><li>NumPy: For handling noise input to the generator.</li></ul></li></ul><h3>Frontend
</h3>Implemented with Next.Js, created for high performance and creative UI. Deployed on Vercel.

- - -

<h2>Neural Network Model
</h2>The core of the application is a Deep Convolutional Generative Adversarial Network (DCGAN).
<h3>Architecture
</h3><ul><li>Generator:
The generator is a deep convolutional neural network that transforms a random noise vector (latent space) into meaningful images. It uses techniques like upsampling and transposed convolutions to create sharp and realistic images.

</li><li>Discriminator:
Although not used in the API, the discriminator was a part of the training pipeline. It classifies images as real or fake, helping the generator improve iteratively.

</li></ul><h3>Training Details
</h3><ul><li>Dataset:
The model was trained on the Cartoon Set dataset, a large collection of 2D cartoon avatar images, curated for generating diverse facial features and styles.

<ul><li>Dataset Link: <a rel="noopener" target="_new" style="--streaming-animation-state: var(--batch-play-state-1); --animation-rate: var(--batch-play-rate-1);"><span style="--animation-count: 2; --streaming-animation-state: var(--batch-play-state-2);">Cartoon</span><span style="--animation-count: 3; --streaming-animation-state: var(--batch-play-state-2);">&nbsp;Set</span><span style="--animation-count: 4; --streaming-animation-state: var(--batch-play-state-2);">&nbsp;Dataset</span></a>.</li><li>Augmented to handle various attributes like facial shapes, eye types, and hairstyles.</li></ul></li><li>Input Dimensions:
<ul><li>Latent vector (<code>SEED_SIZE</code>): 100 for 96x96 images and 128 for 128x128 images.</li><li>Output Dimensions: Either <code>96x96x3</code> or <code>128x128x3</code>.</li></ul></li><li>Optimization:
<ul><li>Optimizer: Adam with learning rates tuned for GAN training stability.</li><li>Loss Function: Binary Cross-Entropy for both generator and discriminator.</li></ul></li></ul>

- - -

<h2>API Documentation
</h2><h3>Base URL
</h3><code class="!overflow-visible" data-te-codeblock="">/generate-image</code><h3>Endpoints
</h3><h4>Health Check
</h4>GET <code>/health</code>
<ul><li>Description: Checks if the server is running.</li><li>Response:
<code class="!overflow-visible" data-te-codeblock="">json

{
  "message": "okay"
}</code></li></ul><h4>Generate Image
</h4>GET <code>/generate-image</code>
<ul><li>Description: Generates a cartoon avatar image.
</li><li>Query Parameters:
<ul><li><code>transparent</code> (optional, <code>bool</code>):<ul><li><code>true</code> for a transparent background.</li><li>Default: <code>false</code>.</li></ul></li><li><code>size</code> (optional, <code>string</code>):<ul><li><code>small</code> for 96x96 resolution.</li><li><code>large</code> for 128x128 resolution.</li><li>Default: <code>small</code>.</li></ul></li></ul></li><li>Response:
Returns the generated image as a <code>.png</code> file.

</li><li>Examples:
<ul><li>Normal small image:
<code class="!overflow-visible" data-te-codeblock="">

/generate-image</code></li><li>Transparent large image:
<code class="!overflow-visible" data-te-codeblock="">

/generate-image?transparent=true&amp;size=large</code></li></ul></li></ul>

- - -

<h2>Usage Instructions
</h2><h3>Setup
</h3><ol><li>Clone this repository:
<code class="!overflow-visible" data-te-codeblock="">bash

git clone https://github.com/<username>/avatar-generation-api.git
cd avatar-generation-api</username></code></li><li>Install dependencies:
<code class="!overflow-visible" data-te-codeblock="">bash

pip install -r requirements.txt</code></li><li>Download the trained models and place them in the <code>/kaggle/working/</code> directory:
<ul><li>Small model: <code>face_generator_96.h5</code></li><li>Large model: <code>face_generator_128.h5</code></li></ul></li><li>Run the server:
<code class="!overflow-visible" data-te-codeblock="">bash

python main.py</code></li><li>Start an <code>ngrok</code> tunnel:
<code class="!overflow-visible" data-te-codeblock="">bash

ngrok http 12000</code></li><li>Access the API using the provided ngrok URL.
</li></ol>

- - -

<ul><li>Performance:<ul><li>Average latency per request: \~50ms (depends on hardware).</li><li>High-quality results with minimal artifacts.</li></ul></li></ul>

- - -

<h2>Future Scope
</h2><ul><li>Add frontend UI for real-time avatar generation and customization.</li><li>Support for additional attributes like color schemes and custom features.</li><li>Deployment on a scalable cloud platform.</li></ul>

- - -

<h2>Contributor
</h2><ul><li>Charan Kamal Singh: CO21314: Developer.</li></ul>

- - -
