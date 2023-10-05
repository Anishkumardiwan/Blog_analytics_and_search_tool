 <h1>Blog Analytics and Search Tool</h1>
    <p>This is a Node.js application that provides blog analytics and a search functionality for a third-party blog API. It uses Express.js for creating API endpoints and Lodash for data analysis. The tool fetches data from the provided third-party blog API, stores it in a JSON file, and offers statistics on the fetched blogs. Additionally, it allows users to search for blogs based on a query parameter.</p>

<h2> Postman Documentation <h2>
 <p><a href="https://documenter.getpostman.com/view/19679591/2s9YJey1k6">Click Here</a></p>
 
 <h2>Getting Started</h2>
    <p>To get started with this tool, follow these steps:</p>
    <ol>
        <li>Clone this repository to your local machine:</li>
        <pre><code>git clone &lt;repository-url&gt;</code></pre>
        <li>Install the required dependencies:</li>
        <pre><code>npm install</code></pre>
        <li>Start the Express.js server:</li>
        <pre><code>node app.js</code></pre>
    </ol>
    <p>The server will run on the default port 3000 unless you specify a different port in the <code>PORT</code> environment variable.</p>

   <h2>API Endpoints</h2>
    <h3>1. Retrieve Blog Statistics</h3>
    <ul>
        <li><strong>Route:</strong> /api/blog-stats</li>
        <li><strong>Method:</strong> GET</li>
        <li><strong>Description:</strong> Fetches blog data from the third-party API, calculates statistics, and stores the data in a JSON file.</li>
    </ul>

   <h3>2. Search for Blogs</h3>
    <ul>
        <li><strong>Route:</strong> /api/blog-search</li>
        <li><strong>Method:</strong> GET</li>
        <li><strong>Description:</strong> Accepts a query parameter (<code>query</code>) and searches for blogs containing the provided query in their titles. The search is case-insensitive.</li>
    </ul>

   <h2>Error Handling</h2>
    <p>The tool handles errors gracefully and provides appropriate error messages if the third-party API is unavailable or returns an error.</p>

   <h2>Data Storage</h2>
    <p>Fetched blog data is stored in a JSON file named <code>blogData.json</code>. This file is used for subsequent searches to reduce API requests.</p>

   <h2>Usage</h2>
    <p>After starting the server, you can access the API endpoints mentioned above using tools like <code>curl</code> or Postman.</p>

   <h2>Dependencies</h2>
    <ul>
        <li>Express.js</li>
        <li>Axios</li>
        <li>Lodash</li>
        <li>fs (File System)</li>
    </ul>

   <h2>Contributing</h2>
    <p>If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.</p>

   <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE.md">LICENSE.md</a> file for details.</p>

   <h2>Acknowledgments</h2>
    <p>Thanks to the creators of Express.js, Axios, and Lodash for their amazing libraries.</p>
